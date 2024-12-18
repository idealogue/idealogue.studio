import React, { Children, ReactNode } from 'react'
import styled from 'styled-components'

interface FooterProps {
    children: ReactNode
}

export function Footer({ children }: FooterProps) {
    return (
        <FooterRoot>
            {Children.map(children, (child) => (
                <div>{child}</div>
            ))}
        </FooterRoot>
    )
}

const FooterRoot = styled.div`
    align-items: center;
    border-top: 1px solid #cbcbcb;
    color: #4e4e4e;
    display: flex;
    font-size: 14px;
    /* padding: 18px; */
    padding: 25px;
    white-space: nowrap;

    > :first-child {
        flex-grow: 1;
        margin-right: 16px;
        min-width: 0;
    }
`
