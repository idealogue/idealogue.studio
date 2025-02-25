import React, { useCallback, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'
import { PlayerButton, PlayerButtons } from '~/components/pages/octant/PlayerButton'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'

interface PlayerProps {
    src: string
    durationsInSeconds: [number, ...number[]]
    posterSrc?: string
    onClipChange?(clipIndex: number): void
}

interface Clip {
    position: number
    duration: number
}

export function Player({ src, durationsInSeconds, posterSrc, onClipChange }: PlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    const clips: Clip[] = useMemo(() => {
        const result: Clip[] = []

        for (const duration of durationsInSeconds) {
            const { position: prevPosition = 0, duration: prevDuration = 0 } =
                result[result.length - 1] || {}

            result.push({
                position: prevPosition + prevDuration,
                duration,
            })
        }

        return result
    }, [durationsInSeconds])

    const buttonRefs = useRef<Record<number, HTMLButtonElement | undefined>>({})

    const attachButtonRef = useCallback((el: HTMLButtonElement | null) => {
        if (!el) {
            return
        }

        const index = Number(el.getAttribute('data-index')) ?? undefined

        if (index != null) {
            buttonRefs.current[index] = el
        }
    }, [])

    const recentClipIndexRef = useRef(0)

    return (
        <PlayerRoot $count={clips.length}>
            <AutoPlayingVideo
                innerRef={videoRef}
                loop
                playsInline
                muted
                poster={posterSrc}
                width={780}
                height={1688}
                src={src}
                onTimeUpdate={(_, ct) => {
                    for (let i = 0; i < clips.length; i++) {
                        const clip = clips[i]

                        if (!clip) {
                            continue
                        }

                        const { position, duration } = clip

                        if (duration <= 0) {
                            continue
                        }

                        const Pos = !duration ? 0 : Math.max(0, ct - position) / clip.duration

                        buttonRefs.current[i]?.style.setProperty(
                            '--PlayerButton_Progress',
                            `${Math.min(1, Pos)}`
                        )

                        if (ct < clip.position || ct >= clip.position + clip.duration) {
                            continue
                        }

                        if (recentClipIndexRef.current === i) {
                            continue
                        }

                        recentClipIndexRef.current = i

                        onClipChange?.(i)
                    }
                }}
            />
            <PlayerButtons>
                {clips.map((clip, index) => (
                    <PlayerButton
                        innerRef={attachButtonRef}
                        data-index={index}
                        key={clip.position}
                        onClick={() => {
                            if (videoRef.current) {
                                videoRef.current.currentTime = clip.position
                            }
                        }}
                    />
                ))}
            </PlayerButtons>
        </PlayerRoot>
    )
}

const PlayerRoot = styled.div<{ $count: number }>`
    margin: 0 auto;
    width: 22rem;
    max-width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;

    video {
        aspect-ratio: 780 / 1688;
        width: 100%;
        height: auto;
        border-radius: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
    }

    ${PlayerButtons} {
        ${({ $count }) => css`
            width: ${$count * 5.5}rem;
        `}
    }
`
