import { MEDIUM } from '$utils/css'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Module, ModuleProps } from './Module'

export function Table({
    title = 'Table',
    ...props
}: Omit<ModuleProps, 'ins' | 'children'>) {
    return (
        <Module {...props} title={title} ins={[['batch'], ['in4+']]}>
            <Body>
                <HeadCell>timestamp</HeadCell>
                <HeadCell>batch</HeadCell>
                {Array(...Array(11)).map((el, i) => {
                    const sec = `${6 + i < 10 ? '0' : ''}${6 + i}`

                    const msec = ((s) =>
                        // Prepend leading zeros…
                        `${'000'.substr(0, 3 - s.length)}${s}`)(
                        `${Math.floor(Math.random() * 1000)}`
                    )

                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <Fragment key={i}>
                            <div>{`2018-10-01 07:02:${sec}.${msec}`}</div>
                            <div>{(10007 + 2 * Math.random()).toFixed(8)}</div>
                        </Fragment>
                    )
                })}
            </Body>
        </Module>
    )
}

const Body = styled.div`
    border-top: 1px solid #efefef;
    color: #525252;
    display: grid;
    font-size: 10px;
    grid-template-columns: auto auto;
    line-height: 24px;
    padding: 0 12px 16px;
    width: 100%;

    > div {
        border-bottom: 1px solid #efefef;
        padding: 0 0 0 12px;
    }
`

const HeadCell = styled.div`
    font-weight: ${MEDIUM};
`
