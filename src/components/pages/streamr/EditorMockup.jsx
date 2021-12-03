import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import PrestyledVideo from '$shared/Video'
import Overgrow from './Overgrow'

const Video = styled(PrestyledVideo)`
    border-radius: 8px;
    filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.06));
`

const EditorMockup = (props) => (
    <CaptionedContainer
        {...props}
        caption="Creating a realtime canvas in the Core app"
    >
        <Overgrow>
            <Video loop autoPlay playsInline muted>
                <source src="/videos/streamr_core.mp4" type="video/mp4" />
            </Video>
        </Overgrow>
    </CaptionedContainer>
)

export default EditorMockup
