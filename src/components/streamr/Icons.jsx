import React from 'react'
import styled from 'sc'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'
import Padded from '$shared/Padded'
import Image from '$streamr/Image'

const IconImage = styled(FluidImage)`
    border-radius: 4px;
`

const Icons = (props) => (
    <CaptionedContainer
        {...props}
        caption="Stuart’s icon loops for Streamr’s Mini-Explainer social media series"
    >
        <Padded>
            <IconImage src={Image.ICONS_2X} alt="Icons" fill />
        </Padded>
    </CaptionedContainer>
)

export default Icons
