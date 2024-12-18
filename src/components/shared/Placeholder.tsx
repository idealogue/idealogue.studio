import * as React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '~/components/shared/CaptionedContainer'

export function Placeholder({ caption, children }: PlaceholderProps) {
    return (
        <div>
            {caption ? (
                <CaptionedContainer caption={caption}>
                    <Inner>{children}</Inner>
                </CaptionedContainer>
            ) : (
                <Inner>{children}</Inner>
            )}
        </div>
    )
}

interface PlaceholderProps {
    caption?: string
    children?: React.ReactNode
}

const Inner = styled.div`
    background-color: gray;
    padding: 64px;
`
