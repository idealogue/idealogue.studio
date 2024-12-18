import Image from '$golem/Image'
import BrowserFrame from '$shared/BrowserFrame'
import Container from '$shared/Container'
import FluidImage from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'

const UnstyledBetaLaunchPage = (props) => (
    <div {...props}>
        <Container>
            <BrowserFrame>
                <FluidImage src={Image.BETA_LAUNCH} />
            </BrowserFrame>
        </Container>
    </div>
)

const BetaLaunchPage = styled(UnstyledBetaLaunchPage)``

export default BetaLaunchPage
