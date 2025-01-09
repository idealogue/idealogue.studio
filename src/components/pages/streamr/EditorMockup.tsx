import { AutoPlayingVideo as PrestyledAutoPlayingVideo } from '$shared/AutoPlayingVideo'
import { CaptionedContainer } from '$shared/CaptionedContainer'
import * as React from 'react'
import styled from 'styled-components'
import { Overgrow } from './Overgrow'

export function EditorMockup() {
    return (
        <CaptionedContainer caption="Creating a realtime canvas in the Core app">
            <Overgrow>
                <AutoPlayingVideo loop playsInline muted>
                    <source src="/videos/streamr_core.mp4" type="video/mp4" />
                </AutoPlayingVideo>
            </Overgrow>
        </CaptionedContainer>
    )
}

const AutoPlayingVideo = styled(PrestyledAutoPlayingVideo)`
    border-radius: 8px;
    filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.06));
`
