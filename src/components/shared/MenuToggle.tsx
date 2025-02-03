import { useMenu } from '$hooks/useMenu'
import { SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import UnstyledGlyph, { CLOSE, NAV } from '~/components/shared/Glyph'

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

type CloseButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>

export const CloseButton = (props: CloseButtonProps) => (
    <Button {...props} type="button">
        <Glyph source={CLOSE} />
    </Button>
)

export function MenuToggle() {
    const { open } = useMenu()

    return (
        <MenuToggleRoot>
            <Button type="button" onClick={open}>
                <Glyph source={NAV} />
            </Button>
        </MenuToggleRoot>
    )
}

export const MenuToggleRoot = styled.div`
    background: linear-gradient(
        var(--MenuToggle_GradientLowBackgroundColor, transparent),
        var(--MenuToggle_GradientHighBackgroundColor, transparent),
        var(--MenuToggle_GradientHighBackgroundColor, transparent),
        var(--MenuToggle_GradientLowBackgroundColor, transparent)
    );
    color: var(--MenuToggle_Color, inherit);
    height: 90px;
    pointer-events: all;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(0%);
    transition: 400ms transform;
    transition-delay: 0ms;
    width: 90px;

    @media (min-width: ${SM}px) {
        height: 140px;
        width: 140px;
    }
`
