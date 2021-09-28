import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import PrestyledPadded from '$shared/Padded'
import VideoPlayer from '$streamr/VideoPlayer'
import Image from '$streamr/Image'
import { LG } from '$utils/css'

const Padded = styled(PrestyledPadded)`
    @media (max-width: ${LG - 1}px) {
        padding-left: 0;
        padding-right: 0;
    }
`

const BrandFilm = (props) => (
    <CaptionedContainer {...props} caption="We worked with motion studio 21_19 to produce an animated brand film">
        <Padded>
            <VideoPlayer
                poster={Image.BRAND_FILM_POSTER_2X}
                sizeRatio="1376x734"
            />
        </Padded>
    </CaptionedContainer>
)

export default BrandFilm
