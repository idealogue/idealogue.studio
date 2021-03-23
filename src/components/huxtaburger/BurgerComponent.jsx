import React from 'react'
import styled, { css } from 'styled-components'
import { SM } from '$utils/css'

export const Parent = styled.div``

const UnstyledBurgerComponent = ({ shadow, src, at, animateBy, dy, ...props }) => {
    const Tag = styled.div`
        @media (max-width: ${SM - 1}px) {
            ${Parent}.open & {
                transform: translateY(${Math.floor(animateBy * 100)}%);
            }
        }

        @media (min-width: ${SM}px) {
            ${Parent}:hover & {
                transform: translateY(${Math.floor(animateBy * 100)}%);
            }
        }

        ${!!shadow && css`
            left: 20%;
            opacity: 0.25;
            width: 100%;
            transition-duration: 200ms;

            @media (max-width: ${SM - 1}px) {
                ${Parent}.open & {
                    opacity: 0;
                }
            }

            @media (min-width: ${SM}px) {
                ${Parent}:hover & {
                    opacity: 0;
                }
            }
        `}
    `

    return (
        <Tag {...props}>
            <img src={src} alt="" />
        </Tag>
    )
}
const BurgerComponent = styled(UnstyledBurgerComponent)`
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
`

export default BurgerComponent
