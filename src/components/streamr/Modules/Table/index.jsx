// @flow

import React, { Fragment } from 'react'
import Module from '../Module'
import styles from './table.module.css'

type Props = {
    title?: ?string,
}

function Table({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Table'}
            ins={[
                ['batch'],
                ['in4+'],
            ]}
        >
            <div className={styles.body}>
                <div className={styles.headCell}>
                    timestamp
                </div>
                <div className={styles.headCell}>
                    batch
                </div>
                {Array(...Array(11)).map((el, i) => {
                    const sec = `${6 + i < 10 ? '0' : ''}${6 + i}`

                    const msec = ((s) => (
                        // Prepend leading zeros…
                        `${'000'.substr(0, 3 - s.length)}${s}`
                    ))(`${Math.floor(Math.random() * 1000)}`)

                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <Fragment key={i}>
                            <div>{`2018-10-01 07:02:${sec}.${msec}`}</div>
                            <div>{(10007 + 2 * Math.random()).toFixed(8)}</div>
                        </Fragment>
                    )
                })}
            </div>
        </Module>
    )
}

export default Table
