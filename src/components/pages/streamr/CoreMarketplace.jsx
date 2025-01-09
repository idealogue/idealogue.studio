import React, { useReducer, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useInViewport } from 'react-in-viewport'
import { MARKETPLACE_LAYERS } from './Image'
import { SM, MD as TABLET, XL } from '$utils/css'

const BottomLayer = styled.img`
    left: 0;
    position: absolute;
    top: 0;
    width: 33.3%;
`

const L0 = styled(BottomLayer)``

const L1 = styled(BottomLayer)``

const L2 = styled.img`
    position: relative;
    width: 100%;
`

const Root = styled.div`
    &,
    ${L1}, ${L2} {
        transition: 2s transform cubic-bezier(0, 1, 0, 1);
    }

    ${({ $open }) =>
        !!$open &&
        css`
            transform: translateX(-33.5%);

            ${L1} {
                transform: translateX(100%);
            }

            ${L2} {
                transform: translateX(66.6%);
            }
        `}
`

const UnstyledCoreMarketplace = ({ className }) => {
    const [[l0, l02x], [l1, l12x], [l2, l22x]] = MARKETPLACE_LAYERS

    const rootRef = useRef()

    const { inViewport } = useInViewport(rootRef, undefined, undefined, {})

    const [open, touchOpen] = useReducer(() => true, false)

    useEffect(() => {
        if (inViewport) {
            touchOpen()
        }
    }, [inViewport])

    return (
        <Root className={className} ref={rootRef} $open={open}>
            <L0 src={l0} srcSet={`${l02x} 2x`} alt="" />
            <L1 src={l1} srcSet={`${l12x} 2x`} alt="" />
            <L2 src={l2} srcSet={`${l22x} 2x`} alt="" />
        </Root>
    )
}

const CoreMarketplace = styled(UnstyledCoreMarketplace)`
    aspect-ratio: 666 / 460;
    margin: 0 auto;
    position: relative;
    max-width: 60%;
    width: 666px;

    img {
        display: block;
    }

    @media (min-width: ${SM}px) {
        max-width: 62%;
    }

    @media (min-width: ${TABLET}px) {
        max-width: 62%;
    }

    @media (min-width: ${XL}px) {
        max-width: none;
    }
`

export default CoreMarketplace
