import * as React from 'react'
import styled, { css } from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import { SM, TABLET } from '~/utils/css'
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
            <Clips>
                <div>
                    <ClipList $first>
                        <Clip
                            css={css`
                                width: 967px;
                            `}
                        >
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_thinking_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_logo_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_map_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                    </ClipList>
                </div>
                <div>
                    <ClipList>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_flight_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_maths_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_whale_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                    </ClipList>
                </div>
            </Clips>
            <HeroImageWrap>
                <HeroImage src={HeroCrop} srcSet={`${HeroCrop2x} 2x`} alt="" />
            </HeroImageWrap>
            <Windows>
                <img src={WindowWithDog} srcSet={`${WindowWithDog2x} 2x`} alt="" />
                <img src={WindowWithBird} srcSet={`${WindowWithBird2x} 2x`} alt="" />
                <img src={WindowCloth} srcSet={`${WindowCloth2x} 2x`} alt="" />
            </Windows>
        </IllustrationsRoot>
    )
}

const Clip = styled.div`
    background-color: #ffffff;
    border-radius: 1rem;
    position: relative;
    aspect-ratio: 1200 / 675;
    width: 600px;
`

const ClipList = styled.div<{ $first?: boolean }>`
    display: grid;
    gap: 32px;
    width: 0;
    overflow: visible;

    ${({ $first = false }) =>
        $first &&
        css`
            ${Clip} {
                transform: translateX(-100%);
            }
        `}
`

const Clips = styled.div`
    display: grid;
    grid-template-columns: 0px 0px;
    gap: 32px;
    width: 32px;
    margin: 0 auto 116px;

    video {
        border-radius: 16px;
    }
`

const HeroImageWrap = styled.div`
    width: 1372px;
    max-width: 100%;
    margin: 0 auto;
`

const HeroImage = styled.img`
    display: block;
    width: 1372px;
    max-width: 225vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

const Windows = styled.div`
    display: grid;
    grid-template-columns: auto;
    gap: 8rem;
    gap: clamp(3rem, 20vw, 8rem);
    justify-content: space-around;
    margin: 8rem auto 6rem;
    max-width: 100%;
    padding: 0;
    box-sizing: border-box;

    img {
        max-width: 100%;
    }

    @media (min-width: ${SM}px) {
        padding: 0 4rem;
        width: 79rem;
    }

    @media ${TABLET} {
        gap: 0;
        grid-template-columns: auto auto auto;
    }

    @media (min-width: 87rem) {
        padding: 0 8rem;
        width: 116rem;
    }
`

const IllustrationsRoot = styled.div``
