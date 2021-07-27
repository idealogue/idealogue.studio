import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import Padded from '$shared/Padded'
import Image from '$streamr/Image'

const MockupImage = styled(FluidImage)`
    border-radius: 2px;
`

const EditorMockup = (props) => (
    <CaptionedContainer
        {...props}
        caption="With code led by dev Tim Oxley, we redesigned and rebuilt the Core app"
    >
        <Padded>
            <MockupImage src={Image.EDITOR_MOCKUP_2X} alt="Editor mockup" fill />
        </Padded>
    </CaptionedContainer>
)

export default EditorMockup
