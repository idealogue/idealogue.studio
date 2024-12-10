import React from 'react'
import styled from 'styled-components'
import PrestyledCaption from '$shared/Caption'
import { SM, TABLET, DESKTOP } from '$utils/css'

const Caption = styled(PrestyledCaption)`
    margin-top: 20px;

    @media (min-width: ${SM}px) {
        margin-top: 32px;
    }

    @media ${TABLET} {
        margin-top: 48px;
    }

    @media ${DESKTOP} {
        margin-top: 64px;
    }
`

const UnstyledCaptionedContainer = ({ caption, children, ...props }) => (
    <div {...props}>
        <div>{children}</div>
        <Caption>{caption}</Caption>
    </div>
)

const CaptionedContainer = styled(UnstyledCaptionedContainer)``

export default CaptionedContainer
