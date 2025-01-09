import { ALL as Image } from '$golem/Image'
import { Container } from '$shared/Container'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'
import { BrowserFrame } from '~/components/shared/BrowserFrame'

interface BetaLaunchPageProps {
    className?: string
}

export function BetaLaunchPage({ className }: BetaLaunchPageProps) {
    return (
        <BetaLaunchPageRoot className={className}>
            <Container>
                <BrowserFrame>
                    <FluidImage src={Image.BETA_LAUNCH} />
                </BrowserFrame>
            </Container>
        </BetaLaunchPageRoot>
    )
}

const BetaLaunchPageRoot = styled.div``
