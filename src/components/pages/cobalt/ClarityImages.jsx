import Image from '$cobalt/Image'
import Container from '$shared/Container'
import Display from '$shared/Display'
import FluidImage from '$shared/FluidImage'
import PhoneFrame from '$shared/PhoneFrame'
import { LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

const Frames = styled.div`
    ${PhoneFrame} {
        margin: 0 auto;
    }

    @media (min-width: ${SM}px) {
        ${PhoneFrame} {
            width: 240px;
        }
    }

    @media (min-width: ${MD}px) {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 94%;

        ${PhoneFrame} {
            margin: 0;
            width: 280px;
        }
    }

    @media (min-width: ${LG}px) {
        left: -8%;
        position: relative;
        width: 116%;

        ${PhoneFrame} {
            width: 250px;
        }
    }
`

const AppPreview = styled.div`
    @media (min-width: ${MD}px) {
        left: -10%;
        position: relative;
        width: 120%;
    }

    @media (min-width: ${LG}px) {
        left: -16%;
        width: 132%;
    }
`

export const MobileShots = () => (
    <Container>
        <Frames>
            <PhoneFrame>
                <FluidImage src={Image.SCREENSHOT_MOBILE_1} alt="Clarity" />
                <FluidImage src={Image.SCREENSHOT_MOBILE_2} alt="Clarity" />
                <FluidImage src={Image.SCREENSHOT_MOBILE_3} alt="Clarity" />
            </PhoneFrame>
            <Display as={PhoneFrame} xs="none" md="block">
                <FluidImage src={Image.SCREENSHOT_MOBILE_2} alt="Clarity" />
            </Display>
            <Display as={PhoneFrame} xs="none" lg="block">
                <FluidImage src={Image.SCREENSHOT_MOBILE_3} alt="Clarity" />
            </Display>
        </Frames>
    </Container>
)

export const DesktopShot = () => (
    <Container>
        <AppPreview>
            <FluidImage src={Image.SCREENSHOT_DESKTOP} alt="Clarity" />
        </AppPreview>
    </Container>
)
