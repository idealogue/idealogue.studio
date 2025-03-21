import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'

const breatheAnimation = keyframes`
    0% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(2.5);
    }
`

const Animation = styled.div`
    animation-delay: 0ms;
    animation-direction: normal;
    animation-duration: 1500ms;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-name: ${breatheAnimation};
    animation-play-state: paused;
    animation-timing-function: ease-in;
    background: #37c481;
    border-radius: 50%;
    content: '';
    height: 100%;
    width: 100%;
`

const Circle = styled.div<{ $breathe?: boolean }>`
    background: #37c481;
    border: 1px solid #37c481;
    border-radius: 50%;
    border-width: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    /* height: 9px; */
    height: 12px;
    margin-right: 0.5em;
    /* width: 9px; */
    padding: 2px;
    width: 12px;

    ${({ $breathe = false }) =>
        $breathe &&
        css`
            background-color: transparent;

            ${Animation} {
                animation-play-state: running;
            }
        `}
`

interface StatusProps {
    children: React.ReactNode
    processing?: boolean
}

export function Status({ children, processing = false }: StatusProps) {
    return (
        <StatusRoot>
            <Circle $breathe={processing}>
                <Animation />
            </Circle>
            <span>{children}</span>
        </StatusRoot>
    )
}

const StatusRoot = styled.div`
    align-items: center;
    display: flex;

    > span {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
