import React from 'react'
import styled from 'styled-components'

const UnstyledNextProject = ({ children, ...props }) => (
    <div {...props}>
        <div className="label">
            Next Project
        </div>
        {children}
    </div>
)

const NextProject = styled(UnstyledNextProject)`
    font-family: 'Publico Text';

    a {
        font-weight: 700;
    }

    a,
    a:active,
    a:focus,
    a:hover,
    a:visited {
        text-decoration: none;
    }
`

export default NextProject
