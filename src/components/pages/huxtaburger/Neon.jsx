import React from 'react'
import styled from 'styled-components'
import FluidImage from '$shared/FluidImage'
import Container from '$shared/Container'
import Image from '$hux/Image'

const UnstyledNeon = (props) => (
    <div {...props}>
        <Container>
            <FluidImage src={Image.NEON} alt="" />
        </Container>
    </div>
)

const Neon = styled(UnstyledNeon)``

export default Neon
