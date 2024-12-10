import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'

const Inner = styled.div`
    background-color: gray;
    padding: 64px;
`

const UnstyledPlaceholder = ({ caption, children, ...props }) => (
    <div {...props}>
        {caption ? (
            <CaptionedContainer caption={caption}>
                <Inner>{children}</Inner>
            </CaptionedContainer>
        ) : (
            <Inner>{children}</Inner>
        )}
    </div>
)

const Placeholder = styled(UnstyledPlaceholder)``

export default Placeholder
