import React from 'react'
import styled from 'styled-components'
import Poster from './assets/logo_poster.jpg'

export function CargoLogo() {
    return (
        <CargoLogoRoot loop playsInline muted autoPlay poster={Poster}>
            <source src="/videos/cargo/logo_animated.mp4" />
        </CargoLogoRoot>
    )
}

const CargoLogoRoot = styled.video`
    mix-blend-mode: lighten;
    width: clamp(14.5rem, 50vw, 29.75rem);
    height: auto;
    aspect-ratio: 1;
`
