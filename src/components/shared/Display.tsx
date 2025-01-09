import { LG, MD, SM, XL } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'

type DisplayPropValue = true | 'inline' | 'inline-block' | 'none' | 'flex'

function value(x: DisplayPropValue) {
    return x === true ? 'block' : x
}

interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    xs?: DisplayPropValue
    sm?: DisplayPropValue
    md?: DisplayPropValue
    lg?: DisplayPropValue
    xl?: DisplayPropValue
}

export function Display({ as, xs, sm, md, lg, xl, ...props }: DisplayProps) {
    return (
        <DisplayRoot
            {...props}
            as={as}
            $xs={xs}
            $sm={sm}
            $md={md}
            $lg={lg}
            $xl={xl}
        />
    )
}

const DisplayRoot = styled.div<{
    $xs?: DisplayPropValue
    $sm?: DisplayPropValue
    $md?: DisplayPropValue
    $lg?: DisplayPropValue
    $xl?: DisplayPropValue
}>`
    ${({ $xs }) =>
        $xs != null &&
        css`
            display: ${value($xs)} !important;
        `}

    ${({ $sm }) =>
        $sm != null &&
        css`
            @media (min-width: ${SM}px) {
                display: ${value($sm)} !important;
            }
        `}

    ${({ $md }) =>
        $md != null &&
        css`
            @media (min-width: ${MD}px) {
                display: ${value($md)} !important;
            }
        `}

    ${({ $lg }) =>
        $lg != null &&
        css`
            @media (min-width: ${LG}px) {
                display: ${value($lg)} !important;
            }
        `}

    ${({ $xl }) =>
        $xl != null &&
        css`
            @media (min-width: ${XL}px) {
                display: ${value($xl)} !important;
            }
        `}
`
