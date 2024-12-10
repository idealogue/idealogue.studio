import Image from '$golem/Image'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'

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
