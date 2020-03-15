import React from 'react'
import styled, { css } from 'sc'

export const RESOURCES = 'resources'

export const HISTORY = 'history'

export const ADVANCED = 'advanced'

const Item = styled.div`
    flex: 0 1 100%;
    transition: 300ms color;

    ${({ active }) => !!active && css`
        color: #4e4e4e;
    `}
    
    ${({ middle }) => !!middle && css`
        text-align: center;

        & + & {
            text-align: right;
        }
    `}
`

const UnstyledNav = ({ active, ...props }) => (
    <div {...props}>
        <Item active={active === RESOURCES}>
            Resources
        </Item>
        <Item active={active === HISTORY} middle>
            History
        </Item>
        <Item active={active === ADVANCED}>
            Advanced
        </Item>
    </div>
)

const Nav = styled(UnstyledNav)`
    align-items: center;
    border: solid #cbcbcb;
    border-width: 1px 0;
    color: #cbcbcb;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    height: 50px;
    padding: 0 18px;
    padding: 0 25px;
    line-height: 1em;
`

export default Nav
