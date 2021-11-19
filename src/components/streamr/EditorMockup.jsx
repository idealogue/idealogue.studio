import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import PrestyledPadded from '$shared/Padded'
import Image from '$streamr/Image'
import { LG } from '$utils/css'

const Padded = styled(PrestyledPadded)`
    @media (max-width: ${LG - 1}px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`

const MockupImage = styled(FluidImage)`
    border-radius: 2px;
`

const EditorMockup = (props) => (
    <CaptionedContainer
        {...props}
        caption="Creating a realtime canvas in the Core app"
    >
        <Padded>
            <MockupImage src={Image.EDITOR_MOCKUP_2X} alt="Editor mockup" fill />
        </Padded>
    </CaptionedContainer>
)

export default EditorMockup
