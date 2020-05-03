import React from 'react'
import styled, { css } from 'sc'
import { MD, LG } from '$utils/css'

const UnstyledSpacer = ({ head, tail, ...props }) => (
    <div {...props} />
)

const Spacer = styled(UnstyledSpacer)`
    ${({ head }) => !!head && css`
        padding-top: 48px;

        @media (min-width: ${MD}px) {
            padding-top: 104px;
        }

        @media (min-width: ${LG}px) {
            padding-top: 240px;
        }
    `}


    ${({ tail }) => !!tail && css`
        padding-bottom: 48px;

        @media (min-width: ${MD}px) {
            padding-bottom: 104px;
        }

        @media (min-width: ${LG}px) {
            padding-bottom: 240px;
        }
    `}
`

export default Spacer
