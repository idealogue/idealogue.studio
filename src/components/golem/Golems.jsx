import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import CaptionedContainer from '$shared/CaptionedContainer'

const Wrapper = styled.div`
`

const Golems = () => (
    <Wrapper>
        <CaptionedContainer caption="Final Brass Golem character poses">
            {Image.GOLEMS.map((src) => (
                <FluidImage key={src} src={src} alt="" />
            ))}
        </CaptionedContainer>
    </Wrapper>
)

export default Golems
