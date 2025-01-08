import { ALL as Image } from '$golem/Image'
import { CaptionedContainer } from '$shared/CaptionedContainer'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const UiProcess = () => (
    <Wrapper>
        <CaptionedContainer caption="Early wireframes for the Golem app">
            <FluidImage src={Image.UI_PROCESS} />
        </CaptionedContainer>
    </Wrapper>
)

export default UiProcess
