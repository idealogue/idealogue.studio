import styled, { css } from 'styled-components'
import { SM, MD, LG } from '$utils/css'

const Spacer = styled.div`
    ${({ head, scale = 1 }) => !!head && css`
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

    ${({ tail, scale = 1 }) => !!tail && css`
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

export default Spacer
