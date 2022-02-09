import React, { useReducer, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { MACHINE_IMAGES } from '$streamr/Image'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import Gallery from '$shared/Gallery'
import Display from '$shared/Display'
import Caption from '$shared/Caption'
import { MD, LG, XL } from '$utils/css'

const Cell = styled.div`
    margin: 0 auto;
    transition: 200ms opacity;
    width: 192px;

    ${({ active }) => !active && css`
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

const UnstyledIconGrid = (props) => {
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
        <CaptionedContainer
            {...props}
            caption="A range of custom icons used across website, apps and social media"
        >
            <Display xs="none" md {...props}>
                {[0, 5, 10].map((i) => (
                    <Viewport key={i}>
                        <Gallery key={cache} defaultSlide={0} gutter={0} currentWingSize={xl ? 1 : 0}>
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
            <Display md="none" {...props}>
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
        </CaptionedContainer>
    )
}

const IconGrid = styled(UnstyledIconGrid)`
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

export default IconGrid
