import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'
import { XLDESKTOP } from '$utils/css'

const UnstyledOvergrow = ({ className, children }) => (
    <Container>
        <div className={className}>
            {children}
        </div>
    </Container>
)

const Overgrow = styled(UnstyledOvergrow)`
    @media ${XLDESKTOP} {
        left: -10%;
        position: relative;
        width: 120%;
    }
`

export default Overgrow
