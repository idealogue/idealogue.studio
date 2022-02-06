import React from 'react'
import styled from 'styled-components'
import Video from '$shared/Video'
import PhoneFrame from '$shared/PhoneFrame'

const UnstyledBrowsingVideo = (props) => (
    <div {...props}>
        <PhoneFrame>
            <Video loop autoPlay playsInline muted>
                <source src="/videos/hux.mp4" type="video/mp4" />
                <source src="/videos/hux.webm" type="video/webm" />
                <source src="/videos/hux.mov" type="video/quicktime" />
            </Video>
        </PhoneFrame>
    </div>
)

const BrowsingVideo = styled(UnstyledBrowsingVideo)`
    ${PhoneFrame} {
        margin: 0 auto;
    }
`

export default BrowsingVideo
