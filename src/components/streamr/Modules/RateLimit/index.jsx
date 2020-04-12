// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function RateLimit({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'RateLimit'}
            ins={[
                ['Rate', '1'],
                ['Time in Millis', '1000'],
                ['[[]] In', ''],
            ]}
            outs={[
                ['Limit Exceeded'],
                ['Out'],
            ]}
        />
    )
}

export default RateLimit
