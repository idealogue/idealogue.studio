import { PLEX_MONO, SEMIBOLD } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import { Body, Module, ModuleProps, VerticalWedge } from './Module'

export function Button({
    title = 'Button',
    ...props
}: Omit<ModuleProps, 'ins' | 'outs'>) {
    return (
        <Module
            {...props}
            title={title}
            ins={[
                ['buttonName', 'Start'],
                ['buttonValue', '1'],
            ]}
            outs={[['Out']]}
        >
            <Body>
                <VerticalWedge />
                <InnerBody>
                    <InnerButton>Start</InnerButton>
                </InnerBody>
            </Body>
        </Module>
    )
}

const InnerBody = styled.div`
    color: white;
    font-family: ${PLEX_MONO};
    font-size: 16px;
    font-weight: ${SEMIBOLD};
    letter-spacing: 2px;
    line-height: 48px;
    padding: 0 8px 8px;
    text-transform: uppercase;
`

const InnerButton = styled.div`
    background-color: #0324ff;
    border-radius: 4px;
    padding: 0 16px;
    text-align: center;
`
