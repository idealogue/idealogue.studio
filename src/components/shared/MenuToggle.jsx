import React, { useMemo } from 'react'
import styled, { ThemeProvider } from 'sc'
import UnstyledGlyph, { NAV } from '$shared/Glyph'
import { useMenu } from '$shared/Menu'

const Glyph = styled(UnstyledGlyph)`
    display: block;
    margin: 0 auto;
    width: 24px;
`

const Button = styled.button`
    appearance: none;
    background-color: #ffffff0f;
    border: 0;
    color: inherit;
    display: block;
    height: 140px;
    margin: 0;
    outline: 0;
    padding: 0;
    position: fixed;
    width: 140px;
`

const UnstyledMenuToggle = (props) => {
    const { open } = useMenu()

    return (
        <div {...props}>
            <Button type="button" onClick={open}>
                <Glyph source={NAV} />
            </Button>
        </div>
    )
}

const MenuToggle = styled(UnstyledMenuToggle)`
    color: ${({ color }) => color || '#ffffff7f'};
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(0%);
    transition: 200ms transform;
    width: 140px;
    height: 140px;
`

const Inner = styled.div`
    clip: rect(0, auto, auto, 0);
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 140px;
`

const UnstyledWrap = ({ color, children, ...props }) => (
    <div {...props}>
        {children}
        <Inner>
            <MenuToggle color={color} />
        </Inner>
    </div>
)

export const Wrap = styled(UnstyledWrap)`
    overflow: hidden;
    position: relative;
`

export default MenuToggle
