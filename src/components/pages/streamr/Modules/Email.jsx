import * as React from 'react'
import Module from './Module'

const Email = ({ title, ...props }) => (
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

export default Email
