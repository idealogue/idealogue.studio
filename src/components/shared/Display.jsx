import styled, { css } from 'styled-components'
import { SM, MD, LG, XL } from '$utils/css'

function value(x) {
    return x === true ? 'block' : x
}

const Display = styled.div`
    ${({ xs }) => xs != null && css`
        display: ${value(xs)} !important;
    `}

    ${({ sm }) => sm != null && css`
        @media (min-width: ${SM}px) {
            display: ${value(sm)} !important;
        }
    `}

    ${({ md }) => md != null && css`
        @media (min-width: ${MD}px) {
            display: ${value(md)} !important;
        }
    `}

    ${({ lg }) => lg != null && css`
        @media (min-width: ${LG}px) {
            display: ${value(lg)} !important;
        }
    `}

    ${({ xl }) => xl != null && css`
        @media (min-width: ${XL}px) {
            display: ${value(xl)} !important;
        }
    `}
`

export default Display
