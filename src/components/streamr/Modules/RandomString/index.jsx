// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function RandomString({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'RandomString'}
            ins={[
                ['Length', '10'],
                ['[[]] Trigger', ''],
            ]}
            outs={[
                ['Out'],
            ]}
        />
    )
}

export default RandomString
