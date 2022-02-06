import React from 'react'
import styled, { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { MACHINE_IMAGES } from '$streamr/Image'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import Gallery from '$shared/Gallery'
import Display from '$shared/Display'
import Caption from '$shared/Caption'
import { MD, LG } from '$utils/css'

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
    const lg = useMediaQuery({
        query: `(min-width: ${LG}px)`,
    })

    return (
        <CaptionedContainer
            {...props}
            caption="A range of custom icons used across website, apps and social media"
        >
            <Display xs="none" md {...props}>
                {[0, 5, 10].map((i) => (
                    <Viewport key={i}>
                        <Gallery defaultSlide={0} gutter={0} currentWingSize={lg ? 1 : 0}>
                            {MACHINE_IMAGES.slice(i, i + 5).map(([src, src2x]) => (
                                <Cell key={src}>
                                    <ImageWrapper>
                                        <FluidImage src={src} srcSet={`${src2x} 2x`} alt="" />
                                    </ImageWrapper>
                                </Cell>
                            ))}
                        </Gallery>
                    </Viewport>
                ))}
            </Display>
            <Display md="none" {...props}>
                <Viewport>
                    <Gallery defaultSlide={0} gutter={0} currentWingSize={0}>
                        {MACHINE_IMAGES.map(([src, src2x]) => (
                            <Cell key={src}>
                                <ImageWrapper>
                                    <FluidImage src={src} srcSet={`${src2x} 2x`} alt="" />
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
