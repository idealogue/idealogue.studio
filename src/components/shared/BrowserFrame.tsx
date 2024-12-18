import { MD, SM, XL } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'

interface BrowserFrameProps {
    children?: React.ReactNode
    shadow?: 'light'
    dark?: boolean
}

export function BrowserFrame({
    children,
    shadow,
    dark = false,
}: BrowserFrameProps) {
    return (
        <BrowserFrameRoot $dark={dark} $shadow={shadow}>
            <div className="buttons">
                <div className="button" />
                <div className="button" />
                <div className="button" />
            </div>
            <div className="body">{children}</div>
        </BrowserFrameRoot>
    )
}

const BrowserFrameRoot = styled.div<{ $shadow?: 'light'; $dark?: boolean }>`
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    ${({ $shadow }) =>
        $shadow &&
        css`
            box-shadow: ${$shadow === 'light'
                ? '0 1px 3px rgba(black, 0.025)'
                : '0 2px 4px rgba(black, 0.2)'};
        `}

    .buttons {
        background: #d8d8d8;
        display: flex;
        padding: 5px;
    }

    .button {
        background-color: #ec5c56;
        border-radius: 50%;
        height: 4px;
        margin-right: 3px;
        width: 4px;
    }

    .button + .button {
        background-color: #f6bc3d;
    }

    .button + .button + .button {
        background-color: #62ca43;
    }

    ${({ $dark = false }) =>
        !$dark &&
        css`
            .body {
                background-color: #ffffff;
            }
        `}

    video {
        display: block;
        max-width: 100%;
    }

    @media (min-width: ${SM}px) {
        border-radius: 6px;

        .buttons {
            padding: 9px;
        }

        .button {
            height: 8px;
            margin-right: 5px;
            width: 8px;
        }
    }

    @media (min-width: ${MD}px) {
        border-radius: 6px;

        .buttons {
            padding: 12px;
        }

        .button {
            height: 11px;
            margin-right: 7px;
            width: 11px;
        }
    }

    @media (min-width: ${XL}px) {
        left: -13%;
        width: 126%;
    }
`
