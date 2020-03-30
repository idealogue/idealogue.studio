import React from 'react'
import styled, { css, keyframes } from 'sc'

const animateTouch = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

const animateRelease = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(3);
    }
`

const Shape = styled.div`
    border-radius: 50%;
    height: 12px;
    left: -6px;
    position: absolute;
    top: -6px;
    width: 12px;
    animation-delay: 0ms;
    animation-direction: normal;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-timing-function: ease-in;
`

const Touch = styled(Shape)`
    background-color: #737373;
    animation-name: ${animateTouch};

    ${({ release }) => !!release && css`
        animation-play-state: running;
    `}
`

const Release = styled(Shape)`
    animation-name: ${animateRelease};
    animation-play-state: running;
    background-color: #b3b3b3;
`

const UnstyledTouchIndicator = ({ immitateRelease, visible, center, ...props }) => (
    <div {...props}>
        {!!(immitateRelease && visible) && (
            <Release />
        )}
        <Touch release={immitateRelease && visible} />
    </div>
)

const TouchIndicator = styled(UnstyledTouchIndicator)`
    bottom: 6px;
    left: 50%;
    opacity: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: 200ms;
    transition-delay: 200s, 0s;
    transition-property: visibility, opacity;
    visibility: hidden;

    ${({ center }) => !!center && css`
        bottom: auto;
        top: 50%;
        transform: translate(-50%, -50%);
    `}

    ${({ visible }) => !!visible && css`
        opacity: 1;
        transition-delay: 0s, 0s;
        visibility: visible;
    `}
`

export default TouchIndicator
