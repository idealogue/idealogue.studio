import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import Glyph, { GlyphSource, HIGH, LOW } from '~/components/shared/Glyph'
import { useMounted } from '~/hooks/useMounted'
import { TouchIndicator } from './TouchIndicator'

interface IconProps {
    source: GlyphSource
}

export function Icon({ source }: IconProps) {
    return (
        <IconRoot>
            <Glyph source={source} />
        </IconRoot>
    )
}

const IconRoot = styled.div`
    align-items: center;
    background-color: #ffffff;
    display: flex;
    height: 16px;
    height: 20px;
    width: 16px;
    width: 20px;

    svg {
        display: block;
        flex: 1;
    }
`

const Slider = styled.div`
    align-items: center;
    display: flex;
    color: #4e4e4e;
`

const Track = styled.div`
    background: #eff1f2;
    flex: 1;
    height: 2px;
    margin: 0 20px;
    overflow: visible;
`

const Inner = styled.div`
    height: 100%;
    position: relative;
`

const Handle = styled.div<{ $position: number }>`
    background-color: #ffffff;
    border-radius: 50%;
    /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15); */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    color: #37c481;
    height: 24px;
    height: 32px;
    line-height: 24px;
    line-height: 32px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 500ms ease-in-out color;
    width: 24px;
    width: 32px;

    ${({ $position }) =>
        $position >= 75 &&
        css`
            color: #fec62e;
        `}

    ${({ $position }) =>
        $position >= 90 &&
        css`
            color: #f65a23;
        `}
`

const ProgressBar = styled.div<{ $position: number }>`
    background-color: #37c481;
    height: 100%;
    max-width: 100%;
    transition: 500ms ease-in-out background-color;

    ${({ $position }) =>
        $position >= 75 &&
        css`
            background-color: #fec62e;
        `}

    ${({ $position }) =>
        $position >= 90 &&
        css`
            background-color: #f65a23;
        `}
`

interface ResourceSliderProps {
    position?: number
    onTransitionFinish?(): void
    showTouch?: boolean
}

export function ResourceSlider({
    position: positionProp = 18,
    onTransitionFinish: onComplete,
    showTouch,
}: ResourceSliderProps) {
    const [position, setPosition] = useState(positionProp)

    const positionRef = useRef({
        position: positionProp,
    })

    const isMounted = useMounted()

    useEffect(() => {
        const duration = Math.max(1, Math.abs(positionProp - positionRef.current.position) * 0.03)

        const tween = gsap.to(positionRef.current, duration, {
            position: positionProp,
            onUpdate: () => {
                if (isMounted()) {
                    setPosition(positionRef.current.position)
                }
            },
            onComplete,
        })

        return () => {
            tween.kill()
        }
    }, [positionProp, onComplete, isMounted])

    return (
        <ResourceSliderRoot>
            <Slider>
                <Icon source={LOW} />
                <Track>
                    <Inner>
                        <ProgressBar
                            $position={position}
                            style={{
                                width: `${position}%`,
                            }}
                        />
                        <Handle
                            $position={position}
                            style={{
                                left: `${position}%`,
                            }}
                        >
                            {Math.floor(position)}
                            <TouchIndicator visible={showTouch} />
                        </Handle>
                    </Inner>
                </Track>
                <Icon source={HIGH} />
            </Slider>
            <p>
                Use the slider to choose how much of your machine&apos;s resources (CPU, RAM and
                disk space) Golem can use. More power means more potential income.
            </p>
        </ResourceSliderRoot>
    )
}

const ResourceSliderRoot = styled.div`
    padding: 40px 25px 40px;

    && p {
        color: #cbcbcb;
        font-size: 12px;
        line-height: 18px;
        margin-top: 24px;
        padding: 0 24px;
        text-align: center;
    }
`
