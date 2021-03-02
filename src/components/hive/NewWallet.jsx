import React from 'react'
import styled from 'styled-components'
import PhoneFrame from '$shared/PhoneFrame'
import Video from '$shared/Video'
import { SM, MD } from '$utils/css'

const UnstyledNewWallet = (props) => (
    <PhoneFrame {...props}>
        <Video id="hive" loop autoPlay playsInline muted />
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
