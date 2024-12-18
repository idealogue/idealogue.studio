import Image from '$hux/Image'
import Container from '$shared/Container'
import FluidImage from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'

const UnstyledNeon = (props) => (
    <div {...props}>
        <Container>
            <FluidImage src={Image.NEON} />
        </Container>
    </div>
)

const Neon = styled(UnstyledNeon)``

export default Neon
