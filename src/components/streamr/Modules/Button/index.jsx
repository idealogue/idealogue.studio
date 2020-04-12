// @flow

import React from 'react'
import Module, { Styles as ModuleStyles } from '../Module'
import styles from './button.module.css'

type Props = {
    title?: ?string,
}

function Button({ title, ...props }: Props) {
    return (
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
            <div className={ModuleStyles.body}>
                <div className={ModuleStyles.vWedge} />
                <div className={styles.body}>
                    <div className={styles.button}>
                        Start
                    </div>
                </div>
            </div>
        </Module>
    )
}

export default Button
