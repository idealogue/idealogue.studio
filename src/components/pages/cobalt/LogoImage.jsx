import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$cobalt/Image'

const UnstyledLogoImage = (props) => (
    <div {...props}>
        <FluidImage src={Image.LOGO} alt="Cobalt logo" />
    </div>
)

const LogoImage = styled(UnstyledLogoImage)`
    margin: 0 auto;
    max-width: 70%;
    width: 180px;
`

export default LogoImage
