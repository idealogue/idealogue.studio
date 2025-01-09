import styled from 'styled-components'

export const Video = styled.video<{ $aspect?: string }>`
    aspect-ratio: ${({ $aspect }) => $aspect};
    display: block;
    width: 100%;
`
