import React, { ButtonHTMLAttributes, Ref } from 'react'
import styled from 'styled-components'

interface PlayerButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
    innerRef?: Ref<HTMLButtonElement>
}

export function PlayerButton({ innerRef, ...props }: PlayerButtonProps) {
    return (
        <PlayerButtonRoot {...props} type="button" ref={innerRef}>
            <Chip />
        </PlayerButtonRoot>
    )
}

const Chip = styled.div`
    position: absolute;
    left: var(--PlayerButton_Space, 0.5rem);
    right: var(--PlayerButton_Space, 0.5rem);
    top: var(--PlayerButton_Space, 0.5rem);
    height: 0.25rem;
    background-color: var(--PlayerButton_IdleColor);
    border-radius: 0.125rem;
    overflow: hidden;

    &::before {
        background-color: var(--PlayerButton_ActiveColor);
        width: calc(var(--PlayerButton_Progress, 0) * 100%);
        content: '';
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
`

const PlayerButtonRoot = styled.button`
    appearance: none;
    background: none;
    border: 0;
    display: block;
    padding: 0.5rem;
    width: 100%;
    height: 1.25rem;
    box-sizing: border-box;
    position: relative;
`

export const PlayerButtons = styled.div`
    display: grid;
    margin: 3.5rem auto;
    grid-template-columns: ${({ children }) => `repeat(${React.Children.count(children)}, 1fr)`};
    max-width: 100%;
`
