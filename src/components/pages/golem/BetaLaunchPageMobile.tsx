import { FluidImage } from '$shared/FluidImage'
import { PhoneFrame, PhoneFrameRoot } from '$shared/PhoneFrame'
import { XofY, XofYRoot } from '$shared/XofY'
import { SM } from '$utils/css'
import React, { useReducer } from 'react'
import styled from 'styled-components'
import { ALL as Image } from '~/components/pages/golem/Image'
import { Container } from '~/components/shared/Container'

interface BetaLaunchPageMobileProps {
    className?: string
}

export function BetaLaunchPageMobile({ className }: BetaLaunchPageMobileProps) {
    const [slide, next] = useReducer((x) => (x + 1) % 4, 0)

    return (
        <BetaLaunchPageMobileRoot className={className}>
            <Container>
                <PhoneFrame>
                    <Inner $slide={slide} onClick={next}>
                        <FluidImage src={Image.BETA_LAUNCH_MOBILE} />
                    </Inner>
                </PhoneFrame>
                <XofY x={slide + 1} y={4} onClick={next} />
            </Container>
        </BetaLaunchPageMobileRoot>
    )
}

const BetaLaunchPageMobileRoot = styled.div`
    ${PhoneFrameRoot} {
        margin: 0 auto;
        max-width: none;
    }

    ${XofYRoot} {
        margin: 88px auto 0;
        width: 56px;
    }
`

const Inner = styled.div<{ $slide: number }>`
    height: 332px;
    overflow: hidden;

    img {
        display: block;
        transform: translateY(${({ $slide }) => -$slide * 25}%);
        transition: 400ms transform ease-in-out;
    }

    @media (min-width: ${SM}px) {
        height: 531px;
    }
`
