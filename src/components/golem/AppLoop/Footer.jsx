import React, { Children } from 'react'
import styled from 'sc'

const Child = styled.div`
    flex: 0;

    & + & {
        text-align: right;
    }
`

const UnstyledFooter = ({ children, ...props }) => (
    <div {...props}>
        {Children.map(children, (child) => (
            <Child>
                {child}
            </Child>
        ))}
    </div>
)

const Footer = styled(UnstyledFooter)`
    align-items: center;
    border-top: 1px solid #cbcbcb;
    color: #4e4e4e;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    /* padding: 18px; */
    padding: 25px;
    white-space: nowrap;
`

export default Footer
