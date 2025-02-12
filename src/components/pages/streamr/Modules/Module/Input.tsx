import { font } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import { Icon, Name, Port } from './Port'
import { PortIcon } from './PortIcon'

interface InputProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    children?: string
    highlight?: boolean
    name: string
    noIcon?: boolean
    predefinedValue?: boolean
    square?: boolean
}

export function Input({
    children,
    highlight,
    name,
    square,
    noIcon,
    predefinedValue,
    ...props
}: InputProps) {
    const isColor = /#[a-f\d]{6}/i.test(children || '')

    const ValueTag = predefinedValue ? 'span' : Em

    return (
        <Port {...props}>
            <Icon>
                {!noIcon && (
                    <PortIcon $highlight={highlight} $square={square} />
                )}
            </Icon>
            <Name>{name}</Name>
            <Value>
                {!isColor ? (
                    <ValueTag>{children}</ValueTag>
                ) : (
                    <Color
                        style={{
                            backgroundColor: children,
                        }}
                    />
                )}
            </Value>
        </Port>
    )
}

const Em = styled.em`
    font-style: italic;
`

const Value = styled.div`
    ${font('plex sans')}

    color: #adadad;
    line-height: 1rem;
    margin-left: 0.75rem;
    white-space: pre;
`

const Color = styled.div`
    border-radius: 0.125rem;
    height: 1rem;
    width: 1.5rem;
`
