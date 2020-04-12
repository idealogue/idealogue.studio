import React from 'react'
import Port, { Icon, Name } from './Port'
import PortIcon from './PortIcon'

const Output = ({ highlight, name, ...props }) => (
    <Port {...props}>
        <Name>
            {name}
        </Name>
        <Icon>
            <PortIcon highlight={highlight} />
        </Icon>
    </Port>
)

export default Output
