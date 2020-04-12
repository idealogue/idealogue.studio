import React from 'react'
import Module from './Module'

const EthereumCall = ({ title, ...props }) => (
    <Module
        {...props}
        title={title || 'EthereumCall'}
        ins={[
            ['ethAccount', 'Tram demo', true],
            ['function', 'update', true],
            ['contract'],
            ['addedUnits'],
        ]}
        outs={[
            ['errors'],
            ['spentWei'],
            ['targetChangeWei'],
            ['gasUsed'],
            ['gasPriceWei'],
            ['blockNumber'],
            ['nonce'],
            ['txHash'],
            ['OutOfFunds.debt'],
            ['() Paid.amount'],
            ['Recipient.balance'],
            ['Contract balance'],
        ]}
    />
)

export default EthereumCall
