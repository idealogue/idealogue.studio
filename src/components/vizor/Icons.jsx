import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Container from '$shared/Container'
import FluidImage from '$shared/FluidImage'
import Image from '$vizor/Image'
import { SM, MD, LG } from '$utils/css'
import Display from '$shared/Display'
import XofY from '$shared/XofY'

const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;

    & + & {
        margin-top: 64px;
    }

    @media (min-width: ${MD}px) {
        & + & {
            margin-top: 96px;
        }
    }
`

const Cell = styled.div`
    margin: 0 auto;
    max-width: 100%;
    width: 256px;

    img {
        margin: 0 auto;
    }

    @media (min-width: ${SM}px) {
        width: 144px;
    }

    @media (min-width: ${MD}px) {
        width: 192px;
    }

    @media (min-width: ${LG}px) {
        width: 256px;
    }
`

const Inner = styled.div`
    @media (min-width: ${SM}px) {
        left: -5%;
        position: relative;
        width: 110%;
    }
`

const Slide = styled.div`
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: 200ms;
    transition-delay: 200ms, 0s;
    transition-property: visibility, opacity;
    visibility: hidden;
    width: 100%;

    ${({ $active }) => !!$active && css`
        opacity: 1;
        position: static;
        transition-delay: 0s;
        visibility: visible;
    `}
`

const Viewport = styled.div`
    position: relative;
`

const UnstyledIcons = (props) => {
    const [slideNo, setSlideNo] = useState(0)
    return (
        <div {...props}>
            <Container>
                <Display as={Inner} xs="none" sm="block">
                    <Row>
                        <Cell>
                            <FluidImage src={Image.ASSETS[0]} alt="" />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[1]} alt="" />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[2]} alt="" />
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <FluidImage src={Image.ASSETS[3]} alt="" />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[4]} alt="" />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[5]} alt="" />
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <FluidImage src={Image.ASSETS[6]} alt="" />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[7]} alt="" />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[8]} alt="" />
                        </Cell>
                    </Row>
                </Display>
                <Display as={Inner} sm="none">
                    <Viewport>
                        <Slide $active={slideNo === 0}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.ASSETS[2]} alt="" />
                                </Cell>
                            </Row>
                        </Slide>
                        <Slide $active={slideNo === 1}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.ASSETS[4]} alt="" />
                                </Cell>
                            </Row>
                        </Slide>
                        <Slide $active={slideNo === 2}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.ASSETS[5]} alt="" />
                                </Cell>
                            </Row>
                        </Slide>
                        <Slide $active={slideNo === 3}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.ASSETS[7]} alt="" />
                                </Cell>
                            </Row>
                        </Slide>
                    </Viewport>
                    <XofY
                        x={slideNo + 1}
                        y={4}
                        onClick={() => {
                            setSlideNo((c) => (c + 1) % 4)
                        }}
                    />
                </Display>
            </Container>
        </div>
    )
}

const Icons = styled(UnstyledIcons)`
    ${XofY} {
        margin: 64px auto 0;
        width: 56px;
    }

    ${XofY} svg {
        width: 56px;
    }
`

export default Icons
