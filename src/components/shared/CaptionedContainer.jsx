import React from 'react'
import styled from 'styled-components'
import PrestyledCaption from '$shared/Caption'
import { SM, MD } from '$utils/css'

const Caption = styled(PrestyledCaption)`
    margin-top: 56px;

    @media (min-width: ${SM}px) {
        margin-top: 88px;
    }

    @media (min-width: ${MD}px) {}
`

const UnstyledCaptionedContainer = ({ caption, children, ...props }) => (
    <div {...props}>
        <div>
            {children}
        </div>
        <Caption>
            {caption}
        </Caption>
    </div>
)

const CaptionedContainer = styled(UnstyledCaptionedContainer)``

export default CaptionedContainer
