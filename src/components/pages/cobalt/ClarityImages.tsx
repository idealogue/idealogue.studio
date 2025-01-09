import { FluidImage } from '$shared/FluidImage'
import { PhoneFrame, PhoneFrameRoot } from '$shared/PhoneFrame'
import { LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import { ALL as Image } from '~/components/pages/cobalt/Image'
import { Container } from '~/components/shared/Container'
import { Display } from '~/components/shared/Display'

const Frames = styled.div`
    ${PhoneFrameRoot} {
        margin: 0 auto;
    }

    @media (min-width: ${SM}px) {
        ${PhoneFrameRoot} {
            width: 240px;
        }
    }

    @media (min-width: ${MD}px) {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 94%;

        ${PhoneFrameRoot} {
            margin: 0;
            width: 280px;
        }
    }

    @media (min-width: ${LG}px) {
        left: -8%;
        position: relative;
        width: 116%;

        ${PhoneFrameRoot} {
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
            <Display as={PhoneFrame} xs="none" md>
                <FluidImage src={Image.SCREENSHOT_MOBILE_2} alt="Clarity" />
            </Display>
            <Display as={PhoneFrame} xs="none" lg>
                <FluidImage src={Image.SCREENSHOT_MOBILE_3} alt="Clarity" />
            </Display>
        </Frames>
    </Container>
)

export function DesktopShot() {
    return (
        <Container>
            <AppPreview>
                <FluidImage src={Image.SCREENSHOT_DESKTOP} alt="Clarity" />
            </AppPreview>
        </Container>
    )
}
