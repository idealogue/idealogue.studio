// @flow

import React from 'react'
import Module, { Styles as ModuleStyles } from '../Module'
import styles from './solidity.module.css'

type Props = {
    title?: ?string,
}

function Solidity({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Solidity Module'}
            ins={[
                ['ethAccount', 'Tram demo', true],
                ['recipientAddress', '0x9e3d69305d', true],
                ['unitPrice wei', '10000'],
                ['initial ETH', '0.01'],
            ]}
            outs={[
                ['() contract'],
            ]}
        >
            <div className={ModuleStyles.body}>
                <div className={ModuleStyles.vWedge} />
                <div className={ModuleStyles.footer}>
                    <div className={styles.addressWrapper}>
                        <div className={styles.address}>
                            &zwnj;
                            <div>0xaca0cc3a6bf9552f2866ccc670cc3c70aca</div>
                        </div>
                    </div>
                    <div className={ModuleStyles.buttons}>
                        <div className={ModuleStyles.button}>
                            Edit code
                        </div>
                    </div>
                </div>
            </div>
        </Module>
    )
}

export default Solidity
