import React from 'react'
import styled, { css } from 'styled-components'
import { Display } from '~/components/shared/Display'
import { FluidImage } from '~/components/shared/FluidImage'
import { Gallery } from '~/components/shared/Gallery'
import { TABLET } from '~/utils/css'
import Icon0 from './assets/icon0.png'
import Icon02x from './assets/icon0@2x.png'
import Icon1 from './assets/icon1.png'
import Icon12x from './assets/icon1@2x.png'
import Icon2 from './assets/icon2.png'
import Icon22x from './assets/icon2@2x.png'
import Icon3 from './assets/icon3.png'
import Icon32x from './assets/icon3@2x.png'
import Icon4 from './assets/icon4.png'
import Icon42x from './assets/icon4@2x.png'
import Icon5 from './assets/icon5.png'
import Icon52x from './assets/icon5@2x.png'
import Icon6 from './assets/icon6.png'
import Icon62x from './assets/icon6@2x.png'
import Icon7 from './assets/icon7.png'
import Icon72x from './assets/icon7@2x.png'
import Icon8 from './assets/icon8.png'
import Icon82x from './assets/icon8@2x.png'

export function Icons() {
    return (
        <>
            <Display xs="none" md>
                <IconsRoot>
                    <img src={Icon0} srcSet={`${Icon02x} 2x`} width="390" height="390" alt="Keys" />
                    <img
                        src={Icon1}
                        srcSet={`${Icon12x} 2x`}
                        width="390"
                        height="390"
                        alt="A big tick sign"
                    />
                    <img
                        src={Icon2}
                        srcSet={`${Icon22x} 2x`}
                        width="390"
                        height="390"
                        alt="A big info sign"
                    />
                    <img
                        src={Icon3}
                        srcSet={`${Icon32x} 2x`}
                        width="390"
                        height="390"
                        alt="3 containers"
                    />
                    <img
                        src={Icon4}
                        srcSet={`${Icon42x} 2x`}
                        width="390"
                        height="390"
                        alt="Screws"
                    />
                    <img
                        src={Icon5}
                        srcSet={`${Icon52x} 2x`}
                        width="390"
                        height="390"
                        alt="A laptop"
                    />
                    <img
                        src={Icon6}
                        srcSet={`${Icon62x} 2x`}
                        width="390"
                        height="390"
                        alt="A full container"
                    />
                    <img
                        src={Icon7}
                        srcSet={`${Icon72x} 2x`}
                        width="390"
                        height="390"
                        alt="A magnifier"
                    />
                    <img
                        src={Icon8}
                        srcSet={`${Icon82x} 2x`}
                        width="390"
                        height="390"
                        alt="A container on grass"
                    />
                </IconsRoot>
            </Display>
            <Display md="none">
                <IconsRoot>
                    <Gallery defaultSlide={0} gutter={0} currentWingSize={0}>
                        <Cell>
                            <FluidImage
                                src={Icon0}
                                srcSet={`${Icon02x} 2x`}
                                width="390"
                                height="390"
                                alt="Keys"
                            />
                        </Cell>
                        <Cell>
                            <FluidImage
                                src={Icon1}
                                srcSet={`${Icon12x} 2x`}
                                width="390"
                                height="390"
                                alt="A big tick sign"
                            />
                        </Cell>
                        <Cell>
                            <FluidImage
                                src={Icon2}
                                srcSet={`${Icon22x} 2x`}
                                width="390"
                                height="390"
                                alt="A big info sign"
                            />
                        </Cell>
                        <Cell>
                            <FluidImage
                                src={Icon3}
                                srcSet={`${Icon32x} 2x`}
                                width="390"
                                height="390"
                                alt="3 containers"
                            />
                        </Cell>
                        <Cell>
                            <FluidImage
                                src={Icon4}
                                srcSet={`${Icon42x} 2x`}
                                width="390"
                                height="390"
                                alt="Screws"
                            />
                        </Cell>
                        <Cell>
                            <FluidImage
                                src={Icon5}
                                srcSet={`${Icon52x} 2x`}
                                width="390"
                                height="390"
                                alt="A laptop"
                            />
                        </Cell>
                        <Cell>
                            <FluidImage
                                src={Icon6}
                                srcSet={`${Icon62x} 2x`}
                                width="390"
                                height="390"
                                alt="A full container"
                            />
                        </Cell>
                        <Cell>
                            <FluidImage
                                src={Icon7}
                                srcSet={`${Icon72x} 2x`}
                                width="390"
                                height="390"
                                alt="A magnifier"
                            />
                        </Cell>
                        <Cell>
                            <FluidImage
                                src={Icon8}
                                srcSet={`${Icon82x} 2x`}
                                width="390"
                                height="390"
                                alt="A container on grass"
                            />
                        </Cell>
                    </Gallery>
                </IconsRoot>
            </Display>
        </>
    )
}

/**
 * $active is given to Cell by Gallery.
 */
const Cell = styled.div<{ $active?: boolean }>`
    margin: 0 auto;
    width: var(--IconsRoot_Width);
    transition: 200ms opacity;

    ${({ $active = false }) =>
        !$active &&
        css`
            opacity: 0.3;
        `}
`

const IconsRoot = styled.div`
    --IconsRoot_Width: clamp(100px, 55vw, 390px);

    margin: 0 auto;
    max-width: 100%;
    width: var(--IconsRoot_Width);

    img {
        width: 100%;
        height: auto;
    }

    @media ${TABLET} {
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
        width: 81.25rem;
        box-sizing: border-box;
        padding: 0 4rem;
    }
`
