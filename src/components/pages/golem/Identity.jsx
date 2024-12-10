import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import CaptionedContainer from '$shared/CaptionedContainer'

const Wrapper = styled.div``

const Identity = () => (
    <Wrapper>
        <CaptionedContainer
            caption={
                <>
                    Exploration and development for the Brass
                    Golem&nbsp;character
                </>
            }
        >
            <FluidImage src={Image.IDENTITY} alt="" />
        </CaptionedContainer>
    </Wrapper>
)

export default Identity
