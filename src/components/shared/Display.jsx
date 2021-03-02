import styled, { css } from 'styled-components'
import { SM, MD, LG, XL } from '$utils/css'

const Display = styled.div`
    ${({ xs }) => xs != null && css`
        display: ${xs} !important;
    `}

    ${({ sm }) => sm != null && css`
        @media (min-width: ${SM}px) {
            display: ${sm} !important;
        }
    `}

    ${({ md }) => md != null && css`
        @media (min-width: ${MG}px) {
            display: ${md} !important;
        }
    `}

    ${({ lg }) => lg != null && css`
        @media (min-width: ${LG}px) {
            display: ${lg} !important;
        }
    `}

    ${({ xl }) => xl != null && css`
        @media (min-width: ${XL}px) {
            display: ${xl} !important;
        }
    `}
`

export default Display
