import * as React from 'react'
import styled, { css } from 'styled-components'
import { TouchIndicator } from './TouchIndicator'

export type NavItemId = 'resources' | 'history' | 'advanced'

interface NavProps {
    itemId?: NavItemId
}

export function Nav({ itemId, ...props }: NavProps) {
    return (
        <NavRoot {...props}>
            <Item $active={itemId === 'resources'}>Resources</Item>
            <MiddleItem $active={itemId === 'history'}>
                History
                <Touch visible={itemId === 'history'} />
            </MiddleItem>
            <Item $active={itemId === 'advanced'}>
                <span>
                    Advanced
                    <Touch visible={itemId === 'advanced'} />
                </span>
            </Item>
        </NavRoot>
    )
}

interface TouchProps {
    visible?: boolean
}

function Touch({ visible = false }: TouchProps) {
    return visible && <TouchIndicator center immitateRelease visible />
}

const Item = styled.div<{ $active?: boolean }>`
    flex: 0 1 100%;
    position: relative;
    transition: 300ms color;

    > span {
        position: relative;
    }

    ${({ $active = false }) =>
        $active &&
        css`
            color: #4e4e4e;
        `}
`

const MiddleItem = styled(Item)`
    text-align: center;

    & + ${Item} {
        text-align: right;
    }
`

const NavRoot = styled.div`
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
