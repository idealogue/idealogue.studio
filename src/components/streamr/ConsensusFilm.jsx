import React from 'react'
import styled from 'styled-components'
import PrestyledPadded from '$shared/Padded'
import VideoPlayer from '$streamr/VideoPlayer'
import Image from '$streamr/Image'
import { MD } from '$utils/css'

const Padded = styled(PrestyledPadded)`
    @media (max-width: ${MD - 1}px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`

const ConsensusFilm = (props) => (
    <Padded>
        <VideoPlayer
            poster={Image.CONSENSUS_POSTER_2X}
            sizeRatio="1376x839"
        />
    </Padded>
)

export default ConsensusFilm
