import React from 'react'
import styled from 'sc'
import PortIcon from './PortIcon'
import Port, { Icon, Name } from './Port'
import { PLEX_SANS } from '$utils/css'

const Em = styled.em`
    font-style: italic;
`

const Value = styled.div`
    color: #adadad;
    font-family: ${PLEX_SANS};
    line-height: 1rem;
    margin-left: 0.75rem;
    white-space: pre;
`

const Color = styled.div`
    border-radius: 0.125rem;
    height: 1rem;
    width: 1.5rem;
`

function Input({
    children,
    highlight,
    name,
    square,
    noIcon,
    predefinedValue,
    ...props
}) {
    const isColor = /#[a-f\d]{6}/i.test(children || '')
    const ValueTag = predefinedValue ? 'span' : Em

    return (
        <Port {...props}>
            <Icon>
                {!noIcon && (
                    <PortIcon highlight={highlight} square={square} />
                )}
            </Icon>
            <Name>
                {name}
            </Name>
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

export default Input
