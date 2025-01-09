import { SM } from '$utils/css'
import React, { ButtonHTMLAttributes, useCallback } from 'react'
import { scroller as scroll } from 'react-scroll'
import styled, { keyframes } from 'styled-components'
import Glyph, { SCROLL_INDICATOR } from '~/components/shared/Glyph'

const ID = 'scroll-indicator-target'

const bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(25%);
    }
`

interface ScrollIndicatorProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
    onClick?(): void
}

export function ScrollIndicator({
    onClick: onClickProp,
    ...props
}: ScrollIndicatorProps) {
    const onClick = useCallback(() => {
        scroll.scrollTo(ID, {
            delay: 0,
            duration: 300,
            offset: 0,
            smooth: 'easeInOutQuad',
        })

        if (onClickProp) {
            onClickProp()
        }
    }, [onClickProp])

    return (
        <ScrollIndicatorRoot {...props} onClick={onClick} type="button">
            <div>
                <Glyph
                    source={SCROLL_INDICATOR}
                    css={`
                        display: block;
                        margin: 0 auto;
                        width: 16px;
                    `}
                />
            </div>
        </ScrollIndicatorRoot>
    )
}

const ScrollIndicatorRoot = styled.button`
    appearance: none;
    background-color: transparent;
    border: 0;
    bottom: 0;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    height: 140px;
    outline: 0 !important;
    padding: 50px;
    right: 50%;
    position: absolute;
    width: 140px;
    transform: translateX(50%);

    &:hover > div {
        animation-play-state: running;
    }

    > div {
        align-items: center;
        animation-direction: alternate;
        animation-delay: 0ms;
        animation-duration: 0.5s;
        animation-fill-mode: none;
        animation-iteration-count: infinite;
        animation-name: ${bounce};
        animation-play-state: paused;
        animation-timing-function: ease-in;
        display: flex;
        height: 40px;
        width: 40px;
    }

    @media (min-width: ${SM}px) {
        right: 0;
        transform: none;
    }
`

export function ScrollIndicatorTarget() {
    return <div id={ID} />
}
