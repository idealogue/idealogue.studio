import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled, { css } from 'sc'
import Glyph, { LOW, HIGH } from '$shared/Glyph'
import { TweenMax } from 'gsap'

const UnstyledIcon = ({ source, ...props }) => (
    <div {...props}>
        <Glyph source={source} />
    </div>
)

const Icon = styled(UnstyledIcon)`
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

const Handle = styled.div`
    background-color: #ffffff;
    border-radius: 50%;
    /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15); */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    color: #37c481;
    height: 24px;
    height: 32px;
    left: ${({ position }) => Math.floor(position)}%;
    line-height: 24px;
    line-height: 32px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 500ms ease-in-out color;
    width: 24px;
    width: 32px;

    ${({ position }) => position >= 75 && css`
        color: #fec62e;
    `}

    ${({ position }) => position >= 90 && css`
        color: #f65a23;
    `}
`

const ProgressBar = styled.div`
    background-color: #37c481;
    height: 100%;
    max-width: 100%;
    transition: 500ms ease-in-out background-color;
    width: ${({ position }) => Math.floor(position)}%;

    ${({ position }) => position >= 75 && css`
        background-color: #fec62e;
    `}

    ${({ position }) => position >= 90 && css`
        background-color: #f65a23;
    `}
`

const UnstyledResourceSlider = ({ position: positionProp = 18, onTransitionFinish: onComplete, ...props }) => {
    const [position, setPosition] = useState(positionProp)

    const positionRef = useRef({
        position: positionProp,
    })

    const onUpdate = useCallback(() => {
        setPosition(Math.floor(positionRef.current.position))
    }, [])

    useEffect(() => {
        const duration = Math.max(1, Math.abs(positionProp - positionRef.current.position) * 0.03)

        const tween = TweenMax.to(positionRef.current, duration, {
            position: positionProp,
            onUpdate,
            onComplete,
        })

        return () => {
            tween.kill()
        }
    }, [positionProp])

    return (
        <div {...props}>
            <Slider>
                <Icon source={LOW} />
                <Track>
                    <Inner>
                        <ProgressBar position={position} />
                        <Handle position={position}>
                            {position}
                        </Handle>
                    </Inner>
                </Track>
                <Icon source={HIGH} />
            </Slider>
            <p>
                Use the slider to choose how much of your machine’s resources (CPU, RAM and disk space)
                Golem can use. More power means more potential income.
            </p>
        </div>
    )
}

const ResourceSlider = styled(UnstyledResourceSlider)`
    padding: 40px 25px 40px;

    p {
        color: #cbcbcb;
        font-size: 12px;
        line-height: 18px;
        margin-top: 24px;
        padding: 0 24px;
        text-align: center;
    }
`

export default ResourceSlider
