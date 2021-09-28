import React from 'react'
import styled, { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Image from '$streamr/Image'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import Gallery from '$shared/Gallery'
import Display from '$shared/Display'
import Caption from '$shared/Caption'
import { MD, XL, LG } from '$utils/css'

const Cell = styled.div`
    margin: 0 auto;
    transition: 200ms opacity;
    width: 192px;

    ${({ active }) => !active && css`
        opacity: 0.5;
    `}

    @media (min-width: ${MD}px) {
        width: 264px;
    }
`

const Viewport = styled.div`
    margin: 0 auto;
    width: 224px;

    & + & {
        margin-top: 112px;
    }

    @media (min-width: ${MD}px) {
        width: 368px;
    }

    @media (min-width: ${LG}px) {
        & + & {
            margin-top: 176px;
        }
    }
`

const ImageWrapper = styled.div`
    height: 150px;
    left: -88px;
    position: relative;
    top: -83px;
    width: 368px;

    @media (min-width: ${MD}px) {
        height: 188px;
        left: -98px;
        top: -104px;
        width: 460px;
    }
`

const UnstyledIconGrid = (props) => {
    const xl = useMediaQuery({
        query: `(min-width: ${XL}px)`,
    })

    return (
        <CaptionedContainer
            {...props}
            caption="A range of custom icons used across website, apps and social media"
        >
            <Display xs="none" md {...props}>
                {[0, 5, 10].map((i) => (
                    <Viewport key={i}>
                        <Gallery defaultSlide={0} gutter={0} currentWingSize={xl ? 1 : 0}>
                            {Image.MACHINE_2X.slice(i, i + 5).map((src) => (
                                <Cell key={src}>
                                    <ImageWrapper>
                                        <FluidImage src={src} alt="" />
                                    </ImageWrapper>
                                </Cell>
                            ))}
                        </Gallery>
                    </Viewport>
                ))}
            </Display>
            <Display md="none" {...props}>
                <Viewport>
                    <Gallery defaultSlide={0} gutter={0} currentWingSize={xl ? 1 : 0}>
                        {Image.MACHINE_2X.map((src) => (
                            <Cell key={src}>
                                <ImageWrapper>
                                    <FluidImage src={src} alt="" />
                                </ImageWrapper>
                            </Cell>
                        ))}
                    </Gallery>
                </Viewport>
            </Display>
        </CaptionedContainer>
    )
}

const IconGrid = styled(UnstyledIconGrid)`
    margin: 0 auto;
    max-width: 100%;
    padding: 40px 0;
    width: 1440px;

    ${Caption} {
        display: none;
        margin-top: 112px;
    }

    @media (min-width: ${MD}px) {
        padding: 0;

        ${Caption} {
            display: block;
        }
    }
`

export default IconGrid
