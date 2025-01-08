import { Display } from '$shared/Display'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'
import Image from './Image'

const UnstyledModules = (props) => (
    <div {...props}>
        <div>
            <FluidImage src={Image.UI_0} />
        </div>
        <div>
            <FluidImage src={Image.UI_1} />
        </div>
        <Display xs="none" sm="block">
            <FluidImage src={Image.UI_2} />
        </Display>
    </div>
)

const Modules = styled(UnstyledModules)`
    display: flex;

    div + div {
        margin-left: 5%;
    }
`

export default Modules
