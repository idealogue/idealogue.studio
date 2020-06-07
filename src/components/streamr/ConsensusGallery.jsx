import React from 'react'
import styled, { css } from 'sc'
import Gallery from '$shared/Gallery'
import Container from '$shared/Container'
import FluidImage from '$shared/FluidImage'

const Viewport = styled.div`
    margin: 0 auto;
    width: 600px;
`

const Slide = styled(FluidImage)`
    transition: 200ms opacity;

    ${({ active }) => !active && css`
        opacity: 0.5;
    `}
`

const UnstyledConsensusGallery = ({ items, ...props }) => (
    <div {...props}>
        <Container>
            <Viewport>
                <Gallery defaultSlide={0}>
                    {items.map((src) => (
                        <Slide key={src} src={src} alt="" />
                    ))}
                </Gallery>
            </Viewport>
        </Container>
    </div>
)

const ConsensusGallery = styled(UnstyledConsensusGallery)`
    margin-top: 48px;
`

export default ConsensusGallery
