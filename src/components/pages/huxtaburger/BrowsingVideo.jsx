import AutoPlayingVideo from '$shared/AutoPlayingVideo'
import PhoneFrame from '$shared/PhoneFrame'
import * as React from 'react'
import styled from 'styled-components'

const UnstyledBrowsingVideo = (props) => (
    <div {...props}>
        <PhoneFrame>
            <AutoPlayingVideo loop playsInline muted>
                <source src="/videos/hux.mp4" type="video/mp4" />
                <source src="/videos/hux.webm" type="video/webm" />
                <source src="/videos/hux.mov" type="video/quicktime" />
            </AutoPlayingVideo>
        </PhoneFrame>
    </div>
)

const BrowsingVideo = styled(UnstyledBrowsingVideo)`
    ${PhoneFrame} {
        margin: 0 auto;
    }
`

export default BrowsingVideo
