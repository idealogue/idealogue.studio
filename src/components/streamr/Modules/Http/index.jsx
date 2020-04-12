// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Http({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'HTTP Request'}
            ins={[
                ['Verb', 'POST', true],
                ['URL', 'URL'],
                ['Params', 'Key          Value'],
                ['Headers', 'Key          Value'],
                ['[[]] body', ''],
            ]}
            outs={[
                ['Errors'],
                ['Data'],
                ['Status Code'],
                ['Roundtrip Millis'],
                ['Headers'],
            ]}
        />
    )
}

export default Http
