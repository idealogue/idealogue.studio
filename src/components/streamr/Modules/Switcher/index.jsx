// @flow

import React from 'react'
import Module, { Styles as ModuleStyles } from '../Module'
import styles from './switcher.module.css'

type Props = {
    title?: ?string,
}

function Switcher({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Switcher'}
            outs={[
                ['Out'],
            ]}
        >
            <div className={ModuleStyles.body}>
                <div className={ModuleStyles.vWedge} />
                <div className={styles.body}>
                    <div className={styles.toggle} />
                </div>
            </div>
        </Module>
    )
}

export default Switcher
