import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import CaptionedContainer from '$shared/CaptionedContainer'
import Glyph, { SLIDE_LEFT, SLIDE_RIGHT } from '$shared/Glyph'

const UnstyledSlide = ({ active, src, ...props }) => (
    <div {...props}>
        <img src={src} alt="" />
        <svg viewBox="0 0 1440 570" />
    </div>
)

const Slide = styled(UnstyledSlide)`
    display: block;
    opacity: 1;
    transition: 500ms;
    transition-delay: 0s, 0s;
    transition-property: visibility, opacity;
    visibility: visible;
    width: 100%;

    ${({ active }) => !active && css`
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition-delay: 500ms, 0s;
        visibility: hidden;
    `}

    svg,
    img {
        display: block;
    }

    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
    }
`

const Slider = styled.div`
    color: #ffffff;
    margin: 0 auto;
    max-width: 1440px;
    position: relative;
`

const Button = styled.button`
    appearance: none;
    background-color: transparent;
    border: 0;
    color: inherit;
    display: block;
    height: 160px;
    margin: 0;
    outline: 0;
    padding: 0;
    width: 160px;

    svg {
        display: block;
        margin: 0 auto;
        width: 16px;
    }
`

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
`

const count = Image.GOLEMS.length

const Golems = (props) => {
    const [slide, setSlide] = useState(0)

    const next = useCallback(() => {
        setSlide((current) => (current + 1) % count)
    }, [])

    const prev = useCallback(() => {
        setSlide((current) => (count + (current - 1)) % count, [])
    }, [])

    return (
        <div {...props}>
            <CaptionedContainer caption="Final Brass Golem character poses">
                <Slider>
                    {Image.GOLEMS.map((src, index) => (
                        <Slide key={src} src={src} alt="" active={slide === index} />
                    ))}
                    <NavBar>
                        <Button type="button" onClick={prev}>
                            <Glyph source={SLIDE_LEFT} />
                        </Button>
                        <Button type="button" onClick={next}>
                            <Glyph source={SLIDE_RIGHT} />
                        </Button>
                    </NavBar>
                </Slider>
            </CaptionedContainer>
        </div>
    )
}
export default Golems
