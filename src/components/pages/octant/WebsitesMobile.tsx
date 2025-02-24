import * as React from 'react'
import styled from 'styled-components'
import { Player } from '~/components/pages/octant/Player'
import { TABLET } from '~/utils/css'
import Poster from './assets/websites_all_mobile_poster.jpg'

export function WebsitesMobile() {
    return (
        <WebsitesMobileRoot>
            <Player
                src={'/videos/octant/websites_all_mobile.mp4'}
                posterSrc={Poster}
                durationsInSeconds={durations}
            />
        </WebsitesMobileRoot>
    )
}

const durations: [number, ...number[]] = [9.033333 /* top */, 7.0 /* token */]

const WebsitesMobileRoot = styled.div`
    @media ${TABLET} {
        display: none;
    }
`
