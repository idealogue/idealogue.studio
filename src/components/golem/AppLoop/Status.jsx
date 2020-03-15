import React from 'react'
import styled, { css, keyframes } from 'sc'

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

const Circle = styled.div`
    background: #37c481;
    border: 1px solid #37c481;
    border-radius: 50%;
    border-width: 2px;
    box-sizing: border-box;
    /* height: 9px; */
    height: 12px;
    margin-right: 0.5em;
    /* width: 9px; */
    padding: 2px;
    width: 12px;

    ${({ breathe }) => !!breathe && css`
        background-color: transparent;

        ${Animation} {
            animation-play-state: running;
        }
    `}
`

const UnstyledStatus = ({ children, processing, ...props }) => (
    <div {...props}>
        <Circle breathe={processing}>
            <Animation />
        </Circle>
        {children}
    </div>
)

const Status = styled(UnstyledStatus)`
    align-items: center;
    display: flex;
`

export default Status
