import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$cobalt/Image'

const Wrapper = styled.div`
    max-width: 180px;
    margin: 0 auto;
`

const LogoImage = (props) => (
    <Wrapper {...props}>
        <FluidImage src={Image.LOGO} alt="Cobalt logo" />
    </Wrapper>
)

export default LogoImage
