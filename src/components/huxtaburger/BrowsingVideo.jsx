import React from 'react'
import styled from 'styled-components'
import Video from '$shared/Video'
import PhoneFrame from '$shared/PhoneFrame'

const Wrapper = styled.div`
`

const BrowsingVideo = (props) => (
    <Wrapper {...props}>
        <PhoneFrame>
            <Video id="hux" loop autoPlay playsInline muted />
        </PhoneFrame>
    </Wrapper>
)

export default BrowsingVideo
