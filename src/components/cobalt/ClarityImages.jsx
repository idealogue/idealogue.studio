import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import PhoneFrame from '$shared/PhoneFrame'
import Image from '$cobalt/Image'
import Container from '$shared/Container'

const Frames = styled.div`
    display: flex;
    justify-content: space-between;
    left: -12%;
    position: relative;
    width: 124%;
`

const AppPreview = styled.div`
    left: -20%;
    position: relative;
    width: 140%;
`

export const MobileShots = () => (
    <Container>
        <Frames>
            <PhoneFrame>
                <FluidImage src={Image.SCREENSHOT_MOBILE_1} alt="Clarity" />
            </PhoneFrame>
            <PhoneFrame>
                <FluidImage src={Image.SCREENSHOT_MOBILE_2} alt="Clarity" />
            </PhoneFrame>
            <PhoneFrame>
                <FluidImage src={Image.SCREENSHOT_MOBILE_3} alt="Clarity" />
            </PhoneFrame>
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
