import React, { useCallback } from 'react'
import Glyph, { SCROLL_INDICATOR } from '$shared/Glyph'
import { keyframes } from 'sc'
import { scroller as scroll } from 'react-scroll'

const ID = 'scroll-indicator-target'

const bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(25%);
    }
`

const ScrollIndicator = ({ onClick: onClickProp, ...props }) => {
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
        <button
            {...props}
            onClick={onClick}
            type="button"
            css={`
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
                position: absolute;
                right: 0;
                width: 140px;

                :hover > div {
                    animation-play-state: running;
                }
            `}
        >
            <div
                css={`
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
                `}
            >
                <Glyph
                    source={SCROLL_INDICATOR}
                    css={`
                        display: block;
                        margin: 0 auto;
                        width: 16px;
                    `}
                />
            </div>
        </button>
    )
}

ScrollIndicator.Target = () => (
    <div id={ID} />
)

export default ScrollIndicator
