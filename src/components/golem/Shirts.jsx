import React from 'react'
import styled from 'styled-components'
import Image from '$golem/Image'
import FluidImage from '$shared/FluidImage'
import Container from '$shared/Container'

const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;

    & + & {
        margin-top: 96px;
    }
`

const Cell = styled.div`
    width: 264px;
`

const Inner = styled.div`
    left: -5%;
    position: relative;
    width: 110%;
`

const Shirts = (props) => (
    <div {...props}>
        <Container>
            <Inner>
                <Row>
                    {Image.SHIRTS.slice(0, 3).map((src) => (
                        <Cell key={src}>
                            <FluidImage src={src} alt="" />
                        </Cell>
                    ))}
                </Row>
                <Row>
                    {Image.SHIRTS.slice(3, 6).map((src) => (
                        <Cell key={src}>
                            <FluidImage src={src} alt="" />
                        </Cell>
                    ))}
                </Row>
            </Inner>
        </Container>
    </div>
)

export default Shirts
