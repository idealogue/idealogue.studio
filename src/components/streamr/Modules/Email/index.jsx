// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Email({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Email'}
            ins={[
                ['subject', 'Your subject here'],
                ['message', 'Your message here'],
                ['[[]] value1'],
            ]}
        />
    )
}

export default Email
