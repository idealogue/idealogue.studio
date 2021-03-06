import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import CaptionedContainer from '$shared/CaptionedContainer'

const Wrapper = styled.div`
`

const UiProcess = () => (
    <Wrapper>
        <CaptionedContainer caption="Early wireframes for the Golem app">
            <FluidImage src={Image.UI_PROCESS} alt="" />
        </CaptionedContainer>
    </Wrapper>
)

export default UiProcess
