import { FluidImage } from '$shared/FluidImage'
import { XofY, XofYRoot } from '$shared/XofY'
import { LG, MD, SM } from '$utils/css'
import Image from '$vizor/Image'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Container from '~/components/shared/Container'
import Display from '~/components/shared/Display'

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

const Slide = styled.div<{ $active?: boolean }>`
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: 200ms;
    transition-delay: 200ms, 0s;
    transition-property: visibility, opacity;
    visibility: hidden;
    width: 100%;

    ${({ $active }) =>
        !!$active &&
        css`
            opacity: 1;
            position: static;
            transition-delay: 0s;
            visibility: visible;
        `}
`

const Viewport = styled.div`
    position: relative;
`

export function Icons() {
    const [slideNo, setSlideNo] = useState(0)

    return (
        <IconsRoot>
            <Container>
                <Display as={Inner} xs="none" sm="block">
                    <Row>
                        <Cell>
                            <FluidImage src={Image.ASSETS[0]} />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[1]} />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[2]} />
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <FluidImage src={Image.ASSETS[3]} />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[4]} />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[5]} />
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <FluidImage src={Image.ASSETS[6]} />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[7]} />
                        </Cell>
                        <Cell>
                            <FluidImage src={Image.ASSETS[8]} />
                        </Cell>
                    </Row>
                </Display>
                <Display as={Inner} sm="none">
                    <Viewport>
                        <Slide $active={slideNo === 0}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.ASSETS[2]} />
                                </Cell>
                            </Row>
                        </Slide>
                        <Slide $active={slideNo === 1}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.ASSETS[4]} />
                                </Cell>
                            </Row>
                        </Slide>
                        <Slide $active={slideNo === 2}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.ASSETS[5]} />
                                </Cell>
                            </Row>
                        </Slide>
                        <Slide $active={slideNo === 3}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.ASSETS[7]} />
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
        </IconsRoot>
    )
}

const IconsRoot = styled.div`
    ${XofYRoot} {
        margin: 64px auto 0;
        width: 56px;
    }

    ${XofYRoot} svg {
        width: 56px;
    }
`
