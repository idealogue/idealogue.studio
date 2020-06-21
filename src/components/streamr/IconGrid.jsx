import React from 'react'
import styled, { css } from 'sc'
import Image from '$streamr/Image'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import Container from '$shared/Container'
import Gallery from '$shared/Gallery'

const Cell = styled.div`
    margin: 0 auto;
    transition: 200ms opacity;
    width: 264px;

    ${({ active }) => !active && css`
        opacity: 0.5;
    `}
`

const Viewport = styled.div`
    margin: 0 auto;
    width: 368px;

    & + & {
        margin-top: 176px;
    }
`

const ImageWrapper = styled.div`
    height: 188px;
    left: -98px;
    position: relative;
    top: -104px;
    width: 460px;
`

const UnstyledIconGrid = (props) => (
    <CaptionedContainer
        {...props}
        caption="A range of custom icons used across website, apps and social media"
    >
        <div {...props}>
            <Container>
                {[0, 5, 10].map((i) => (
                    <Viewport key={i}>
                        <Gallery defaultSlide={0} gutter={0} currentWingSize={1}>
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
            </Container>
        </div>
    </CaptionedContainer>
)

const IconGrid = styled(UnstyledIconGrid)`
    margin: 0 auto;
    width: 1440px;
`

export default IconGrid
