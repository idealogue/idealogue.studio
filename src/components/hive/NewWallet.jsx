import React from 'react'
import styled from 'styled-components'
import PhoneFrame from '$shared/PhoneFrame'
import Video from '$shared/Video'
import { SM, MD } from '$utils/css'

const UnstyledNewWallet = (props) => (
    <PhoneFrame {...props}>
        <Video loop autoPlay playsInline muted>
            <source src="/videos/hive.mp4" type="video/mp4" />
            <source src="/videos/hive.webm" type="video/webm" />
            <source src="/videos/hive.mov" type="video/quicktime" />
        </Video>
    </PhoneFrame>
)

const NewWallet = styled(UnstyledNewWallet)`
    margin: 0 auto;
    width: 200px;

    @media (min-width: ${SM}px) {
        width: 240px;
    }

    @media (min-width: ${MD}px) {
        width: 300px;
    }
`

export default NewWallet
