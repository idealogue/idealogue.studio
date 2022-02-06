import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Container from '$shared/Container'
import Image from '$hux/Image'
import { MD } from '$utils/css'

const SmallImage = styled.div`
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    float: left;
    height: 512px;
    width: 50%;
`

const SecondaryImages = styled.div`
    :after {
        content: '';
        display: table;
        clear: both;
    }
`

export const Inner = styled.div`
    padding: 0 32px;

    @media (min-width: ${MD}px) {
        padding: 0 96px;
    }
`

export const Logo = (props) => (
    <Container>
        <Inner>
            <FluidImage {...props} src={Image.HUXTABURGER} alt="Huxtaburger" />
        </Inner>
    </Container>
)

export const CollageA = ({ className }) => (
    <SecondaryImages className={className}>
        <SmallImage src={Image.COLLAGE_1} />
        <SmallImage src={Image.COLLAGE_2} />
    </SecondaryImages>
)

export const CollageB = ({ className }) => (
    <SecondaryImages className={className}>
        <SmallImage src={Image.COLLAGE_3} />
        <SmallImage src={Image.COLLAGE_4} />
    </SecondaryImages>
)

const UnstyledLargeSign = (props) => (
    <img {...props} src={Image.SIGN} alt="" />
)

const UnstyledCollage = ({ className }) => (
    <div className={className}>
        <img src={Image.COLLAGE_1} alt="" />
        <img src={Image.COLLAGE_2} alt="" />
        <img src={Image.COLLAGE_3} alt="" />
        <img src={Image.COLLAGE_4} alt="" />
    </div>
)

export const Collage = styled(UnstyledCollage)`
    img {
        display: block;
        width: 100%;
    }
`

export const LargeSign = styled(UnstyledLargeSign)`
    width: 100%;
`
