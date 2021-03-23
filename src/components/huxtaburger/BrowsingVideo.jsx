import React from 'react'
import styled from 'styled-components'
import Video from '$shared/Video'
import PhoneFrame from '$shared/PhoneFrame'

const UnstyledBrowsingVideo = (props) => (
    <div {...props}>
        <PhoneFrame>
            <Video id="hux" loop autoPlay playsInline muted />
        </PhoneFrame>
    </div>
)

const BrowsingVideo = styled(UnstyledBrowsingVideo)`
    ${PhoneFrame} {
        margin: 0 auto;
    }
`

export default BrowsingVideo
