import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'
import { ALL as Image } from '~/components/pages/cobalt/Image'

export function LogoImage() {
    return (
        <LogoImageRoot>
            <FluidImage src={Image.LOGO} alt="Cobalt logo" />
        </LogoImageRoot>
    )
}

const LogoImageRoot = styled.div`
    margin: 0 auto;
    max-width: 70%;
    width: 180px;
`
