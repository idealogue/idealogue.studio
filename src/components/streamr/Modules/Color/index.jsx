// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Color({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'ConstantColor'}
            ins={[
                ['() Value', '#000000'],
            ]}
            outs={[
                ['Color'],
            ]}
        />
    )
}

export default Color
