import { ALL as Image } from '$golem/Image'
import { BrowserFrame } from '$shared/BrowserFrame'
import { CaptionedContainer } from '$shared/CaptionedContainer'
import { Container } from '$shared/Container'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'

export function RedditPage(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Wrapper {...props}>
            <CaptionedContainer caption="A simple Reddit theme for the project">
                <BrowserFrame>
                    <FluidImage src={Image.REDDIT_PAGE} />
                </BrowserFrame>
            </CaptionedContainer>
        </Wrapper>
    )
}

const Wrapper = styled(Container)``
