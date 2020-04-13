import React from 'react'
import CaptionedContainer from '$shared/CaptionedContainer'
import Padded from '$shared/Padded'
import VideoPlayer from '$streamr/VideoPlayer'
import Image from '$streamr/Image'

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
