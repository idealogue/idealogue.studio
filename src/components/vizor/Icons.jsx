import React from 'react'
import styled from 'sc'
import Container from '$shared/Container'
import FluidImage from '$shared/FluidImage'
import Image from '$vizor/Image'

const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;

    & + & {
        margin-top: 96px;
    }
`

const Cell = styled.div`
    width: 160px;
`

const Inner = styled.div`
    padding: 0 64px;
`

const UnstyledIcons = (props) => (
    <div {...props}>
        <Container>
            <Inner>
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
            </Inner>
        </Container>
    </div>
)

const Icons = styled(UnstyledIcons)`

`

export default Icons
