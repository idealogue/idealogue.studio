import { Caption } from '$shared/Caption'
import { Display } from '$shared/Display'
import { FluidImage } from '$shared/FluidImage'
import { MACHINE_IMAGES } from '$streamr/Image'
import { LG, MD, XL } from '$utils/css'
import React, { useEffect, useReducer } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import { Gallery } from '~/components/shared/Gallery'

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

    const [cache, nudgeMediaQuery] = useReducer(() => 1, 0)

    useEffect(() => {
        let cancelled = false

        // `useMediaQuery` needs a "nudge". This way we force a re-render when the SSR-ed page loads
        // in the browser for the first time.
        const timeoutId = setTimeout(() => {
            if (!cancelled) {
                nudgeMediaQuery()
            }
        }, 0)

        return () => {
            cancelled = true
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <IconGridRoot caption="A range of custom icons used across website, apps and social media">
            <Display xs="none" md>
                {[0, 5, 10].map((i) => (
                    <Viewport key={i}>
                        <Gallery
                            key={cache}
                            defaultSlide={0}
                            gutter={0}
                            currentWingSize={xl ? 1 : 0}
                        >
                            {MACHINE_IMAGES.slice(i, i + 5).map(
                                ([src, src2x]) => (
                                    <Cell key={src}>
                                        <ImageWrapper>
                                            <FluidImage
                                                src={src}
                                                srcSet={`${src2x} 2x`}
                                                alt=""
                                            />
                                        </ImageWrapper>
                                    </Cell>
                                )
                            )}
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
                                    <FluidImage
                                        src={src}
                                        srcSet={`${src2x} 2x`}
                                        alt=""
                                    />
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
