import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$golem/Image'
import Container from '$shared/Container'
import CaptionedContainer from '$shared/CaptionedContainer'
import { SM, MD } from '$utils/css'

const Inner = styled.div`
    padding: 0 8px;

    @media (min-width: ${SM}px) {
        padding: 0 16px;
    }

    @media (min-width: ${MD}px) {
        padding: 0 32px;
    }
`

const UnstyledUiFirst = ({ className }) => (
    <div className={className}>
        <Container>
            <CaptionedContainer caption="The original Golem Alpha interface">
                <Inner>
                    <FluidImage src={Image.UX_FIRST} alt="UI First" />
                </Inner>
            </CaptionedContainer>
        </Container>
    </div>
)

const UiFirst = styled(UnstyledUiFirst)`
    img {
        margin: 0 auto;
    }
`

export default UiFirst
