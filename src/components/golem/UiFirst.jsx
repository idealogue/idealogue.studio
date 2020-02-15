import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import Container from '$shared/Container'
import CaptionedContainer from '$shared/CaptionedContainer'

const Wrapper = styled(Container)`
    img {
        margin: 0 auto;
    }
`

const UiFirst = () => (
    <Wrapper>
        <CaptionedContainer caption="The original Golem Alpha interface">
            <FluidImage src={Image.UX_FIRST} alt="UI First" />
        </CaptionedContainer>
    </Wrapper>
)

export default UiFirst
