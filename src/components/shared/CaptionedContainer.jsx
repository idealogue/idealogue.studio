import React from 'react'
import styled from 'styled-components'
import UnstyledCaption from '$shared/Caption'

const Wrapper = styled.div`
`

const Body = styled.div`
`

const Caption = styled(UnstyledCaption)`
    margin-top: 88px;
`

const CaptionedContainer = ({ caption, children, ...props }) => (
    <Wrapper {...props}>
        <Body>
            {children}
        </Body>
        <Caption>
            {caption}
        </Caption>
    </Wrapper>
)

export default CaptionedContainer
