import React from 'react'
import styled, { css } from 'styled-components'
import { SM } from '$utils/css'

export const Parent = styled.div``

const UnstyledBurgerComponent = ({ shadow, src, at, animateBy, dy, className }) => (
    <div className={className}>
        <img src={src} alt="" />
    </div>
)

const BurgerComponentAttrs = ({ className, cid }) => ({
    className: `${className || ''} ${cid}`.trim(),
})

const BurgerComponent = styled(UnstyledBurgerComponent).attrs(BurgerComponentAttrs)`
    position: absolute;
    top: ${({ at, dy }) => Math.floor((at + dy) * 100)}%;
    transform: translateY(0);
    transition: 400ms;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550), ease-in-out;

    img {
        height: 100%;
        width: 100%;
    }

    ${({ shadow, cid, animateBy }) => css`
        @media (max-width: ${SM - 1}px) {
            ${Parent}.open &.${cid} {
                transform: translateY(${Math.floor(animateBy * 100)}%);
            }
        }

        @media (min-width: ${SM}px) {
            ${Parent}:hover &.${cid} {
                transform: translateY(${Math.floor(animateBy * 100)}%);
            }
        }

        ${!!shadow && css`
            left: 20%;
            opacity: 0.25;
            transition-duration: 200ms;
            width: 100%;

            @media (max-width: ${SM - 1}px) {
                ${Parent}.open &.${cid} {
                    opacity: 0;
                }
            }

            @media (min-width: ${SM}px) {
                ${Parent}:hover &.${cid} {
                    opacity: 0;
                }
            }
        `}
    `}
`

export default BurgerComponent
