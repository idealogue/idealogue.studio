import React from 'react'
import styled from 'styled-components'
import Module from './Module'
import { MEDIUM } from '$utils/css'

const Body = styled.div`
    font-size: 10px;
    font-weight: ${MEDIUM};
    line-height: 16px;
    padding: 12px 24px;
`

function UnstyledComment({ children, title, ...props }) {
    return (
        <Module {...props} title={title || 'Comment'}>
            <Body>{children}</Body>
        </Module>
    )
}

const Comment = styled(UnstyledComment)`
    background-color: #fae7dd;
`

export default Comment
