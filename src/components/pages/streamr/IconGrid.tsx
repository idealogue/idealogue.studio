import { Caption } from '$shared/Caption'
import { Display } from '$shared/Display'
import { FluidImage } from '$shared/FluidImage'
import { LG, MD, XL } from '$utils/css'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'
import { MACHINE_IMAGES } from '~/components/pages/streamr/Image'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import { Gallery } from '~/components/shared/Gallery'
import { useIsBrowser } from '~/utils/ssr'

/**
 * $active is given to Cell by Gallery.
 */
const Cell = styled.div<{ $active?: boolean }>`
    margin: 0 auto;
    transition: 200ms opacity;
    width: 192px;

    ${({ $active = false }) =>
        !$active &&
        css`
            opacity: 0.5;
        `}

    @media (min-width: ${MD}px) {
        width: 264px;
    }
`

const Viewport = styled.div`
    margin: 0 auto;
    width: 224px;

    & + & {
        margin-top: 112px;
    }

    @media (min-width: ${MD}px) {
        width: 368px;
    }

    @media (min-width: ${LG}px) {
        & + & {
            margin-top: 176px;
        }
    }
`

const ImageWrapper = styled.div`
    height: 150px;
    left: -88px;
    position: relative;
    top: -83px;
    width: 368px;

    @media (min-width: ${MD}px) {
        height: 188px;
        left: -98px;
        top: -104px;
        width: 460px;
    }
`

export function IconGrid() {
    const xl = useMediaQuery({
        query: `(min-width: ${XL}px)`,
    })

    if (!useIsBrowser()) {
        return null
    }

    return (
        <IconGridRoot caption="A range of custom icons used across website, apps and social media">
            <Display xs="none" md>
                {[0, 5, 10].map((i) => (
                    <Viewport key={i}>
                        <Gallery defaultSlide={0} gutter={0} currentWingSize={xl ? 1 : 0}>
                            {MACHINE_IMAGES.slice(i, i + 5).map(([src, src2x]) => (
                                <Cell key={src}>
                                    <ImageWrapper>
                                        <FluidImage src={src} srcSet={`${src2x} 2x`} alt="" />
                                    </ImageWrapper>
                                </Cell>
                            ))}
                        </Gallery>
                    </Viewport>
                ))}
            </Display>
            <Display md="none">
                <Viewport>
                    <Gallery defaultSlide={0} gutter={0} currentWingSize={0}>
                        {MACHINE_IMAGES.map(([src, src2x]) => (
                            <Cell key={src}>
                                <ImageWrapper>
                                    <FluidImage src={src} srcSet={`${src2x} 2x`} alt="" />
                                </ImageWrapper>
                            </Cell>
                        ))}
                    </Gallery>
                </Viewport>
            </Display>
        </IconGridRoot>
    )
}

const IconGridRoot = styled(CaptionedContainer)`
    margin: 0 auto;
    max-width: 100%;
    padding: 40px 0;
    width: 1440px;

    ${Caption} {
        display: none;
        margin-top: 112px;
    }

    @media (min-width: ${MD}px) {
        padding: 0;

        ${Caption} {
            display: block;
        }
    }
`
