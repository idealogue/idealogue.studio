import React, { useCallback, useRef, useReducer } from 'react'
import styled from 'styled-components'
import PlayButton from '$streamr/PlayButton'
import Video from '$shared/Video'

const Inner = styled.div`
    border-radius: 8px;
    margin: 0 auto;
    max-width: 1432px;
    overflow: hidden;
    position: relative;
    transition: 200ms opacity;
`

const playVideo = async (video) => {
    if (video) {
        try {
            await video.play()
        } catch (e) {
            // Video could not be played.
        }
    }
}

const UnstyledVideoPlayer = ({ src, poster, children, $aspect, ...props }) => {
    const [active, activate] = useReducer(() => true, false)

    const videoRef = useRef()

    const onClick = useCallback(() => {
        activate()
        playVideo(videoRef.current)
    }, [])

    return (
        <Inner {...props}>
            <Video
                $aspect={$aspect}
                controls={active}
                poster={poster}
                preload="metadata"
                ref={videoRef}
            >
                {children}
            </Video>
            {!active && (
                <PlayButton onClick={onClick} />
            )}
        </Inner>
    )
}

const VideoPlayer = styled(UnstyledVideoPlayer)``

export default VideoPlayer
