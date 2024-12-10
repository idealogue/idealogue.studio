import Container from '$shared/Container'
import { LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

const Contributor = ({ name, role, ...props }) => (
    <div {...props}>
        <strong>{name}</strong>
        <span>{role}</span>
    </div>
)

export const Contributors = styled(Container)`
    font-size: 16px;
    line-height: 1.8em;
    margin-bottom: 92px;

    span {
        margin-left: 0.6em;
    }

    @media (min-width: ${SM}px) {
        font-size: 18px;
    }

    @media (min-width: ${MD}px) {
        font-size: 21px;
    }

    @media (min-width: ${LG}px) {
        font-size: 25px;
    }
`

export default Contributor
