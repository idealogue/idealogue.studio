// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Sql({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'SQL'}
            ins={[
                ['Engine', 'MySQL', true],
                ['Host', 'Host'],
                ['Database', 'database'],
                ['Username', 'username'],
                ['Password', 'password'],
                ['[[]] Sql', 'sql'],
            ]}
            outs={[
                ['Errors'],
                ['Result'],
            ]}
        />
    )
}

export default Sql
