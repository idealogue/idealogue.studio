import React from 'react'
import styled from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import PrestyledPadded from '$shared/Padded'
import Image from '$streamr/Image'
import UnstyledVideo from '$shared/Video'
import { MD } from '$utils/css'

const Video = styled(UnstyledVideo)`
    border-radius: 4px;
    display: block;
    max-width: 100%;
`

const Padded = styled(PrestyledPadded)`
    @media (max-width: ${MD - 1}px) {
        padding-left: 16px;
        padding-right: 16px;
    }
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
