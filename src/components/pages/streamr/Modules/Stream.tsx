import * as React from 'react'
import { Module, ModuleProps } from './Module'

export function Stream({
    title = 'Stream',
    ...props
}: Omit<ModuleProps, 'ins' | 'outs'>) {
    return (
        <Module
            {...props}
            title={title}
            ins={[['Stream']]}
            outs={[
                ['Vehicle'],
                ['Speed'],
                ['Heading'],
                ['Latitude'],
                ['Longitude'],
                ['Line'],
            ]}
        />
    )
}
