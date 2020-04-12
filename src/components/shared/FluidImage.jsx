import styled, { css } from 'styled-components'

const FluidImage = styled.img`
    display: block;
    height: auto;
    max-width: 100%;

    ${({ fill }) => !!fill && css`
        width: 100%;
    `}
`

export default FluidImage
