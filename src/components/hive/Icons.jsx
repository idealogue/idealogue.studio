import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Image from '$hive/Image'

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 628px;
`

const Icons = (props) => (
    <Wrapper {...props}>
        <FluidImage src={Image.ICONS} alt="Icons" />
    </Wrapper>
)

export default Icons
