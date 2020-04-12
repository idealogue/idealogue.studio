// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Gradient({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Gradient'}
            ins={[
                ['minValue', '0'],
                ['maxValue', '1'],
                ['minColor', '#FF5C01'],
                ['maxColor', '#2BC437'],
                ['in'],
            ]}
            outs={[
                ['color'],
            ]}
        />
    )
}

export default Gradient
