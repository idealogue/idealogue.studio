import * as React from 'react'
import styled from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import { Container } from '~/components/shared/Container'
import { TABLET } from '~/utils/css'
import PosterToken from './assets/websites_token_desktop_poster.jpg'
import PosterTop from './assets/websites_top_desktop_poster.jpg'

export function Websites() {
    return (
        <WebsitesRoot>
            <Container>
                <AutoPlayingVideo loop playsInline muted poster={PosterTop}>
                    <source src="/videos/octant/websites_top_desktop.mp4" />
                </AutoPlayingVideo>
                <AutoPlayingVideo loop playsInline muted poster={PosterToken}>
                    <source src="/videos/octant/websites_token_desktop.mp4" />
                </AutoPlayingVideo>
            </Container>
        </WebsitesRoot>
    )
}

const WebsitesRoot = styled.div`
    display: none;

    video {
        border-radius: 16px;
        display: block;
        margin: 0 auto;
    }

    video + video {
        margin-top: 40px;
    }

    @media ${TABLET} {
        display: block;
    }
`
