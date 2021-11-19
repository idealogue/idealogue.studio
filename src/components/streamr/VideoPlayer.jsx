import React, { useState, useCallback, useRef } from 'react'
import styled, { css } from 'styled-components'
import PlayButton, { DarkTheme } from '$streamr/PlayButton'

const Inner = styled.div`
    border-radius: 8px;
    margin: 0 auto;
    max-width: 1432px;
    overflow: hidden;
    position: relative;
    transition: 200ms opacity;

    svg {
        display: block;
    }

    > svg {
        visibility: hidden;
    }
`

const Video = styled.video`
    display: block;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    transition: 500ms;
    transition-delay: 0s, 0s;
    transition-property: visibility, opacity;
    visibility: visible;
    width: 100%;

    ${({ active }) => !active && css`
        opacity: 0;
        visibility: hidden;
        transition-delay: 500ms, 0s;
    `}
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

const pauseVideo = (video) => {
    if (video) {
        video.pause()
    }
}

const VideoPlayer = ({ src, shortSrc, poster, sizeRatio = '16x9', ...props }) => {
    const [playSample, setPlaySample] = useState(true)

    const videoRef = useRef()

    const shortRef = useRef()

    const onClick = useCallback(() => {
        setPlaySample(false)
        playVideo(videoRef.current)
        pauseVideo(shortRef.current)
    }, [])

    const [width, height] = sizeRatio.split(/x/)

    return (
        <Inner {...props}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <Video
                active={playSample}
                autoPlay
                loop
                muted
                playsInline
                poster={poster}
                preload="metadata"
                ref={shortRef}
            >
                <source
                    src={shortSrc}
                    type="video/mp4"
                />
            </Video>
            <Video
                active={!playSample}
                controls
                poster={poster}
                preload="metadata"
                ref={videoRef}
            >
                <source
                    src={src}
                    type="video/mp4"
                />
            </Video>
            {playSample && (
                <PlayButton theme={DarkTheme} onClick={onClick} />
            )}
            <svg viewBox={`0 0 ${width} ${height}`}>
                <rect x="0" y="0" width="100%" height="100%" />
            </svg>
        </Inner>
    )
}

export default VideoPlayer
