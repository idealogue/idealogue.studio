import * as React from 'react'
import styled, { css } from 'styled-components'
import { TouchIndicator } from './TouchIndicator'

const BalanceLabels = styled.div`
    position: relative;
`

const Activable = styled.div<{ $active?: boolean }>`
    line-height: 1em;
    transform: translate(0, 0);
    transition: 300ms ease-in-out;
    transition-delay: 0s, 0s, 0s;
    transition-property: visibility, opacity, transform;
    visibility: visible;
    width: 100%;

    ${({ $active = false }) =>
        !$active &&
        css`
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            transition-delay: 300ms, 0s, 0s;
            visibility: hidden;
        `}
`

const GntLabelContainer = styled(Activable)`
    ${({ $active = false }) =>
        !$active &&
        css`
            transform: translateX(-20px);
        `}
`

const EthLabelContainer = styled(Activable)`
    ${({ $active = false }) =>
        !$active &&
        css`
            transform: translateX(20px);
        `}
`

const BalanceLabel = styled(Activable)``

const BalanceAmounts = styled.div`
    position: relative;
`

const GntAmountContainer = styled(Activable)`
    ${({ $active }) =>
        !$active &&
        css`
            transform: translateX(-20px);
        `}
`

const BalanceAmount = styled(Activable)<{ $up?: boolean }>`
    font-size: 48px;
    font-weight: 300;
    line-height: 1.5em;

    ${({ $active = false, $up = false }) =>
        !$active &&
        $up &&
        css`
            transform: translateY(-20px);
        `}

    ${({ $active = false, $up = false }) =>
        !$active &&
        !$up &&
        css`
            transform: translateY(20px);
        `}
`

const EthAmountContainer = styled(Activable)`
    ${({ $active = false }) =>
        !$active &&
        css`
            transform: translateX(20px);
        `}
`

const Fees = styled.div<{ $active?: boolean }>`
    bottom: 20px;
    color: #cbcbcb;
    left: 0;
    position: absolute;
    transition: 300ms;
    transition-delay: 0s, 0s;
    transition-property: visibility, opacity;
    width: 100%;

    ${({ $active = false }) =>
        !$active &&
        css`
            opacity: 0;
            transition-delay: 300ms, 0s;
            visibility: hidden;
        `}
`

const BalanceCurrencies = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100px;
`

const BalanceCurrencyContainer = styled.div<{ $active?: boolean }>`
    color: #cbcbcb;
    flex-basis: 100%;
    position: relative;
    transition: 300ms color;

    ${({ $active = false }) =>
        $active &&
        css`
            color: #4e4e4e;
        `}
`

const BalanceCurrency = styled(Activable)``

interface TouchProps {
    visible?: boolean
}

function Touch({ visible = false }: TouchProps) {
    return visible && <TouchIndicator center immitateRelease visible />
}

interface BalanceProps {
    gnt?: boolean
    converted?: boolean
}

export function Balance({ gnt = false, converted = false }: BalanceProps) {
    return (
        <BalanceRoot>
            <BalanceLabels>
                <GntLabelContainer $active={gnt}>
                    <BalanceLabel $active={!converted}>
                        Wallet balance
                    </BalanceLabel>
                    <BalanceLabel $active={converted}>
                        Approximate wallet balance
                    </BalanceLabel>
                </GntLabelContainer>
                <EthLabelContainer $active={!gnt}>
                    <BalanceLabel $active={!converted}>
                        Gas balance
                    </BalanceLabel>
                    <BalanceLabel $active={converted}>
                        Approximate gas balance
                    </BalanceLabel>
                </EthLabelContainer>
            </BalanceLabels>
            <BalanceAmounts>
                <GntAmountContainer $active={gnt}>
                    <BalanceAmount $active={!gnt || !converted}>
                        10.35
                    </BalanceAmount>
                    <BalanceAmount $active={gnt && converted} $up>
                        $4.94
                    </BalanceAmount>
                </GntAmountContainer>
                <EthAmountContainer $active={!gnt}>
                    <BalanceAmount $active={gnt || !converted}>
                        0.025
                    </BalanceAmount>
                    <BalanceAmount $active={!gnt && converted} $up>
                        $5.69
                    </BalanceAmount>
                </EthAmountContainer>
                <Touch visible={converted} />
                <Touch visible={!converted} />
            </BalanceAmounts>
            <BalanceCurrencies>
                <BalanceCurrencyContainer $active={gnt}>
                    <BalanceCurrency $active={!gnt || !converted}>
                        GNT
                    </BalanceCurrency>
                    <BalanceCurrency $active={gnt && converted}>
                        USD
                    </BalanceCurrency>
                    <Touch visible={gnt} />
                </BalanceCurrencyContainer>
                <BalanceCurrencyContainer $active={!gnt}>
                    <BalanceCurrency $active={gnt || !converted}>
                        ETH
                    </BalanceCurrency>
                    <BalanceCurrency $active={!gnt && converted}>
                        USD
                    </BalanceCurrency>
                    <Touch visible={!gnt} />
                </BalanceCurrencyContainer>
            </BalanceCurrencies>
            <Fees $active={!gnt && !converted}>Approximately 325 tx fees</Fees>
        </BalanceRoot>
    )
}

const BalanceRoot = styled.div`
    background-color: #f9fbfc;
    color: #4e4e4e;
    line-height: 1em;
    padding: 48px;
    position: relative;
    text-align: center;
`
