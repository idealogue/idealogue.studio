import React from 'react'
import styled from 'styled-components'
import { useProject } from '$shared/Project'
import Container from '$shared/Container'

const UnstyledHero = ({ className, children }) => {
    const { name } = useProject()

    return (
        <div className={className}>
            <Container>
                <h1>
                    {name}
                </h1>
                {children}
            </Container>
        </div>
    )
}

const Hero = styled(UnstyledHero)`
    text-align: center;

    h1 {
        font-family: 'Publico Text';
        font-size: 140px;
        margin: 0 0 72px;
        line-height: 1;
    }

    p {
        font-family: 'Lab Grotesque';
        font-size: 20px;
        line-height: 30px;
        margin: 0;
    }
`

export default Hero
