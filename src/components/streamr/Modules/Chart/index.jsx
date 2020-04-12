// @flow

import React from 'react'
import cx from 'classnames'
import Module, { Styles as ModuleStyles } from '../Module'
import styles from './chart.module.css'

type Props = {
    title?: ?string,
}

function Chart({ title, ...props }: Props) {
    return (
        <Module
            {...props}
            className={styles.root}
            title={title || 'Chart'}
            ins={[
                ['in1'],
            ]}
        >
            <div className={cx(ModuleStyles.body, styles.body)}>
                <div className={styles.rangeSelector}>
                    <span>15 minutes</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 6">
                        <path
                            d="M9.488 1.243L5.243 5.488 1 1.245"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className={styles.chart}>
                    <div className={styles.chartInner}>
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#EFEFEF">
                                <rect x="0" y="0" width="100%" height="1" />
                                <rect x="0" y="25%" width="100%" height="1" />
                                <rect x="0" y="50%" width="100%" height="1" />
                                <rect x="0" y="75%" width="100%" height="1" />
                                <rect x="0" y="100%" width="100%" height="1" />
                                <rect x="68%" y="0" width="1" height="100%" />
                            </g>
                            <g transform="translate(0 -5)" fill="white">
                                <rect x="100%" y="0" width="48" height="10" />
                                <rect x="100%" y="25%" width="48" height="10" />
                                <rect x="100%" y="50%" width="48" height="10" />
                                <rect x="100%" y="75%" width="48" height="10" />
                                <rect x="100%" y="100%" width="48" height="10" />
                            </g>
                            <g fill="#ADADAD" fontSize="10" transform="translate(8 4)">
                                <text x="100%" y="0">15k</text>
                                <text x="100%" y="25%">10k</text>
                                <text x="100%" y="50%">5k</text>
                                <text x="100%" y="75%">0</text>
                                <text x="100%" y="100%">-5k</text>
                            </g>
                        </svg>
                        <svg viewBox="0 0 457 172" xmlns="http://www.w3.org/2000/svg" className={styles.chartLine} preserveAspectRatio="none">
                            <path
                                // eslint-disable-next-line max-len
                                d="M2 149.086L16.32 138l19 8 36-24 16 16 16 24 7-8h25l17-8 15 16 8 8 16-16 24-48 8 16 16 24h15l18-8 9 8 15-32 17-48 14-64 8 16h9l15 40 8-16 9 16 7 40h17l15-24 16-16 8 8 8 8h8"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                        <div className={styles.tooltips}>
                            <div className={styles.tooltipsInner}>
                                <div className={styles.tooltip}>
                                    Wednesday, Oct 3, 06:50:20
                                    <br />
                                    <strong>RateLimit.out </strong>
                                    6,088.73
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.inner}>
                        <div className={styles.xAxis}>
                            <span>06:46</span>
                            <span>06:48</span>
                            <span>06:50</span>
                            <span>06:52</span>
                            <span>06:54</span>
                            <span>06:56</span>
                            <span>06:58</span>
                            <span>07:00</span>
                        </div>
                    </div>
                    <div className={styles.navigator}>
                        <div className={styles.track}>
                            <svg viewBox="0 0 561 22" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path
                                    // eslint-disable-next-line max-len
                                    d="M0 14.5L10 10l21.553-4L61 14.5 77 10l3-4 5 4 6 4.5 7-4.25 8-.25 2-4 8.5 1.5L125 6l14.5 4L152 7l16 6.5 16 7.5 5.5-.5L192 18h8l8-8 16 4 11.5 1 10-5 10.5 3.5 10.5.5 5.5-4 12-4 7 1.5h5l8-5.5 6.5 5 9.5 6.5 8 4.5 2.82-1.234.18-.266 8-4.5 5 3.5L351 0l2.322 5.359c.561 1.295.73.607 1.178 1.641 1.776 4.098 3 8 3 8l8 .5 4-5.5 9.5 4.5L396 6l6.77-.98L411.5 1l10 2.5 7 3 7.5 5 7-2.5 5.5 5.5L459 20l5.5-3 16 3.5 8-3.5 11 3 9-3 12-8 5-3.5 7 3.5 4-3 8 3h8l8 8"
                                    fill="none"
                                    stroke="currentColor"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </div>
                        <div className={styles.handleWrapper}>
                            <div className={cx(styles.ranger, styles.rangeStart)} />
                            <div className={cx(styles.ranger, styles.rangeEnd)} />
                            <div className={styles.handle}>
                                <svg viewBox="0 0 561 22" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path
                                        // eslint-disable-next-line max-len
                                        d="M0 14.5L10 10l21.553-4L61 14.5 77 10l3-4 5 4 6 4.5 7-4.25 8-.25 2-4 8.5 1.5L125 6l14.5 4L152 7l16 6.5 16 7.5 5.5-.5L192 18h8l8-8 16 4 11.5 1 10-5 10.5 3.5 10.5.5 5.5-4 12-4 7 1.5h5l8-5.5 6.5 5 9.5 6.5 8 4.5 2.82-1.234.18-.266 8-4.5 5 3.5L351 0l2.322 5.359c.561 1.295.73.607 1.178 1.641 1.776 4.098 3 8 3 8l8 .5 4-5.5 9.5 4.5L396 6l6.77-.98L411.5 1l10 2.5 7 3 7.5 5 7-2.5 5.5 5.5L459 20l5.5-3 16 3.5 8-3.5 11 3 9-3 12-8 5-3.5 7 3.5 4-3 8 3h8l8 8"
                                        fill="none"
                                        stroke="currentColor"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.stops}>
                            <div>06:00</div>
                            <div>06:30</div>
                            <div>07:00</div>
                            <div>07:30</div>
                        </div>
                    </div>
                </div>
            </div>
        </Module>
    )
}

export default Chart
