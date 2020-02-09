import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import PhoneFrame from '$shared/PhoneFrame'
import Image from '$cobalt/Image'

const Frames = styled.div`
    display: flex;
    justify-content: space-between;
`

const AppPreview = styled.div`
`

const ClarityImages = (props) => (
    <div {...props}>
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
        <AppPreview>
            <FluidImage src={Image.SCREENSHOT_DESKTOP} alt="Clarity" />
        </AppPreview>
    </div>
)

export default ClarityImages
