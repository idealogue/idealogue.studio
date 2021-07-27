import React from 'react'
import styled, { css } from 'styled-components'
import TouchIndicator from './TouchIndicator'

export const RESOURCES = 'resources'

export const HISTORY = 'history'

export const ADVANCED = 'advanced'

const Touch = ({ visible }) => !!visible && (
    <TouchIndicator center immitateRelease visible={visible} />
)

const Item = styled.div`
    flex: 0 1 100%;
    position: relative;
    transition: 300ms color;

    > span {
        position: relative;
    }

    ${({ active }) => !!active && css`
        color: #4e4e4e;
    `}
`

const MiddleItem = styled(Item)`
    text-align: center;

    & + ${Item} {
        text-align: right;
    }
`

const UnstyledNav = ({ active, ...props }) => (
    <div {...props}>
        <Item active={active === RESOURCES}>
            Resources
        </Item>
        <MiddleItem active={active === HISTORY}>
            History
            <Touch visible={active === HISTORY} />
        </MiddleItem>
        <Item active={active === ADVANCED}>
            <span>
                Advanced
                <Touch visible={active === ADVANCED} />
            </span>
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
