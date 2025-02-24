import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'

export interface Source {
    posterSrc?: string
    mediaSrc: string
}

interface PlayerProps {
    sources: [Source, ...Source[]]
}

export function Player({ sources }: PlayerProps) {
    const [sourceIndex, setSourceIndex] = useState(0)

    const source = sources[sourceIndex] || sources[0]

    const buttonRefs = useRef<
        Record<string, [index: number, element: HTMLButtonElement] | undefined>
    >({})

    const attachButtonRef = useCallback((el: HTMLButtonElement | null) => {
        if (!el) {
            return
        }

        const src = el.getAttribute('data-media-src')

        const index = Number(el.getAttribute('data-media-index')) ?? undefined

        if (src && index != null) {
            buttonRefs.current[src] = [index, el]
        }
    }, [])

    useEffect(
        function markPreviousButtonsAsComplete() {
            for (const value of Object.values(buttonRefs.current)) {
                if (!value) {
                    continue
                }

                const [index, el] = value

                try {
                    el.style.setProperty('--Player_Progress', index < sourceIndex ? '1' : '0')
                } catch (_ignore) {}
            }
        },
        [sourceIndex]
    )

    return (
        <PlayerRoot>
            <AutoPlayingVideo
                playsInline
                muted
                poster={source.posterSrc}
                width={780}
                height={1688}
                src={source.mediaSrc}
                onTimeUpdate={(mediaSrc, ct, tt) => {
                    const [index, el] = buttonRefs.current[new URL(mediaSrc).pathname] || []

                    if (index !== sourceIndex) {
                        return
                    }

                    el?.style.setProperty('--Player_Progress', `${tt ? ct / tt : 0}`)
                }}
                onPlaybackEnded={() => {
                    setSourceIndex((c) => (c + 1) % sources.length)
                }}
            />
            <Buttons>
                {sources.map((_, index) => (
                    <NavButton
                        ref={attachButtonRef}
                        data-media-src={sources[index].mediaSrc}
                        data-media-index={index}
                        key={sources[index].mediaSrc}
                        type="button"
                        onClick={() => {
                            setSourceIndex(index)
                        }}
                    />
                ))}
            </Buttons>
        </PlayerRoot>
    )
}

const NavButton = styled.button`
    appearance: none;
    background: none;
    border: 0;
    display: block;
    padding: 0.5rem;
    width: 5rem;
    height: 1.25rem;
    box-sizing: border-box;
    position: relative;

    &::after,
    &::before {
        content: '';
        width: 4rem;
        max-width: 4rem;
        height: 0.25rem;
        border-radius: 0.125rem;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
    }

    &::before {
        background-color: var(--Player_NavButtonIdleColor);
    }

    &::after {
        background-color: var(--Player_NavButtonActiveColor);
        width: calc(var(--Player_Progress, 0) * 4rem);
    }
`

const Buttons = styled.div`
    display: flex;
    margin: 0 auto;
    width: 15rem;
`

const PlayerRoot = styled.div`
    margin: 0 auto;
    width: 20rem;

    video {
        aspect-ratio: 780 / 1688;
        width: 20rem;
        height: auto;
    }
`
