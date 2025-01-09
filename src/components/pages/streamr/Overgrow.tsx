import { Container } from '$shared/Container'
import { XLDESKTOP } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

export function Overgrow(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Container>
            <OvergrowRoot {...props} />
        </Container>
    )
}

const OvergrowRoot = styled.div`
    @media ${XLDESKTOP} {
        left: -10%;
        position: relative;
        width: 120%;
    }
`
