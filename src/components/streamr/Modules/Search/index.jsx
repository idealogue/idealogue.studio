// @flow

import React from 'react'
import cx from 'classnames'
import { Styles as ModuleStyles } from '../Module'
import styles from './search.module.css'

type Props = {
    className?: ?string,
    height?: number,
    width?: number,
}

function Search({ className, height, width }: Props) {
    const style = {}

    if (width != null) {
        style.width = width
    }

    if (height != null) {
        style.height = height
    }

    return (
        <div
            className={cx(styles.root, ModuleStyles.root, className)}
            style={style}
        >
            <div className={ModuleStyles.top}>
                <div className={cx(styles.header, ModuleStyles.header)}>
                    <div>
                        <svg viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M.756 1l4.245 4.245 4.243-4.242"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                                fillRule="evenodd"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div>
                        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="currentColor" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                                <path d="M.757.757l8.486 8.486M9.243.757L.757 9.243" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={ModuleStyles.bottom}>
                <div className={styles.body}>
                    <div className={styles.input}>
                        Search or select a module
                    </div>
                    <div className={styles.category}>
                        Time Series
                    </div>
                    <div className={styles.category}>
                        Text
                    </div>
                    <div className={styles.category}>
                        Time & Date
                    </div>
                    <div className={styles.category}>
                        Boolean
                    </div>
                    <div className={styles.category}>
                        Custom Modules
                    </div>
                    <div className={styles.category}>
                        Visualisations
                    </div>
                    <div className={styles.category}>
                        Utils
                    </div>
                    <div className={styles.category}>
                        Integrations
                    </div>
                    <div className={styles.category}>
                        Input
                    </div>
                    <div className={styles.category}>
                        Map
                    </div>
                    <div className={styles.category}>
                        List Streams
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
