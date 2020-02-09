import React from 'react'
import styled from 'styled-components'
import PhoneFrame from '$shared/PhoneFrame'
import FluidImage from '$shared/FluidImage'
import Image from '$hive/Image'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1048px;

    & > :last-child {
        display: none;
    }
`

const OldWallet = (props) => (
    <Wrapper {...props}>
        <PhoneFrame>
            <FluidImage src={Image.MOBILE_1} alt="Wallet" />
        </PhoneFrame>
        <PhoneFrame>
            <FluidImage src={Image.MOBILE_2} alt="Wallet" />
        </PhoneFrame>
        <PhoneFrame>
            <FluidImage src={Image.MOBILE_3} alt="Wallet" />
        </PhoneFrame>
        <PhoneFrame>
            <FluidImage src={Image.MOBILE_4} alt="Wallet" />
        </PhoneFrame>
    </Wrapper>
)

export default OldWallet
