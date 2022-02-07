import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import PrestyledPadded from '$shared/Padded'
import VideoPlayer from '$streamr/VideoPlayer'
import Still2x from './Image/Streamr_Vid_Poster@2x.jpg'
import { LG } from '$utils/css'

const Padded = styled(PrestyledPadded)`
    @media (max-width: ${LG - 1}px) {
        padding-left: 0;
        padding-right: 0;
    }
`

const UnstyledBrandFilm = (props) => (
    <CaptionedContainer {...props} caption="A Streamr Network intro video we produced with motion studio 21_19">
        <Padded>
            <VideoPlayer poster={Still2x}>
                <source src="/videos/streamr_promo.mp4" type="video/mp4" />
            </VideoPlayer>
        </Padded>
    </CaptionedContainer>
)

const BrandFilm = styled(UnstyledBrandFilm)`
    ${VideoPlayer} {
        border-radius: 8px;
        overflow: hidden;
    }
`

export default BrandFilm
