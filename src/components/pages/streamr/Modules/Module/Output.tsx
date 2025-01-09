import * as React from 'react'
import { Icon, Name, Port } from './Port'
import { PortIcon } from './PortIcon'

interface OutputProps extends React.HTMLAttributes<HTMLDivElement> {
    highlight?: boolean
    name: string
}

export function Output({ highlight, name, ...props }: OutputProps) {
    return (
        <Port {...props}>
            <Name>{name}</Name>
            <Icon>
                <PortIcon $highlight={highlight} />
            </Icon>
        </Port>
    )
}
