import { Container } from '$shared/Container'
import { Display } from '$shared/Display'
import { FluidImage } from '$shared/FluidImage'
import { PhoneFrame, PhoneFrameRoot } from '$shared/PhoneFrame'
import { LG, MD } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import { ALL as Image } from '~/components/pages/hive/Image'

export function OldWallet() {
    return (
        <div>
            <Container>
                <Inner>
                    <PhoneFrame>
                        <FluidImage src={Image.MOBILE_1} alt="Wallet" />
                        <FluidImage src={Image.MOBILE_2} alt="Wallet" />
                        <FluidImage src={Image.MOBILE_3} alt="Wallet" />
                        <FluidImage src={Image.MOBILE_4} alt="Wallet" />
                    </PhoneFrame>
                    <Display as={PhoneFrame} xs="none" md>
                        <FluidImage src={Image.MOBILE_2} alt="Wallet" />
                    </Display>
                    <Display as={PhoneFrame} xs="none" md>
                        <FluidImage src={Image.MOBILE_3} alt="Wallet" />
                    </Display>
                    <Display as={PhoneFrame} xs="none" md lg="none">
                        <FluidImage src={Image.MOBILE_4} alt="Wallet" />
                    </Display>
                </Inner>
            </Container>
        </div>
    )
}

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    @media (max-width: ${MD - 1}px) {
        ${PhoneFrameRoot} {
            margin: 0 auto;
        }
    }

    @media (min-width: ${MD}px) {
        display: grid;
        gap: 100px;
        grid-template-columns: 240px 240px;
        justify-content: normal;
        width: 580px;

        ${PhoneFrameRoot} {
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

        ${PhoneFrameRoot} {
            width: 300px;
        }
    }
`
