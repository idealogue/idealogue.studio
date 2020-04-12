// @flow

import React, { type Node } from 'react'
import cx from 'classnames'
import Module from '../Module'
import styles from './comment.module.css'

type Props = {
    className?: ?string,
    children: Node,
    title?: ?string,
}

function Comment({ className, children, title, ...props }: Props) {
    return (
        <Module
            {...props}
            className={cx(styles.root, className)}
            title={title || 'Comment'}
        >
            <div className={styles.body}>
                {children}
            </div>
        </Module>
    )
}

export default Comment
