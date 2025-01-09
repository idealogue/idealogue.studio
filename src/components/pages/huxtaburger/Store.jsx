import { StoreBadge } from '$hux/Badge'
import Image from '$hux/Image'
import React, { useCallback, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    img {
        display: block;
        height: 100%;
        width: 100%;
    }
`

const Shadow = styled.img`
    height: auto;
    opacity: 0.25;
    width: 100%;
`

const smokeAnimation = keyframes`
    0% {
        filter: blur(0);
        opacity: 1;
        transform: translateY(0) scale(0);
    }

    100% {
        filter: blur(2px);
        opacity: 0;
        transform: translateY(-100%) scale(1.025);
    }
`

const SmokeAttrs = (props) => ({
    alt: '',
    src: Image.SMOKE,
})

const Smoke = styled.img.attrs(SmokeAttrs)`
    animation: 1s ease-out 1 forwards ${smokeAnimation};
    left: ${({ posX }) => posX}px;
    position: absolute;
    top: ${({ posY }) => posY}px;
`

const UnstyledStore = ({
    duration,
    smoke,
    slides = [],
    frames = [],
    shadow,
    onMouseDown: onMouseDownProp,
    ...props
}) => {
    const [frame, setFrame] = useState(0)

    const [firstFrame, ...otherFrames] = frames

    const [slide, setSlide] = useState(0)

    const [smokes, setSmokes] = useState([])

    const [smokeX, smokeY] = smoke || []

    useEffect(() => {
        if (otherFrames.length) {
            const ivl = setInterval(
                () => {
                    setFrame((current) => (current + 1) % otherFrames.length)
                },
                Math.floor(duration / otherFrames.length)
            )

            return () => {
                clearInterval(ivl)
            }
        }

        return () => {
            // No other frames => noop.
        }
    }, [otherFrames, duration])

    const onMouseDown = useCallback(
        (e) => {
            if (slides.length) {
                setSlide((current) => (current + 1) % slides.length)
            }

            if (smoke) {
                setSmokes((current) => [...current, current.length])
            }

            if (onMouseDownProp) {
                onMouseDownProp(e)
            }
        },
        [slides, onMouseDownProp, smoke]
    )

    return (
        <div {...props} role="button" onMouseDown={onMouseDown} tabIndex="0">
            {shadow}
            <Wrapper $active>
                <img src={firstFrame} alt="" />
            </Wrapper>
            {otherFrames.map((src, index) => (
                <Wrapper key={src} $active={index === frame}>
                    <img src={src} alt="" />
                </Wrapper>
            ))}
            {slides.map((src, index) => (
                <Wrapper key={src} $active={index === slide}>
                    <img src={src} alt="" />
                </Wrapper>
            ))}
            <StoreBadge>Tap!</StoreBadge>
            {smokes.map((key) => (
                <Smoke key={key} posX={smokeX} posY={smokeY} />
            ))}
        </div>
    )
}

const Store = styled(UnstyledStore)`
    height: 190px;
    left: 2%;
    margin-left: auto;
    margin-right: auto;
    outline: 0 !important;
    position: relative;
    top: 25px;
    width: 190px;
`

export const Cbd = (props) => (
    <Store
        {...props}
        duration={2000}
        smoke={[53, 15]}
        frames={Image.CBD_FRAMES}
        shadow={<Shadow src={Image.CBD_SHADOW} alt="" />}
    />
)

export const Hawthorn = (props) => (
    <Store
        {...props}
        duration={500}
        slides={Image.HAWTHORN_CINEMA_FRAMES}
        frames={Image.HAWTHORN_FRAMES}
        shadow={<Shadow src={Image.HAWTHORN_SHADOW} alt="" />}
    />
)

export const Eastland = (props) => (
    <Store
        {...props}
        duration={1000}
        smoke={[55, 11]}
        frames={Image.EASTLAND_FRAMES}
        shadow={<Shadow src={Image.EASTLAND_SHADOW} alt="" />}
    />
)

export default Store
