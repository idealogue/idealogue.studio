import { MEDIUM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import { Module, ModuleProps } from './Module'

export function Comment({
    children,
    title = 'Comment',
    ...props
}: ModuleProps) {
    return (
        <CommentRoot {...props} title={title}>
            <Body>{children}</Body>
        </CommentRoot>
    )
}

const Body = styled.div`
    font-size: 10px;
    font-weight: ${MEDIUM};
    line-height: 16px;
    padding: 12px 24px;
`

const CommentRoot = styled(Module)`
    background-color: #fae7dd;
`
