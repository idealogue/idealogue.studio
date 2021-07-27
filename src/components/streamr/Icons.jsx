import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import Padded from '$shared/Padded'
import Image from '$streamr/Image'
import UnstyledVideo from '$shared/Video'

const Video = styled(UnstyledVideo)`
    border-radius: 4px;
    display: block;
    max-width: 100%;
`

const Icons = (props) => (
    <CaptionedContainer
        {...props}
        caption="Stuart’s icon loops for Streamr’s Mini-Explainer social media series"
    >
        <Padded>
            <Video
                id="streamrIcons"
                poster={Image.ICONS_2X}
                autoPlay
                playsInline
                muted
                loop
            />
        </Padded>
    </CaptionedContainer>
)

export default Icons
