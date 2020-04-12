// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Expression({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Expression'}
            ins={[
                ['Expression', 'x+y'],
                ['[[]] X', 'x'],
                ['[[]] Y', 'y'],
            ]}
            outs={[
                ['Out'],
                ['Error'],
            ]}
        />
    )
}

export default Expression
