import React from 'react'
import styled from 'styled-components'
import { useProject } from '$shared/Project'
import Container from '$shared/Container'
import HeroImage from '$shared/HeroImage'
import ScrollIndicator from '$shared/ScrollIndicator'

const UnstyledHero = ({ children, ...props }) => {
    const { name } = useProject()

    return (
        <div {...props}>
            <div
                css={`
                    align-items: center;
                    display: flex;
                    height: 100%;
                    text-align: center;
                `}
            >
                <Container>
                    <h1>
                        {name}
                    </h1>
                    {children}
                    <HeroImage />
                </Container>
            </div>
            <ScrollIndicator />
        </div>
    )
}

const Hero = styled(UnstyledHero)`
    height: 100%;
    position: relative;

    h1 {
        font-family: 'Publico Text';
        font-size: 140px;
        line-height: 1;
        margin: 0;
        padding-top: 0.5em;
    }

    && p {
        font-family: 'Lab Grotesque';
        font-size: 20px;
        line-height: 30px;
        margin: 48px 0;
    }

    img {
        margin: 0 auto;
    }
`

export default Hero
