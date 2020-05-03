import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Container from '$shared/Container'
import Image from '$hux/Image'

const Cover = styled.div`
    overflow: hidden;
    position: relative;

    img {
        height: auto;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
`

const LargeImageWrapper = styled(Cover)`
    background-color: #000000;
    height: 1024px;
`

const SmallImageWrapper = styled(Cover)`
    float: left;
    height: 512px;
    width: 50%;
`

const Inner = styled.div`
    padding: 0 96px;
`

const SecondaryImages = styled.div`
    :after {
        content: '';
        display: table;
        clear: both;
    }
`

export const Logo = () => (
    <Container>
        <Inner>
            <FluidImage src={Image.HUXTABURGER} alt="Huxtaburger" />
        </Inner>
    </Container>
)

export const CollageA = () => (
    <SecondaryImages>
        <SmallImageWrapper>
            <FluidImage src={Image.COLLAGE_1} alt="" />
        </SmallImageWrapper>
        <SmallImageWrapper>
            <FluidImage src={Image.COLLAGE_2} alt="" />
        </SmallImageWrapper>
    </SecondaryImages>
)

export const CollageB = () => (
    <SecondaryImages>
        <SmallImageWrapper>
            <FluidImage src={Image.COLLAGE_3} alt="" />
        </SmallImageWrapper>
        <SmallImageWrapper>
            <FluidImage src={Image.COLLAGE_4} alt="" />
        </SmallImageWrapper>
    </SecondaryImages>
)

export const LargeSign = () => (
    <LargeImageWrapper>
        <img src={Image.SIGN} alt="" />
    </LargeImageWrapper>
)
