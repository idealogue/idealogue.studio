// @flow

import React from 'react'
import Port, { Icon, Name } from '../Port'
import PortIcon from '../PortIcon'

type Props = {
    highlight?: boolean,
    name: string,
}

const Output = ({ highlight, name, ...props }: Props) => (
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
