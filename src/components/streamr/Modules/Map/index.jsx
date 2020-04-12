// @flow

import React from 'react'
import Module from '../Module'
import styles from './map.module.css'
import map from './assets/map.jpg'

type Props = {
    title?: ?string,
}

function Map({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            className={styles.root}
            title={title || 'Map'}
            ins={[
                ['ID'],
                ['Heading'],
                ['Latitude'],
                ['Longitude'],
            ]}
        >
            <div className={styles.body}>
                <img src={map} alt="Map" className={styles.map} />
                <div className={styles.zoom}>
                    <div className={styles.zoomIn}>+</div>
                    <div className={styles.zoomOut}>-</div>
                </div>
            </div>
        </Module>
    )
}

export default Map
