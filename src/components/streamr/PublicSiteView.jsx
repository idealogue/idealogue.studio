import React from 'react'
import styled from 'styled-components'
import Padded from '$shared/Padded'
import FluidImage from '$shared/FluidImage'
import Image from '$streamr/Image'

const ViewImage = styled(FluidImage)`
    border-radius: 8px;
`

const PublicSiteView = (props) => (
    <Padded {...props}>
        <ViewImage src={Image.PUBLIC_SITE_2X} alt="" fill />
    </Padded>
)

export default PublicSiteView
