import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import BrowserFrame from '$shared/BrowserFrame'

const Wrapper = styled(Container)``

const RedditPage = (props) => (
    <Wrapper {...props}>
        <CaptionedContainer caption="A simple Reddit theme for the project">
            <BrowserFrame>
                <FluidImage src={Image.REDDIT_PAGE} alt="" />
            </BrowserFrame>
        </CaptionedContainer>
    </Wrapper>
)

export default RedditPage
