import React, { Children } from 'react'
import styled from 'sc'

const UnstyledFooter = ({ children, ...props }) => (
    <div {...props}>
        {Children.map(children, (child) => (
            <div>
                {child}
            </div>
        ))}
    </div>
)

const Footer = styled(UnstyledFooter)`
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

export default Footer
