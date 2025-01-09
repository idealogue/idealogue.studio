import * as React from 'react'
import styled, { css } from 'styled-components'

interface FluidImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    active?: boolean
    fill?: boolean
}

export function FluidImage({
    fill,
    alt = '',
    active,
    ...props
}: FluidImageProps) {
    return <FluidImageRoot {...props} $fill={fill} alt={alt} />
}

const FluidImageRoot = styled.img<{ $fill?: boolean }>`
    display: block;
    height: auto;
    max-width: 100%;

    ${({ $fill = false }) =>
        $fill &&
        css`
            width: 100%;
        `}
`
