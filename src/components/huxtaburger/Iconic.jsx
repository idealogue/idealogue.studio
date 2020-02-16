import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'
import { Bills, Theo, VegeDenise } from '$hux/Burger'
import { Milkshake, Icecream, Chips } from '$hux/Cup'
import { Cbd, Hawthorn, Eastland } from '$hux/Store'

const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;

    & + & {
        margin-top: 96px;
    }
`

const Cell = styled.div`
    width: 190px;
`

const Iconic = (props) => (
    <div {...props}>
        <Container>
            <Row>
                <Cell>
                    <Bills />
                </Cell>
                <Cell>
                    <Theo />
                </Cell>
                <Cell>
                    <VegeDenise />
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Milkshake />
                </Cell>
                <Cell>
                    <Icecream />
                </Cell>
                <Cell>
                    <Chips />
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Cbd />
                </Cell>
                <Cell>
                    <Hawthorn />
                </Cell>
                <Cell>
                    <Eastland />
                </Cell>
            </Row>
        </Container>
    </div>
)

export default Iconic
