import { Caption as PrestyledCaption } from '$shared/Caption'
import { DESKTOP, SM, TABLET } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

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

interface CaptionedContainerProps {
    className?: string
    caption: React.ReactNode
    children?: React.ReactNode
}

export function CaptionedContainer({
    className,
    caption,
    children,
}: CaptionedContainerProps) {
    return (
        <div className={className}>
            <div>{children}</div>
            <Caption>{caption}</Caption>
        </div>
    )
}
