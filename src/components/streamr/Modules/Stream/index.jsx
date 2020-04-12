// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Stream({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Stream'}
            ins={[
                ['Stream'],
            ]}
            outs={[
                ['Vehicle'],
                ['Speed'],
                ['Heading'],
                ['Latitude'],
                ['Longitude'],
                ['Line'],
            ]}
        />
    )
}

export default Stream
