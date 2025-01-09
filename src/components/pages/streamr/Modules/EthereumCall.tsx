import * as React from 'react'
import { Module, ModuleProps } from './Module'

export function EthereumCall({
    title = 'EthereumCall',
    ...props
}: Omit<ModuleProps, 'ins' | 'outs'>) {
    return (
        <Module
            {...props}
            title={title}
            ins={[
                ['ethAccount', 'Tram demo', true],
                ['function', 'update', true],
                ['contract'],
                ['addedUnits'],
            ]}
            outs={[
                null,
                null,
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
}
