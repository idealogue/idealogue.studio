import React from 'react'
import styled from 'styled-components'
import { useProject } from '$shared/Project'
import Container from '$shared/Container'
import HeroImage from '$shared/HeroImage'
import ScrollIndicator from '$shared/ScrollIndicator'
import { SM, MD, LG, XL } from '$utils/css'

const Inner = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    text-align: center;
`

const UnstyledHero = ({ children, ...props }) => {
    const { name } = useProject()

    return (
        <div {...props}>
            <Inner>
                <Container>
                    <h1>
                        {name}
                    </h1>
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
        letter-spacing: -0.005em;
        line-height: 1;
        margin: 0;
        padding-top: 0.5em;
    }

    && p {
        font-family: 'Lab Grotesque';
        font-size: 20px;
        font-weight: 200;
        line-height: 30px;
        margin: 48px auto;
    }

    img {
        margin: 0 auto;
    }

    @media (min-width: ${MD}px) {
        h1 {
            font-size: 88px;
        }
    }

    @media (min-width: ${LG}px) {
        h1 {
            font-size: 115px;
        }
    }

    @media (min-width: ${XL}px) {
        h1 {
            font-size: 140px;
        }

        && p {
            max-width: 24em;
        }
    }
`

export default Hero
