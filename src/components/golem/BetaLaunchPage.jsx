import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import BrowserFrame from '$shared/BrowserFrame'

const UnstyledBetaLaunchPage = (props) => (
    <div {...props}>
        <Container>
            <BrowserFrame>
                <FluidImage src={Image.BETA_LAUNCH} alt="" />
            </BrowserFrame>
        </Container>
    </div>
)

const BetaLaunchPage = styled(UnstyledBetaLaunchPage)``

export default BetaLaunchPage
