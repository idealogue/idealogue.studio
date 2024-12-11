import { LG, MD, SM } from '$utils/css'
import styled, { css } from 'styled-components'

export interface SpacerProps {
    head?: boolean
    tail?: boolean
    scale?: number
}

export const Spacer = styled.div<SpacerProps>`
    ${({ head = false, scale = 1 }) =>
        head &&
        css`
            padding-top: ${96 * scale}px;

            @media (min-width: ${SM}px) {
                padding-top: ${144 * scale}px;
            }

            @media (min-width: ${MD}px) {
                padding-top: ${168 * scale}px;
            }

            @media (min-width: ${LG}px) {
                padding-top: ${240 * scale}px;
            }
        `}

    ${({ tail = false, scale = 1 }) =>
        tail &&
        css`
            padding-bottom: ${96 * scale}px;

            @media (min-width: ${SM}px) {
                padding-bottom: ${144 * scale}px;
            }

            @media (min-width: ${MD}px) {
                padding-bottom: ${168 * scale}px;
            }

            @media (min-width: ${LG}px) {
                padding-bottom: ${240 * scale}px;
            }
        `}
`
