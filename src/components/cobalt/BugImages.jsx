import React from 'react'
import styled from 'styled-components'
import Image from '$cobalt/Image'
import FluidImage from '$shared/FluidImage'

const Wrapper = styled.div`
`

const BugImages = (props) => (
    <Wrapper {...props}>
        {Image.BUGS.map((src) => (
            <FluidImage key={src} src={src} alt="" />
        ))}
    </Wrapper>
)

export default BugImages
