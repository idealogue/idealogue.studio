import { AutoPlayingVideo } from '$shared/AutoPlayingVideo'
import { PhoneFrame } from '$shared/PhoneFrame'
import { MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

const UnstyledNewWallet = (props) => (
    <PhoneFrame {...props}>
        <AutoPlayingVideo loop playsInline muted>
            <source src="/videos/hive.mp4" type="video/mp4" />
            <source src="/videos/hive.webm" type="video/webm" />
            <source src="/videos/hive.mov" type="video/quicktime" />
        </AutoPlayingVideo>
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
