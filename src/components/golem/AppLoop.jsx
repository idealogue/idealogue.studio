import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'
import CaptionedContainer from '$shared/CaptionedContainer'

const Wrapper = styled(Container)`
`

const AppLoop = (props) => (
    <Wrapper {...props}>
        <CaptionedContainer caption="A loop of the Golem app main views" />
    </Wrapper>
)

export default AppLoop
