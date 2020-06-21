import React from 'react'
import Glyph, { SCROLL_INDICATOR } from '$shared/Glyph'
import { keyframes } from 'sc'

const bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(25%);
    }
`

const ScrollIndicator = (props) => (
    <button
        {...props}
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

export default ScrollIndicator
