import Image from '$hive/Image'
import Container from '$shared/Container'
import Display from '$shared/Display'
import FluidImage from '$shared/FluidImage'
import PhoneFrame from '$shared/PhoneFrame'
import { LG, MD } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    @media (max-width: ${MD - 1}px) {
        ${PhoneFrame} {
            margin: 0 auto;
        }
    }

    @media (min-width: ${MD}px) {
        display: grid;
        gap: 100px;
        grid-template-columns: 240px 240px;
        justify-content: normal;
        width: 580px;

        ${PhoneFrame} {
            width: 240px;
        }
    }

    @media (min-width: ${LG}px) {
        display: flex;
        gap: normal;
        grid-template-columns: none;
        justify-content: space-between;
        position: relative;
        left: -15%;
        width: 130%;

        ${PhoneFrame} {
            width: 300px;
        }
    }
`

const UnstyledOldWallet = (props) => (
    <div {...props}>
        <Container>
            <Inner>
                <PhoneFrame>
                    <FluidImage src={Image.MOBILE_1} alt="Wallet" />
                    <FluidImage src={Image.MOBILE_2} alt="Wallet" />
                    <FluidImage src={Image.MOBILE_3} alt="Wallet" />
                    <FluidImage src={Image.MOBILE_4} alt="Wallet" />
                </PhoneFrame>
                <Display as={PhoneFrame} xs="none" md="block">
                    <FluidImage src={Image.MOBILE_2} alt="Wallet" />
                </Display>
                <Display as={PhoneFrame} xs="none" md="block">
                    <FluidImage src={Image.MOBILE_3} alt="Wallet" />
                </Display>
                <Display as={PhoneFrame} xs="none" md="block" lg="none">
                    <FluidImage src={Image.MOBILE_4} alt="Wallet" />
                </Display>
            </Inner>
        </Container>
    </div>
)

const OldWallet = styled(UnstyledOldWallet)``

export default OldWallet
