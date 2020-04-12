// @flow

import React, { type Node, useMemo } from 'react'
import cx from 'classnames'
import Input from './Input'
import Output from './Output'
import styles from './module.module.css'

type Props = {
    children?: Node,
    className?: ?string,
    ins?: Array<any>,
    outs?: Array<any>,
    title: string,
    width?: number,
    height?: number,
    grow?: boolean,
}

function Module({
    children,
    className,
    ins: insProp,
    outs: outsProp,
    title,
    width,
    height,
    grow,
}: Props) {
    const ins = insProp || []

    const outs = outsProp || []

    const ports: Array<any> = useMemo(() => (
        Array(...Array(Math.max(ins.length, outs.length)))
    ), [ins.length, outs.length])

    const style = {}

    if (width != null) {
        style.width = width
    }

    if (height != null) {
        style.height = height
    }

    return (
        <div
            className={cx(styles.root, className, {
                [styles.grow]: !!grow,
            })}
            style={style}
        >
            <div className={styles.top}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div />
                </div>
                {ports.length > 0 && (
                    <div className={styles.portsWrapper}>
                        {ports.map((el, i) => {
                            const a = ins[i]
                            const b = outs[i]

                            if (a === null && b === null) {
                                // eslint-disable-next-line react/no-array-index-key
                                return <div className={styles.separator} key={i} />
                            }

                            const inName = ((a || [])[0] || '').replace(/^[[\](){}]+\s+/g, '')
                            const inPrefix = (((a || [])[0] || '').match(/^([[\](){}]+)\s+/) || [])[1] || null
                            const [, inValue, predefined] = a || []
                            const inSquare = inPrefix === '[]' || inPrefix === '[[]]'
                            const inHighlight = inPrefix === '[[]]' || inPrefix === '()'
                            const inNoIcon = inPrefix === '{}'

                            const outName = ((b || [])[0] || '').replace(/^[()]+\s+/g, '')
                            const outPrefix = (((b || [])[0] || '').match(/^([()]+)\s+/) || [])[1] || null
                            const outHighlight = outPrefix === '()'

                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <div className={styles.ports} key={i}>
                                    {a ? (
                                        <Input
                                            name={inName}
                                            square={!!inSquare}
                                            highlight={!!inHighlight}
                                            noIcon={inNoIcon}
                                            predefinedValue={predefined}
                                        >
                                            {inValue}
                                        </Input>
                                    ) : <div />}
                                    {b ? (
                                        <Output name={outName} highlight={!!outHighlight} />
                                    ) : <div />}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <div className={styles.bottom}>
                {children}
            </div>
        </div>
    )
}

export {
    styles as Styles,
}

export default Module
