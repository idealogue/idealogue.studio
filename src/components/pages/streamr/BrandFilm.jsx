import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import PrestyledPadded from '$shared/Padded'
import VideoPlayer from '$streamr/VideoPlayer'
import Still2x from './streamrStill.jpg'
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
            <VideoPlayer
                poster={Still2x}
                src="/videos/streamr.mp4"
            />
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