import { ALL as Image } from '$golem/Image'
import { CaptionedContainer } from '$shared/CaptionedContainer'
import { Container } from '$shared/Container'
import { FluidImage } from '$shared/FluidImage'
import { MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

function UnstyledUiFirst(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <Container>
                <CaptionedContainer caption="The original Golem Alpha interface">
                    <Inner>
                        <FluidImage src={Image.UX_FIRST} alt="UI First" />
                    </Inner>
                </CaptionedContainer>
            </Container>
        </div>
    )
}

const Inner = styled.div`
    padding: 0 8px;

    @media (min-width: ${SM}px) {
        padding: 0 16px;
    }

    @media (min-width: ${MD}px) {
        padding: 0 32px;
    }
`

export const UiFirst = styled(UnstyledUiFirst)`
    img {
        margin: 0 auto;
    }
`
