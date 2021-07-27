import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import FluidImage from '$shared/FluidImage'

const UnstyledModules = (props) => (
    <div {...props}>
        <div>
            <FluidImage src={Image.UI_0} alt="" />
        </div>
        <div>
            <FluidImage src={Image.UI_1} alt="" />
        </div>
        <div>
            <FluidImage src={Image.UI_2} alt="" />
        </div>
    </div>
)

const Modules = styled(UnstyledModules)`
    display: flex;

    div + div {
        margin-left: 40px;
    }
`

export default Modules
