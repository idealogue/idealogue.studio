import { ALL as Image } from '$golem/Image'
import { Container } from '$shared/Container'
import { FluidImage } from '$shared/FluidImage'
import { LG } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

export function Shirts(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <Container>
                <Inner>
                    <Row>
                        {Image.SHIRTS.slice(0, 3).map((src) => (
                            <Cell key={src}>
                                <FluidImage src={src} />
                            </Cell>
                        ))}
                    </Row>
                    <Row>
                        {Image.SHIRTS.slice(3, 6).map((src) => (
                            <Cell key={src}>
                                <FluidImage src={src} />
                            </Cell>
                        ))}
                    </Row>
                </Inner>
            </Container>
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
`

const Cell = styled.div`
    width: 216px;

    @media (min-width: ${LG}px) {
        width: 264px;
    }
`

const Inner = styled.div`
    left: -5%;
    position: relative;
    width: 110%;
`
