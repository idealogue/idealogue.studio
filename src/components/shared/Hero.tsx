import HeroImage from '$shared/HeroImage'
import { LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import { Container } from '~/components/shared/Container'
import { ScrollIndicator } from '~/components/shared/ScrollIndicator'
import { useProjectManifest } from '~/utils/project'

const Inner = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    text-align: center;
`

type HeroProps = React.HTMLAttributes<HTMLDivElement>

const UnstyledHero = ({ children, ...props }: HeroProps) => {
    const { displayName } = useProjectManifest()

    return (
        <div {...props}>
            <Inner>
                <Container>
                    <h1>{displayName}</h1>
                    {children}
                    <HeroImage />
                </Container>
            </Inner>
            <ScrollIndicator />
        </div>
    )
}

const Hero = styled(UnstyledHero)`
    height: 100%;
    position: relative;

    h1 {
        font-family: 'Publico Text';
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -0.005em;
        line-height: 1;
        margin: 0;
        padding-top: 0.5em;
    }

    && p {
        font-family: 'Lab Grotesque';
        font-size: 20px;
        font-weight: 200;
        line-height: 1.5em;
        margin: 32px auto;
        max-width: 22.5em;
    }

    img {
        margin: 0 auto;
    }

    @media (min-width: ${SM}px) {
        h1 {
            font-size: 72px;
        }

        && p {
            font-size: 18px;
            margin: 40px auto;
            max-width: 22.5em;
        }
    }

    @media (min-width: ${MD}px) {
        h1 {
            font-size: 105px;
        }

        && p {
            font-size: 18px;
            margin: 48px auto;
            max-width: 22em;
        }
    }

    @media (min-width: ${LG}px) {
        h1 {
            font-size: 140px;
        }

        && p {
            font-size: 20px;
        }
    }
`

export default Hero
