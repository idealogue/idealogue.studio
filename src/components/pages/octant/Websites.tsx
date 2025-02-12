import * as React from 'react'
import styled from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import { Container } from '~/components/shared/Container'

export function Websites() {
    return (
        <WebsitesRoot>
            <Container>
                <AutoPlayingVideo loop playsInline muted>
                    <source src="/videos/octant/websites_top_desktop.mp4" />
                </AutoPlayingVideo>
                <AutoPlayingVideo loop playsInline muted>
                    <source src="/videos/octant/websites_token_desktop.mp4" />
                </AutoPlayingVideo>
            </Container>
        </WebsitesRoot>
    )
}

const WebsitesRoot = styled.div`
    video {
        border-radius: 16px;
        display: block;
        margin: 0 auto;
    }

    video + video {
        margin-top: 40px;
    }
`
