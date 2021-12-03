import styled from 'styled-components'

const Video = styled.video`
    aspect-ratio: ${({ $aspect }) => $aspect};
    display: block;
    width: 100%;
`

export default Video
