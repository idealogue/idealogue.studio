import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Chart from './Chart'
import Comment from './Comment'
import Email from './Email'
import EthereumCall from './EthereumCall'
import Map from './Map'
import Scheduler from './Scheduler'
import Search from './Search'
import Stream from './Stream'
import Table from './Table'
import CaptionedContainer from '$shared/CaptionedContainer'

const Row = styled.div`
    align-items: stretch;
    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 24px;
    }
`

const Cell = styled.div`
    display: flex;
    flex-direction: column;

    > * {
        flex-grow: 1;
    }
`

const UnstyledModules = (props) => (
    <CaptionedContainer {...props} caption="Some of the modules used in the Core canvas editor">
        <div>
            <Row>
                <Cell>
                    <Chart width="560" title="Chart Module" />
                </Cell>
                <Cell>
                    <Map width="368" title="Helsinki Map" />
                </Cell>
                <Cell>
                    <Table width="296" />
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Row>
                        <Cell>
                            <Scheduler width="224" />
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Comment width="224" title="Note">
                                Quickly test out ideas, clean up noisy data, and visualise almost
                                anything in minutes.
                            </Comment>
                        </Cell>
                    </Row>
                </Cell>
                <Cell>
                    <Row>
                        <Cell>
                            <Comment width="272" title="Note">
                                Streamr Core editor provides a comprehensiveset of modules to cover
                                common use cases for visualisation, analysis and prototyping.
                            </Comment>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Stream width="272" />
                        </Cell>
                    </Row>
                </Cell>
                <Cell>
                    <Search width="248" height="341" />
                </Cell>
                <Cell>
                    <Row>
                        <Cell>
                            <Button width="208" />
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Email width="208" />
                        </Cell>
                    </Row>
                </Cell>
                <Cell>
                    <EthereumCall width="224" title="Ethereum Call" />
                </Cell>
            </Row>
        </div>
    </CaptionedContainer>
)

const Modules = styled(UnstyledModules)`
    > div {
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        width: 1272px;
    }
`

export default Modules
