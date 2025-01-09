import { Bills, Theo, VegeDenise } from '$hux/Burger'
import { Chips, Icecream, Milkshake } from '$hux/Cup'
import { Container } from '$shared/Container'
import { Display } from '$shared/Display'
import { MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import { Cbd, Eastland, Hawthorn } from '~/components/pages/huxtaburger/Store'

export function Iconic(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <Display as={Container} sm="none">
                <Row>
                    <Cell>
                        <Bills />
                    </Cell>
                </Row>
                <Row>
                    <Cell>
                        <Cbd />
                    </Cell>
                </Row>
            </Display>
            <Display as={Container} xs="none" sm md="none">
                <Row>
                    <Cell>
                        <Bills />
                    </Cell>
                    <Cell>
                        <Theo />
                    </Cell>
                </Row>
                <Row>
                    <Cell
                        css={`
                            transform: translateY(20%);
                        `}
                    >
                        <VegeDenise />
                    </Cell>
                    <Cell>
                        <Milkshake />
                    </Cell>
                </Row>
                <Row>
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
                </Row>
                <Row>
                    <Cell>
                        <Eastland />
                    </Cell>
                </Row>
            </Display>
            <Display as={Container} xs="none" md>
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
            </Display>
        </div>
    )
}

const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;

    & + & {
        margin-top: 96px;
    }

    @media (min-width: ${SM}px) {
        padding: 0 32px;
    }

    @media (min-width: ${MD}px) {
        padding: 0;
    }
`

const Cell = styled.div`
    margin: 0 auto;
    width: 190px;

    @media (min-width: ${SM}px) {
        margin: 0;
    }
`
