import { SM } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'

interface BurgerComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    animateBy: number
    at: number
    cid: string
    dy: number
    shadow?: boolean
    src: string
}

export function BurgerComponent({
    animateBy,
    at,
    cid,
    className,
    dy,
    shadow = false,
    src,
    ...props
}: BurgerComponentProps) {
    return (
        <BurgerComponentRoot
            {...props}
            $animateBy={animateBy}
            $at={at}
            $cid={cid}
            $dy={dy}
            $shadow={shadow}
            className={`${className || ''} ${cid}`.trim()}
        >
            <img src={src} alt="" />
        </BurgerComponentRoot>
    )
}

export const Parent = styled.div``

const BurgerComponentRoot = styled.div<{
    $animateBy: number
    $at: number
    $cid: string
    $dy: number
    $shadow: boolean
}>`
    position: absolute;
    top: ${({ $at, $dy }) => Math.floor(($at + $dy) * 100)}%;
    transform: translateY(0);
    transition: 400ms;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55),
        ease-in-out;

    img {
        height: 100%;
        width: 100%;
    }

    ${({ $shadow, $cid, $animateBy }) => css`
        @media (max-width: ${SM - 1}px) {
            ${Parent}.open &.${$cid} {
                transform: translateY(${Math.floor($animateBy * 100)}%);
            }
        }

        @media (min-width: ${SM}px) {
            ${Parent}:hover &.${$cid} {
                transform: translateY(${Math.floor($animateBy * 100)}%);
            }
        }

        ${$shadow &&
        css`
            left: 20%;
            opacity: 0.25;
            transition-duration: 200ms;
            width: 100%;

            @media (max-width: ${SM - 1}px) {
                ${Parent}.open &.${$cid} {
                    opacity: 0;
                }
            }

            @media (min-width: ${SM}px) {
                ${Parent}:hover &.${$cid} {
                    opacity: 0;
                }
            }
        `}
    `}
`
