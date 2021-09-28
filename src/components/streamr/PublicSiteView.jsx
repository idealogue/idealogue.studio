import React from 'react'
import styled from 'styled-components'
import PrestyledPadded from '$shared/Padded'
import FluidImage from '$shared/FluidImage'
import Image from '$streamr/Image'
import { LG } from '$utils/css'

const ViewImage = styled(FluidImage)`
    border-radius: 8px;
`

const Padded = styled(PrestyledPadded)`
    @media (max-width: ${LG - 1}px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`

const PublicSiteView = (props) => (
    <Padded {...props}>
        <ViewImage src={Image.PUBLIC_SITE_2X} alt="" fill />
    </Padded>
)

export default PublicSiteView
