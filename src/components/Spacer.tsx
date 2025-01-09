import { LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    head?: boolean
    tail?: boolean
    scale?: number
}

export function Spacer({ head, tail, scale, ...props }: SpacerProps) {
    return <Root {...props} $head={head} $tail={tail} $scale={scale} />
}

const Root = styled.div<{ $head?: boolean; $tail?: boolean; $scale?: number }>`
    ${({ $head = false, $scale = 1 }) =>
        $head &&
        css`
            padding-top: ${96 * $scale}px;

            @media (min-width: ${SM}px) {
                padding-top: ${144 * $scale}px;
            }

            @media (min-width: ${MD}px) {
                padding-top: ${168 * $scale}px;
            }

            @media (min-width: ${LG}px) {
                padding-top: ${240 * $scale}px;
            }
        `}

    ${({ $tail = false, $scale = 1 }) =>
        $tail &&
        css`
            padding-bottom: ${96 * $scale}px;

            @media (min-width: ${SM}px) {
                padding-bottom: ${144 * $scale}px;
            }

            @media (min-width: ${MD}px) {
                padding-bottom: ${168 * $scale}px;
            }

            @media (min-width: ${LG}px) {
                padding-bottom: ${240 * $scale}px;
            }
        `}
`
