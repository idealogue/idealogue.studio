import React from 'react'
import styled from 'sc'
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

const Row = styled.div`
    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 24px;
    }
`

const Cell = styled.div`
`

const UnstyledModules = (props) => (
    <div {...props}>
        <Row>
            <Cell>
                <Chart width="560" />
            </Cell>
            <Cell>
                <Map width="368" />
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
                        <Comment width="224" />
                    </Cell>
                </Row>
            </Cell>
            <Cell>
                <Row>
                    <Cell>
                        <Comment width="272" />
                    </Cell>
                </Row>
                <Row>
                    <Cell>
                        <Stream width="272" />
                    </Cell>
                </Row>
            </Cell>
            <Cell>
                <Search width="248" />
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
                <EthereumCall width="224" />
            </Cell>
        </Row>
    </div>
    // <Chart />
    // <Comment />
    // <Map />
    // <Search />
    // <Table />
)

const Modules = styled(UnstyledModules)`
    margin: 0 auto;
    width: 1272px;
`

export default Modules
