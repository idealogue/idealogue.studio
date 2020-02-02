import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'

const Contributor = ({ name, role, ...props }) => (
    <div {...props}>
        <strong>
            {name}
        </strong>
        <span>
            {role}
        </span>
    </div>
)

export const Contributors = styled(Container)`
    font-size: 25px;
    line-height: 38px;
    margin-bottom: 92px;

    span {
        margin-left: 0.5em;
    }
`

export default Contributor
