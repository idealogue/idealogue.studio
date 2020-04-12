import React from 'react'
import styled from 'sc'
import Module, { Body, VerticalWedge } from './Module'
import { PLEX_MONO, SEMIBOLD } from '$utils/css'

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

const Button = ({ title, ...props }) => (
    <Module
        {...props}
        title={title || 'Button'}
        ins={[
            ['buttonName', 'Start'],
            ['buttonValue', '1'],
        ]}
        outs={[
            ['Out'],
        ]}
    >
        <Body>
            <VerticalWedge />
            <InnerBody>
                <InnerButton>
                    Start
                </InnerButton>
            </InnerBody>
        </Body>
    </Module>
)

export default Button
