// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Regex({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Regex'}
            ins={[
                ['Pattern', 'pattern'],
                ['[[]] Text', 'text'],
            ]}
            outs={[
                ['Match'],
                ['Match Count'],
                ['Match List'],
            ]}
        />
    )
}

export default Regex
