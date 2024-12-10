import useMenu from '$hooks/useMenu'
import UnstyledGlyph, { CLOSE, NAV } from '$shared/Glyph'
import { SM } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'

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
    height: 90px;
    margin: 0;
    outline: 0;
    padding: 0;
    position: fixed;
    width: 90px;

    @media (min-width: ${SM}px) {
        height: 140px;
        width: 140px;
    }
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
    height: 90px;
    pointer-events: all;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(0%);
    transition: 400ms transform;
    transition-delay: 0ms;
    width: 90px;

    ${({ backgroundColor }) =>
        !!backgroundColor &&
        css`
            background: linear-gradient(
                ${backgroundColor}00,
                ${backgroundColor},
                ${backgroundColor},
                ${backgroundColor}00
            );
        `}

    @media (min-width: ${SM}px) {
        height: 140px;
        width: 140px;
    }
`

export default MenuToggle
