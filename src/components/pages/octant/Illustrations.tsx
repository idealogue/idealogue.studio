import * as React from 'react'
import styled from 'styled-components'
import HeroCrop from './assets/illustration_hero_crop.png'
import HeroCrop2x from './assets/illustration_hero_crop@2x.png'
import WindowCloth from './assets/illustration_window_cloth.png'
import WindowCloth2x from './assets/illustration_window_cloth@2x.png'
import WindowWithBird from './assets/illustration_window_with_bird.png'
import WindowWithBird2x from './assets/illustration_window_with_bird@2x.png'
import WindowWithDog from './assets/illustration_window_with_dog.png'
import WindowWithDog2x from './assets/illustration_window_with_dog@2x.png'

export function Illustrations() {
    return (
        <IllustrationsRoot>
            <HeroImage src={HeroCrop} srcSet={`${HeroCrop2x} 2x`} alt="" />
            <Windows>
                <img src={WindowWithDog} srcSet={`${WindowWithDog2x} 2x`} alt="" />
                <img src={WindowWithBird} srcSet={`${WindowWithBird2x} 2x`} alt="" />
                <img src={WindowCloth} srcSet={`${WindowCloth2x} 2x`} alt="" />
            </Windows>
        </IllustrationsRoot>
    )
}

const HeroImage = styled.img`
    display: block;
    margin: 0 auto;
    width: 1372px;
`

const Windows = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 1440px;
    justify-content: space-around;
    margin: 116px auto 0;
`

const IllustrationsRoot = styled.div``
