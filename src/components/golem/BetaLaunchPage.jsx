import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import BrowserFrame from '$shared/BrowserFrame'

const Wrapper = styled(Container)`
`

const BetaLaunchPage = (props) => (
    <Wrapper {...props}>
        <BrowserFrame>
            <FluidImage src={Image.BETA_LAUNCH} alt="" />
        </BrowserFrame>
    </Wrapper>
)

export default BetaLaunchPage
