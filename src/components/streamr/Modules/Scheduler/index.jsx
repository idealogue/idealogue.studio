// @flow

import React from 'react'
import Module, { Styles as ModuleStyles } from '../Module'

type Props = {
    title?: ?string,
}

function Scheduler({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            title={title || 'Scheduler'}
            ins={[
                ['Timezone', 'UTC', true],
                null,
                ['{} Send value', '0'],
                ['{} every', 'day'],
                ['{} from', '00 : 00'],
                ['{} to', '00 : 00'],
            ]}
            outs={[
                ['value'],
                null,
            ]}
        >
            <div className={ModuleStyles.body}>
                <div className={ModuleStyles.vWedge} />
                <div className={ModuleStyles.footer}>
                    <div />
                    <div className={ModuleStyles.buttons}>
                        <div className={ModuleStyles.button}>
                            + Add
                        </div>
                    </div>
                </div>
            </div>
        </Module>
    )
}

export default Scheduler
