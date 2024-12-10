import * as React from 'react'
import styled, { css } from 'styled-components'

const UnstyledFluidImage = ({ fill, alt, active, ...props }) => (
    <img {...props} alt={alt} />
)

const FluidImage = styled(UnstyledFluidImage)`
    display: block;
    height: auto;
    max-width: 100%;

    ${({ fill }) =>
        !!fill &&
        css`
            width: 100%;
        `}
`

export default FluidImage
