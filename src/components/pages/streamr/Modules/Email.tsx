import * as React from 'react'
import { Module, ModuleProps } from './Module'

export function Email({ title = 'Email', ...props }: Omit<ModuleProps, 'ins'>) {
    return (
        <Module
            {...props}
            title={title}
            ins={[
                ['subject', 'Your subject here'],
                ['message', 'Your message here'],
                ['[[]] value1'],
            ]}
        />
    )
}
