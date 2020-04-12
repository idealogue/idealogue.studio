// @flow

import React from 'react'
import cx from 'classnames'
import Comment from './Comment'
import Scheduler from './Scheduler'
import Stream from './Stream'
import Email from './Email'
import Button from './Button'
import EthereumCall from './EthereumCall'
import CodeEditor from './CodeEditor'
import Chart from './Chart'
import Map from './Map'
import Table from './Table'
import Gradient from './Gradient'
import Solidity from './Solidity'
import Search from './Search'
import Mqtt from './Mqtt'
import RateLimit from './RateLimit'
import Clock from './Clock'
import Sql from './Sql'
import Regex from './Regex'
import Http from './Http'
import Color from './Color'
import Switcher from './Switcher'
import Expression from './Expression'
import RandomString from './RandomString'
import styles from './modules.module.css'
import Container from '~shared/Container'
import useTranslation from '~utils/useTranslation'
import SectionID from '~shared/SectionID'
import { Styles as LayoutStyles } from '~shared/Layout'

type Props = {
    className?: ?string,
}

const Modules = ({ className }: Props) => {
    const { t } = useTranslation()

    return (
        <div className={cx(styles.root, className)}>
            <SectionID scope="core" value="modules" />
            <Container>
                <h1>
                    <a href="#modules" className={LayoutStyles.incognito}>
                        {t('learn.core.modules.title')}
                    </a>
                </h1>
            </Container>
            <div className={styles.inner}>
                <div className={styles.wideVariants}>
                    <div className={cx(styles.variant, styles.variant1)}>
                        <Chart />
                        <Map />
                        <Table />
                        <div className={styles.vFlex}>
                            <Gradient />
                            <div className={styles.vSeparator} />
                            <Solidity grow />
                        </div>
                        <div className={styles.vFlex}>
                            <Color />
                            <div className={styles.vSeparator} />
                            <Switcher grow />
                            <div className={styles.vSeparator} />
                            <RandomString />
                        </div>
                    </div>
                    <div className={cx(styles.variant, styles.variant3)}>
                        <Clock />
                        <Mqtt />
                        <Expression />
                        <RateLimit />
                        <Regex />
                        <Http />
                        <Sql />
                    </div>
                    <div className={cx(styles.variant, styles.variant2)}>
                        <div className={styles.vFlex}>
                            <Comment title="Note" grow>
                                Use Core&apos;s node based canvas editor to filter, clean, process and visualise your data.
                                With over 150 modules to choose from, plus the ability to run your own code with the Java
                                module, Core lets you handle data the way you choose.
                            </Comment>
                            <div className={styles.vSeparator} />
                            <Stream />
                        </div>
                        <Search />
                        <div className={styles.vFlex}>
                            <Button />
                            <div className={styles.vSeparator} />
                            <Comment title="Note" grow>
                                Quickly test out ideas, clean up noisy data, and visualise almost anything in minutes.
                            </Comment>
                        </div>
                        <EthereumCall />
                        <CodeEditor />
                        <div className={styles.vFlex}>
                            <Scheduler grow />
                            <div className={styles.vSeparator} />
                            <Email />
                        </div>
                    </div>
                </div>
                <div className={styles.narrowVariants}>
                    <div className={cx(styles.variant, styles.variant4)}>
                        <Chart />
                        <Map />
                    </div>
                    <div className={cx(styles.variant, styles.variant5)}>
                        <Search className={styles.search} />
                        <Comment title="Note" className={styles.comment}>
                            Quickly test out ideas, clean up noisy data, and visualise almost anything in minutes.
                        </Comment>
                        <Email className={styles.email} />
                        <Switcher className={styles.switcher} />
                        <Gradient className={styles.gradient} />
                        <Stream className={styles.stream} />
                        <Expression className={styles.expression} />
                        <RateLimit className={styles.rateLimit} />
                    </div>
                    <div className={cx(styles.variant, styles.variant6)}>
                        <EthereumCall className={styles.ethereumCall} />
                        <Comment title="Note" className={styles.comment}>
                            Use Core&apos;s node based canvas editor to filter, clean, process and visualise your data.
                            With over 150 modules to choose from, plus the ability to run your own code with the Java
                            module, Core lets you handle data the way you choose.
                        </Comment>
                        <Regex className={styles.regex} />
                        <Button className={styles.button} />
                        <Scheduler className={styles.scheduler} />
                        <Table className={styles.table} />
                        <Solidity className={styles.solidity} />
                        <Table className={styles.table} />
                        <Clock className={styles.clock} />
                        <Mqtt className={styles.mqtt} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modules
