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
    border: 0;
    display: block;
    height: 140px;
    margin: 0;
    outline: 0;
    padding: 0;
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
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(0%);
    transition: 200ms transform;
`

export default MenuToggle
