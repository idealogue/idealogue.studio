import React from 'react'
import styled, { css } from 'sc'
import UnstyledGlyph, { NAV, CLOSE } from '$shared/Glyph'
import useMenu from '$hooks/useMenu'

const Glyph = styled(UnstyledGlyph)`
    display: block;
    margin: 0 auto;
    width: 24px;
`

const Button = styled.button`
    appearance: none;
    background-color: transparent;
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

export const CloseButton = (props) => (
    <Button {...props} type="button">
        <Glyph source={CLOSE} />
    </Button>
)

const UnstyledMenuToggle = ({ backgroundColor, ...props }) => {
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
    color: inherit;
    height: 140px;
    pointer-events: all;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(0%);
    transition: 400ms transform;
    transition-delay: 0ms;
    width: 140px;

    ${({ backgroundColor }) => !!backgroundColor && css`
        background: linear-gradient(${backgroundColor}00, ${backgroundColor}, ${backgroundColor}, ${backgroundColor}00);
    `}
`

export default MenuToggle
