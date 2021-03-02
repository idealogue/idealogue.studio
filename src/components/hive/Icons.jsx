import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$hive/Image'

const UnstyledIcons = (props) => (
    <div {...props}>
        <FluidImage src={Image.ICONS} alt="Icons" />
    </div>
)

const Icons = styled(UnstyledIcons)`
    margin: 0 auto;
    max-width: 80%;
    width: 628px;
`

export default Icons
