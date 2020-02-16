import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Container from '$shared/Container'
import Image from '$huxtaburger/Image'

const Wrapper = styled.div`
`

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

const Pics = (props) => (
    <Wrapper {...props}>
        <Container>
            <Inner>
                <FluidImage src={Image.HUXTABURGER} alt="Huxtaburger" />
            </Inner>
        </Container>
        {Image.COLLAGE.map(([src0, src1]) => (
            <SecondaryImages key={src0}>
                <SmallImageWrapper>
                    <FluidImage src={src0} alt="" />
                </SmallImageWrapper>
                <SmallImageWrapper>
                    <FluidImage src={src1} alt="" />
                </SmallImageWrapper>
            </SecondaryImages>
        ))}
        <LargeImageWrapper>
            <img src={Image.SIGN} alt="" />
        </LargeImageWrapper>
    </Wrapper>
)

export default Pics
