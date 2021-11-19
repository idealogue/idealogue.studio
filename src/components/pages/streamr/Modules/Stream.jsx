import React from 'react'
import Module from './Module'

function Stream({ title, ...props }) {
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
