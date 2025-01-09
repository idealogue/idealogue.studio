import { LG } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import {
    VideoPlayer,
    VideoPlayerRoot,
} from '~/components/pages/streamr/VideoPlayer'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import { Padded as PrestyledPadded } from '~/components/shared/Padded'
import Still2x from './Image/Streamr_Vid_Poster@2x.jpg'

const Padded = styled(PrestyledPadded)`
    @media (max-width: ${LG - 1}px) {
        padding-left: 0;
        padding-right: 0;
    }
`

export function BrandFilm() {
    return (
        <BrandFilmRoot caption="A Streamr Network intro video we produced with motion studio 21_19">
            <Padded>
                <VideoPlayer poster={Still2x}>
                    <source src="/videos/streamr_promo.mp4" type="video/mp4" />
                </VideoPlayer>
            </Padded>
        </BrandFilmRoot>
    )
}

const BrandFilmRoot = styled(CaptionedContainer)`
    ${VideoPlayerRoot} {
        border-radius: 8px;
        overflow: hidden;
    }
`
