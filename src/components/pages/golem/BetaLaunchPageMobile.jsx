import Image from '$golem/Image'
import Container from '$shared/Container'
import FluidImage from '$shared/FluidImage'
import PhoneFrame from '$shared/PhoneFrame'
import XofY from '$shared/XofY'
import { SM } from '$utils/css'
import React, { useReducer } from 'react'
import styled from 'styled-components'

const Inner = styled.div`
    height: 332px;
    overflow: hidden;

    img {
        display: block;
        transform: translateY(${({ slide }) => -slide * 25}%);
        transition: 400ms transform ease-in-out;
    }

    @media (min-width: ${SM}px) {
        height: 531px;
    }
`

const UnstyledBetaLaunchPageMobile = (props) => {
    const [slide, next] = useReducer((x) => (x + 1) % 4, 0)

    return (
        <div {...props}>
            <Container>
                <PhoneFrame>
                    <Inner slide={slide} onClick={next}>
                        <FluidImage src={Image.BETA_LAUNCH_MOBILE} />
                    </Inner>
                </PhoneFrame>
                <XofY x={slide + 1} y={4} onClick={next} />
            </Container>
        </div>
    )
}

const BetaLaunchPageMobile = styled(UnstyledBetaLaunchPageMobile)`
    ${PhoneFrame} {
        margin: 0 auto;
        max-width: none;
    }

    ${XofY} {
        margin: 88px auto 0;
        width: 56px;
    }
`

export default BetaLaunchPageMobile
