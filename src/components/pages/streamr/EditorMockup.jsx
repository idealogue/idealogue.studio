import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import PrestyledAutoPlayingVideo from '$shared/AutoPlayingVideo'
import Overgrow from './Overgrow'

const AutoPlayingVideo = styled(PrestyledAutoPlayingVideo)`
    border-radius: 8px;
    filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.06));
`

const EditorMockup = (props) => (
    <CaptionedContainer
        {...props}
        caption="Creating a realtime canvas in the Core app"
    >
        <Overgrow>
            <AutoPlayingVideo loop playsInline muted>
                <source src="/videos/streamr_core.mp4" type="video/mp4" />
            </AutoPlayingVideo>
        </Overgrow>
    </CaptionedContainer>
)

export default EditorMockup
