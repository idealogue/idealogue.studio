// @flow

import React from 'react'
import Module from '../Module'

type Props = {
    title?: ?string,
}

function Mqtt({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'MQTT'}
            ins={[
                ['URL', 'URL'],
                ['Topic', 'Topic'],
                ['Username', 'username'],
                ['Password', 'password'],
                ['Cert Type', 'none'],
            ]}
            outs={[
                ['Message'],
            ]}
        />
    )
}

export default Mqtt
