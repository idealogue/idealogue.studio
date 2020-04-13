import React from 'react'
import Padded from '$shared/Padded'
import VideoPlayer from '$streamr/VideoPlayer'
import Image from '$streamr/Image'

const ConsensusFilm = (props) => (
    <Padded>
        <VideoPlayer
            poster={Image.CONSENSUS_POSTER_2X}
            sizeRatio="1376x839"
        />
    </Padded>
)

export default ConsensusFilm
