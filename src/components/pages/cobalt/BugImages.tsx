import { FluidImage } from '$shared/FluidImage'
import { XofY, XofYRoot } from '$shared/XofY'
import { MD, SM } from '$utils/css'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { ALL as Image } from '~/components/pages/cobalt/Image'
import { Container } from '~/components/shared/Container'
import { Display } from '~/components/shared/Display'

const Cell = styled.div`
    width: 160px;

    @media (min-width: ${SM}px) {
        width: 136px;
    }

    @media (min-width: ${MD}px) {
        width: 160px;
    }
`

const Group = styled.div<{ $active?: boolean }>`
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: 200ms;
    transition-delay: 200ms, 0s;
    transition-property: visibility, opacity;
    visibility: hidden;
    width: 100%;

    ${({ $active = false }) =>
        $active &&
        css`
            opacity: 1;
            position: static;
            transition-delay: 0s;
            visibility: visible;
        `}
`

const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    margin: 0 auto;

    & + & {
        margin-top: 16px;
    }

    @media (max-width: ${SM - 1}px) {
        ${({ children }) =>
            React.Children.count(children) === 1 &&
            css`
                justify-content: center;

                ${Cell} {
                    max-width: 50%;
                }
            `}
    }

    @media (min-width: ${SM}px) {
        & + & {
            margin-top: 64px;
        }
    }

    @media (min-width: ${MD}px) {
        & + & {
            margin-top: 80px;
        }
    }
`

const Inner = styled.div`
    padding: 0 16px;

    @media (min-width: ${MD}px) {
        padding: 0 64px;
    }
`

export function BugImages() {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide((s) => (s + 1) % 4)
    }

    return (
        <BugImagesRoot>
            <Container>
                <Display as={Inner} xs="none" sm="block">
                    <Row>
                        {Image.BUGS.slice(0, 3).map((src) => (
                            <Cell key={src}>
                                <FluidImage src={src} />
                            </Cell>
                        ))}
                    </Row>
                    <Row>
                        {Image.BUGS.slice(3, 6).map((src) => (
                            <Cell key={src}>
                                <FluidImage src={src} />
                            </Cell>
                        ))}
                    </Row>
                    <Row>
                        {Image.BUGS.slice(6, 9).map((src) => (
                            <Cell key={src}>
                                <FluidImage src={src} />
                            </Cell>
                        ))}
                    </Row>
                    <Row>
                        {Image.BUGS.slice(9, 12).map((src) => (
                            <Cell key={src}>
                                <FluidImage src={src} />
                            </Cell>
                        ))}
                    </Row>
                </Display>
                <Display as={Inner} sm="none">
                    <div
                        css={`
                            position: relative;
                        `}
                    >
                        <Group $active={slide === 0}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.BUGS[0]} />
                                </Cell>
                            </Row>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.BUGS[1]} />
                                </Cell>
                                <Cell>
                                    <FluidImage src={Image.BUGS[2]} />
                                </Cell>
                            </Row>
                        </Group>
                        <Group $active={slide === 1}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.BUGS[3]} />
                                </Cell>
                                <Cell>
                                    <FluidImage src={Image.BUGS[4]} />
                                </Cell>
                            </Row>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.BUGS[5]} />
                                </Cell>
                            </Row>
                        </Group>
                        <Group $active={slide === 2}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.BUGS[6]} />
                                </Cell>
                            </Row>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.BUGS[7]} />
                                </Cell>
                                <Cell>
                                    <FluidImage src={Image.BUGS[8]} />
                                </Cell>
                            </Row>
                        </Group>
                        <Group $active={slide === 3}>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.BUGS[9]} />
                                </Cell>
                                <Cell>
                                    <FluidImage src={Image.BUGS[10]} />
                                </Cell>
                            </Row>
                            <Row>
                                <Cell>
                                    <FluidImage src={Image.BUGS[11]} />
                                </Cell>
                            </Row>
                        </Group>
                    </div>
                    <XofY x={slide + 1} y={4} onClick={nextSlide} />
                </Display>
            </Container>
        </BugImagesRoot>
    )
}

const BugImagesRoot = styled.div`
    ${XofYRoot} {
        margin: 80px auto 0;
        width: 56px;
    }

    ${XofYRoot} svg {
        width: 56px;
    }
`
