import React, { Fragment } from 'react'
import styled from 'sc'

const UnstyledProductLaunch360 = (props) => (
    <div {...props}>
        Launch 360
    </div>
)

const ProductLaunch360 = styled(UnstyledProductLaunch360)`
    background-color: gray;
    padding: 64px;
`

export default ProductLaunch360
