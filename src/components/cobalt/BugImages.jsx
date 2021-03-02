import React from 'react'
import styled from 'styled-components'
import Image from '$cobalt/Image'
import FluidImage from '$shared/FluidImage'
import Container from '$shared/Container'

const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;

    & + & {
        margin-top: 80px;
    }
`

const Cell = styled.div`
    width: 160px;
`

const Inner = styled.div`
    padding: 0 64px;
`

const BugImages = (props) => (
    <div {...props}>
        <Container>
            <Inner>
                <Row>
                    {Image.BUGS.slice(0, 3).map((src) => (
                        <Cell key={src}>
                            <FluidImage src={src} alt="" />
                        </Cell>
                    ))}
                </Row>
                <Row>
                    {Image.BUGS.slice(3, 6).map((src) => (
                        <Cell key={src}>
                            <FluidImage src={src} alt="" />
                        </Cell>
                    ))}
                </Row>
                <Row>
                    {Image.BUGS.slice(6, 9).map((src) => (
                        <Cell key={src}>
                            <FluidImage src={src} alt="" />
                        </Cell>
                    ))}
                </Row>
                <Row>
                    {Image.BUGS.slice(9, 12).map((src) => (
                        <Cell key={src}>
                            <FluidImage src={src} alt="" />
                        </Cell>
                    ))}
                </Row>
            </Inner>
        </Container>
    </div>
)

export default BugImages
