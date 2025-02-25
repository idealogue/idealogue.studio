import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import {
    PlayerButton,
    PlayerButtons as PrestyledPlayerButtons,
} from '~/components/pages/octant/PlayerButton'
import {
    Allocation,
    Cart,
    CartRoot,
    FundsUsage,
    PreciseSlider,
    Rewards,
    Slider,
} from '~/components/pages/octant/UiCell'
import { Caption as PrestyledCaption } from '~/components/shared/Caption'
import { TABLET } from '~/utils/css'

export function UiMobile() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const btn0Ref = useRef<HTMLButtonElement>(null)

    const btn1Ref = useRef<HTMLButtonElement>(null)

    const btn2Ref = useRef<HTMLButtonElement>(null)

    const btn3Ref = useRef<HTMLButtonElement>(null)

    const btn4Ref = useRef<HTMLButtonElement>(null)

    const btn5Ref = useRef<HTMLButtonElement>(null)

    const buttonRefs: RefObject<HTMLButtonElement | null>[] = [
        btn0Ref,
        btn1Ref,
        btn2Ref,
        btn3Ref,
        btn4Ref,
        btn5Ref,
    ]

    const onPlaybackEnded = useCallback(() => {
        setCurrentIndex((c) => (c + 1) % 6)
    }, [])

    useEffect(
        function fillPreviousButtons() {
            for (let i = 0; i < buttonRefs.length; i++) {
                const { current: btn } = buttonRefs[i]

                if (!btn) {
                    continue
                }

                btn?.style.setProperty('--PlayerButton_Progress', currentIndex <= i ? '0' : '1')
            }
        },
        [currentIndex]
    )

    return (
        <UiMobileRoot>
            <Items>
                <Item $active={currentIndex === 0}>
                    <Allocation
                        autoHeight
                        loop={false}
                        playing={currentIndex === 0}
                        onPlaybackEnded={onPlaybackEnded}
                        onTimeUpdate={(_, time, total) => {
                            const { current: btn } = btn0Ref

                            if (!btn || currentIndex !== 0) {
                                return
                            }

                            btn.style.setProperty(
                                '--PlayerButton_Progress',
                                `${total !== 0 ? time / total : 0}`
                            )
                        }}
                    />
                </Item>
                <Item $active={currentIndex === 1}>
                    <Cart
                        autoHeight
                        loop={false}
                        playing={currentIndex === 1}
                        onPlaybackEnded={onPlaybackEnded}
                        onTimeUpdate={(_, time, total) => {
                            const { current: btn } = btn1Ref

                            if (!btn || currentIndex !== 1) {
                                return
                            }

                            btn.style.setProperty(
                                '--PlayerButton_Progress',
                                `${total !== 0 ? time / total : 0}`
                            )
                        }}
                    />
                </Item>
                <Item $active={currentIndex === 2}>
                    <Slider
                        autoHeight
                        loop={false}
                        playing={currentIndex === 2}
                        onPlaybackEnded={onPlaybackEnded}
                        onTimeUpdate={(_, time, total) => {
                            const { current: btn } = btn2Ref

                            if (!btn || currentIndex !== 2) {
                                return
                            }

                            btn.style.setProperty(
                                '--PlayerButton_Progress',
                                `${total !== 0 ? time / total : 0}`
                            )
                        }}
                    />
                </Item>
                <Item $active={currentIndex === 3}>
                    <PreciseSlider
                        autoHeight
                        loop={false}
                        playing={currentIndex === 3}
                        onPlaybackEnded={onPlaybackEnded}
                        onTimeUpdate={(_, time, total) => {
                            const { current: btn } = btn3Ref

                            if (!btn || currentIndex !== 3) {
                                return
                            }

                            btn.style.setProperty(
                                '--PlayerButton_Progress',
                                `${total !== 0 ? time / total : 0}`
                            )
                        }}
                    />
                </Item>
                <Item $active={currentIndex === 4}>
                    <FundsUsage
                        autoHeight
                        loop={false}
                        playing={currentIndex === 4}
                        onPlaybackEnded={onPlaybackEnded}
                        onTimeUpdate={(_, time, total) => {
                            const { current: btn } = btn4Ref

                            if (!btn || currentIndex !== 4) {
                                return
                            }

                            btn.style.setProperty(
                                '--PlayerButton_Progress',
                                `${total !== 0 ? time / total : 0}`
                            )
                        }}
                    />
                </Item>
                <Item $active={currentIndex === 5}>
                    <Rewards
                        autoHeight
                        loop={false}
                        playing={currentIndex === 5}
                        onPlaybackEnded={onPlaybackEnded}
                        onTimeUpdate={(_, time, total) => {
                            const { current: btn } = btn5Ref

                            if (!btn || currentIndex !== 5) {
                                return
                            }

                            btn.style.setProperty(
                                '--PlayerButton_Progress',
                                `${total !== 0 ? time / total : 0}`
                            )
                        }}
                    />
                </Item>
            </Items>
            <PlayerButtons>
                <PlayerButton
                    innerRef={btn0Ref}
                    onClick={() => {
                        setCurrentIndex(0)
                    }}
                />
                <PlayerButton
                    innerRef={btn1Ref}
                    onClick={() => {
                        setCurrentIndex(1)
                    }}
                />
                <PlayerButton
                    innerRef={btn2Ref}
                    onClick={() => {
                        setCurrentIndex(2)
                    }}
                />
                <PlayerButton
                    innerRef={btn3Ref}
                    onClick={() => {
                        setCurrentIndex(3)
                    }}
                />
                <PlayerButton
                    innerRef={btn4Ref}
                    onClick={() => {
                        setCurrentIndex(4)
                    }}
                />
                <PlayerButton
                    innerRef={btn5Ref}
                    onClick={() => {
                        setCurrentIndex(5)
                    }}
                />
            </PlayerButtons>
            <Captions>
                <PrestyledCaption>&zwnj;</PrestyledCaption>
                <Caption $active={currentIndex === 0}>
                    Adding a project to your cart for donations
                </Caption>
                <Caption $active={currentIndex === 1}>
                    Cart bounces when your choice drops in
                </Caption>
                <Caption $active={currentIndex === 2}>Drag the slider to allocate</Caption>
                <Caption $active={currentIndex === 3}>
                    Use the precise slider on mobile for accuracy
                </Caption>
                <Caption $active={currentIndex === 4}>Check out metrics</Caption>
                <Caption $active={currentIndex === 5}>
                    Estimate your rewards from locking GLM
                </Caption>
            </Captions>
        </UiMobileRoot>
    )
}

const Caption = styled(PrestyledCaption)<{ $active: boolean }>`
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transition: 200ms;
    transition-property: visibility, opacity;
    transition-delay: 200ms, 0s;
    top: 0;

    ${({ $active }) =>
        $active &&
        css`
            visibility: visible;
            opacity: 1;
            transition-delay: 200ms;
        `}
`

const Item = styled.div<{ $active: boolean }>`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
    opacity: 0;
    height: 100%;
    transition: 200ms;
    transition-property: visibility, opacity;
    transition-delay: 200ms, 0s;

    ${({ $active }) =>
        $active &&
        css`
            visibility: visible;
            opacity: 1;
            transition-delay: 200ms;
        `}
`

const Items = styled.div`
    height: 16.5rem;
    position: relative;
`

const Captions = styled.div`
    position: relative;
`

const PlayerButtons = styled(PrestyledPlayerButtons)`
    max-width: 17.5rem;
    padding: 0 1rem;
`

const UiMobileRoot = styled.div`
    --PlayerButton_IdleColor: #ebebeb;
    --PlayerButton_ActiveColor: #2d9b87;
    --PlayerButton_Space: 0.25rem;

    ${CartRoot} {
        aspect-ratio: 1 / 1;
    }

    ${CartRoot} video {
        max-width: 80%;
    }

    @media ${TABLET} {
        display: none;
    }
`
