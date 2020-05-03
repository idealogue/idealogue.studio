import React from 'react'
import styled from 'sc'
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
    color: ${({ theme }) => theme.toggleColor || '#ffffff7f'};
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(0%);
    transition: 200ms transform;
    width: 140px;
    height: 140px;
`

export default MenuToggle
