import React, { ReactNode, useCallback, useReducer, useRef } from 'react'
import styled from 'styled-components'
import { PlayButton } from '~/components/pages/streamr/PlayButton'
import { Video } from '~/components/shared/Video'

const Inner = styled.div`
    border-radius: 8px;
    margin: 0 auto;
    max-width: 1432px;
    overflow: hidden;
    position: relative;
    transition: 200ms opacity;
`

const playVideo = async (video: HTMLVideoElement | null) => {
    if (video) {
        try {
            await video.play()
        } catch (_) {
            // Video could not be played.
        }
    }
}

interface VideoPlayerProps {
    poster: string
    children: ReactNode
    aspect?: string
}

export function VideoPlayer({ poster, children, aspect }: VideoPlayerProps) {
    const [active, activate] = useReducer(() => true, false)

    const videoRef = useRef<HTMLVideoElement>(null)

    const onClick = useCallback(() => {
        activate()
        playVideo(videoRef.current)
    }, [])

    return (
        <VideoPlayerRoot>
            <Video
                $aspect={aspect}
                controls={active}
                poster={poster}
                preload="metadata"
                ref={videoRef}
            >
                {children}
            </Video>
            {!active && <PlayButton onClick={onClick} />}
        </VideoPlayerRoot>
    )
}

export const VideoPlayerRoot = styled(Inner)``
