// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Clock({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Clock'}
            ins={[
                ['Timezone', 'UTC', true],
                ['Format', 'yyyy-MM-dd HH:mm:ss z'],
                ['Rate', '1'],
                ['Unit', 'second', true],
            ]}
            outs={[
                ['Date'],
                ['Timestamp'],
            ]}
        />
    )
}

export default Clock
