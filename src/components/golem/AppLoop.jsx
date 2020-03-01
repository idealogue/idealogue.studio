import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import Container from '$shared/Container'
import CaptionedContainer from '$shared/CaptionedContainer'
import { SM } from '$utils/css'
import Glyph, { BOOK, PLUS, SETTINGS } from '$shared/Glyph'

const Root = styled(Container)`
`

const DesignPass = styled.div`
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: default;
    font-family: 'Roboto', sans-serif;
    font-size: 9px;
    margin: 0 auto;
    user-select: none;

    @media (min-width: ${SM}px) {
        /* QUESTION: We we render it on mobile at all? This could be the default. */
        font-size: 12px;
        width: 460px;
    }
`

const HeaderButtons = styled.div`
    align-items: center;
    display: flex;

    div {
        background-color: #ec5c56;
        border-radius: 50%;
        box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
        height: 12px;
        width: 12px;
    }

    div + div {
        background-color: #62ca43;
        margin-left: 8px;
    }

    div + div + div {
        background-color: #f6bc3d;
    }
`

const HeaderInner = styled.div`
    display: flex;
`

const Tabs = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    margin-left: 30px;
    padding: 0;
`

const Tab = styled.div`
    font-size: 18px;
    font-weight: bold;
    line-height: 1em;
    transition: 200ms color;

    & + & {
        margin-left: 30px;
    }

    ${({ active }) => !!active && css`
        color: #4e4e4e;
    `}
`

const HeaderIcons = styled.div`
    align-items: center;
    display: flex;

    svg {
        display: block;
        width: 20px;
    }

    svg + svg {
        margin-left: 18px;
    }
`

const Header = styled.div`
    align-items: center;
    border-bottom: 1px solid #cbcbcb;
    color: #cbcbcb;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 0 18px;
`

const Body = styled.div`
    min-height: 400px;
    position: relative;
`

const Screen = styled.div`
    opacity: 1;
    visibility: visible;
    transition: 300ms;

    ${({ active }) => !active && css`
        opacity: 0;
        position: absolute;
        visibility: hidden;
    `}
`

const Balance = styled.div`
    background-color: #f9fbfc;
    color: #4e4e4e;
    line-height: 1em;
    padding: 48px;
    position: relative;
    text-align: center;
`

const BalanceLabels = styled.div`
    position: relative;
`

const Activable = styled.div`
    line-height: 1em;
    transform: translate(0, 0);
    transition: 300ms ease-in-out;
    transition-delay: 0s, 0s, 0s;
    transition-property: visibility, opacity, transform;
    visibility: visible;
    width: 100%;

    ${({ active }) => !active && css`
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition-delay: 300ms, 0s, 0s;
        visibility: hidden;
    `}
`

const GntLabelContainer = styled(Activable)`
    ${({ active }) => !active && css`
        transform: translateX(-20px);
    `}
`

const EthLabelContainer = styled(Activable)`
    ${({ active }) => !active && css`
        transform: translateX(20px);
    `}
`

const BalanceLabel = styled(Activable)``

const BalanceAmounts = styled.div`
    position: relative;
`

const GntAmountContainer = styled(Activable)`
    ${({ active }) => !active && css`
        transform: translateX(-20px);
    `}
`

const BalanceAmount = styled(Activable)`
    font-size: 48px;
    font-weight: 300;
    line-height: 1.5em;

    ${({ active, up }) => !active && !!up && css`
        transform: translateY(-20px);
    `}

    ${({ active, up }) => !active && !up && css`
        transform: translateY(20px);
    `}
`

const EthAmountContainer = styled(Activable)`
    ${({ active }) => !active && css`
        transform: translateX(20px);
    `}
`

const Fees = styled.div`
    bottom: 20px;
    color: #cbcbcb;
    left: 0;
    position: absolute;
    transition: 300ms;
    transition-delay: 0s, 0s;
    transition-property: visibility, opacity;
    width: 100%;

    ${({ active }) => !active && css`
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

const BalanceCurrencyContainer = styled.div`
    color: #cbcbcb;
    flex-basis: 100%;
    position: relative;
    transition: 300ms color;

    ${({ active }) => !!active && css`
        color: #4e4e4e;
    `}
`

const BalanceCurrency = styled(Activable)`
`

const NETWORK = 'network'

const TASKS = 'tasks'

const modes = [0, 1, 0, 2, 3, 2]

const AppLoop = (props) => {
    const [screen, setScreen] = useState(NETWORK)

    // 0 - GNT
    // 1 - GNT -> USD (approx.)
    // 2 - ETH
    // 3 - ETH -> USD (approx.)
    const [balanceModeX, setBalanceMode] = useState(0)

    const balanceMode = modes[balanceModeX]

    const onPoke = useCallback(() => {
        setBalanceMode((current) => (current + 1) % modes.length)
    }, [])

    return (
        <Root {...props} onMouseDown={onPoke}>
            <DesignPass>
                <Header>
                    <HeaderInner>
                        <HeaderButtons>
                            <div />
                            <div />
                            <div />
                        </HeaderButtons>
                        <Tabs>
                            <Tab active={screen === NETWORK}>
                                Network
                            </Tab>
                            <Tab active={screen === TASKS}>
                                Tasks
                            </Tab>
                        </Tabs>
                    </HeaderInner>
                    <HeaderIcons>
                        <Glyph source={PLUS} />
                        <Glyph source={BOOK} />
                        <Glyph source={SETTINGS} />
                    </HeaderIcons>
                </Header>
                <Body>
                    <Screen active={screen === NETWORK}>
                        <Balance>
                            <BalanceLabels>
                                <GntLabelContainer active={balanceMode < 2}>
                                    <BalanceLabel active={balanceMode === 0}>
                                        Wallet balance
                                    </BalanceLabel>
                                    <BalanceLabel active={balanceMode === 1}>
                                        Approximate wallet balance
                                    </BalanceLabel>
                                </GntLabelContainer>
                                <EthLabelContainer active={balanceMode >= 2}>
                                    <BalanceLabel active={balanceMode === 2}>
                                        Gas balance
                                    </BalanceLabel>
                                    <BalanceLabel active={balanceMode === 3}>
                                        Approximate gas balance
                                    </BalanceLabel>
                                </EthLabelContainer>
                            </BalanceLabels>
                            <BalanceAmounts>
                                <GntAmountContainer active={balanceMode < 2}>
                                    <BalanceAmount active={balanceMode !== 1}>10.35</BalanceAmount>
                                    <BalanceAmount active={balanceMode === 1} up>$4.94</BalanceAmount>
                                </GntAmountContainer>
                                <EthAmountContainer active={balanceMode >= 2}>
                                    <BalanceAmount active={balanceMode !== 3}>0.025</BalanceAmount>
                                    <BalanceAmount active={balanceMode === 3} up>$5.69</BalanceAmount>
                                </EthAmountContainer>
                            </BalanceAmounts>
                            <BalanceCurrencies>
                                <BalanceCurrencyContainer active={balanceMode < 2}>
                                    <BalanceCurrency active={balanceMode !== 1}>
                                        GNT
                                    </BalanceCurrency>
                                    <BalanceCurrency active={balanceMode === 1}>
                                        USD
                                    </BalanceCurrency>
                                </BalanceCurrencyContainer>
                                <BalanceCurrencyContainer active={balanceMode >= 2}>
                                    <BalanceCurrency active={balanceMode !== 3}>
                                        ETH
                                    </BalanceCurrency>
                                    <BalanceCurrency active={balanceMode === 3}>
                                        USD
                                    </BalanceCurrency>
                                </BalanceCurrencyContainer>
                            </BalanceCurrencies>
                            <Fees active={balanceMode === 2}>
                                Approximately 325 tx fees
                            </Fees>
                        </Balance>
                        {/* nav */}
                        {/* resource slider */}
                        {/* footer */}
                    </Screen>
                    <Screen active={screen === TASKS}>
                        {/* Tasks */}
                    </Screen>
                </Body>
            </DesignPass>
            <CaptionedContainer caption="A loop of the Golem app main views" />
        </Root>
    )
}

export default AppLoop


//.design-pass
//  .design-pass--clicks
//    .click-wrapper(data-template style='display: none;')
//      .click
//        .click--release
//        .click--press

//  .design-pass--header
//    .design-pass--underline

//  .design-pass--body
//    ul.design-pass--screens
//      li.dps--network.active(data-screen-tab='network')
//        .balance-view.gnt.precise
//          .balance-view--title
//            ul.balance-view--slides
//              li.gnt.precise Wallet balance
//              li.gnt.estimated Approximate wallet balance
//              li.eth.precise Gas balance
//              li.eth.estimated Approximate gas balance
//          .balance-view--value
//            ul.balance-view--slides
//              li.gnt.precise
//                span.value 10.35
//              li.gnt.estimated
//                span.value $4.94
//              li.eth.precise
//                span.value 0.025
//              li.eth.estimated
//                span.value $5.69
//          ul.balance-view--currencies
//            li
//              .body-link.gnt-link
//                ul.balance-view--slides
//                  li.gnt.precise GNT
//                  li.gnt.estimated USD
//            li
//              .body-link.eth-link
//                ul.balance-view--slides
//                  li.eth.precise ETH
//                  li.eth.estimated USD
//          .balance-view--estimation
//            | Approximately 325 tx fees
//        .consumption
//          ul
//            li
//              .body-link.active(data-consumption-tab='resources') Resources
//            li.consumpiton--history
//              .body-link(data-consumption-tab='history') History
//            li
//              .body-link(data-consumption-tab='advanced')
//                span.click-handle Advanced
//        ul.consumption-content
//          li.c-resources.active(data-consumption-tab='resources')
//            .consumption-content--inner
//              .resources--slider
//                .resources--slider-icons
//                  .slider-icon
//                    .icon-low
//                  .slider-icon
//                    .icon-high
//                .resources--slider-inner
//                  .recources--slider-handle-wrapper
//                    .recources--slider-handle-track
//                      .recources--slider-handle
//                        .recources--slider-handle-value 18
//                        .recources--click-wrapper
//                          .click--press
//                  .resources--slider-track
//                    .resources--slider-progress
//              p Use the slider to choose how much of your machine’s resources (CPU, RAM and disk space) Golem can use. More power means more <span class='text-nowrap'>potential income.</span>
//          li.c-history(data-consumption-tab='history')
//            ul.history-list.task-list
//              li
//                .task-reward +0.014 GNT
//                .task-title Processed Task
//                .task-details
//                  | 1:15
//                  span.hl-divider
//                  | Pending
//              li
//                .task-reward -0.017 GNT
//                .task-title HMD Model Bake 3.5
//                .task-details
//                  | 1:03
//                  span.hl-divider
//                  | 8:01AM 28 Feb
//              li
//                .task-reward +0.015 GNT
//                .task-title Processed Task
//                .task-details
//                  | 2:15
//                  span.hl-divider
//                  | 8:01AM 28 Feb
//              li
//                .task-reward +0.013 GNT
//                .task-title Processed Task
//                .task-details
//                  | 1:15
//                  span.hl-divider
//                  | 8:01AM 28 Feb
//          li.c-advanced(data-consumption-tab='advanced')
//            .consumption-content--inner
//              .component-row
//                .fake-dropdown
//                  | Custom
//                  .fake-caret
//                .fake-frame-button
//                  | Save as Preset
//              .component-row.resource-circles
//                .resource-circle-wrapper
//                  .resource-circle-text CPU
//                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//                    <circle cx="50" cy="50" r="48" stroke="#eff0f1" stroke-width="2" fill="none" />
//                    <path d="" id="cpu-circle" fill="none" stroke="#37c481" stroke-linecap="round" stroke-width="4" />
//                  </svg>
//                .resource-circle-wrapper
//                  .resource-circle-text RAM
//                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//                    <circle cx="50" cy="50" r="48" stroke="#eff0f1" stroke-width="2" fill="none" />
//                    <path d="" id="ram-circle" fill="none" stroke="#37c481" stroke-linecap="round" stroke-width="4" />
//                  </svg>
//                .resource-circle-wrapper
//                  .resource-circle-text Disk
//                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//                    <circle cx="50" cy="50" r="48" stroke="#eff0f1" stroke-width="2" fill="none" />
//                    <path d="" id="disk-circle" fill="none" stroke="#37c481" stroke-linecap="round" stroke-width="4" />
//                  </svg>
//              .component-row
//                .fake-numeric-wrapper
//                  .fake-numeric
//                    | 6 cores
//                    .fake-numeric-arrows
//                      .fake-arrow-up
//                      .fake-arrow-down
//                .fake-numeric-wrapper
//                  .fake-numeric
//                    | 1.5 GB
//                    .fake-numeric-arrows
//                      .fake-arrow-up
//                      .fake-arrow-down
//                .fake-numeric-wrapper
//                  .fake-numeric
//                    | 700 GB
//                    .fake-numeric-arrows
//                      .fake-arrow-up
//                      .fake-arrow-down
//              p Allocate your machine’s resources exactly as you like. Remember that if you give Golem all of your processing power you will not be able to use it at <span class='text-nowrap'>the same time.</span>
//        .design-pass--footer
//          .design-pass--status
//            .design-pass--status-circle
//              .pulse
//            | 240 Nodes
//          .design-pass--button Start Golem
//      li.dps--tasks.taks-in-progress(data-screen-tab='tasks')
//        .current-tasks-view
//          ul.task-list.current-task-list
//            li.task-active(data-active-task)
//              .task-arrow
//                .icon-golem-right-arrow
//              .task-active-layer
//              +local-image('golem/blender-eye.png', active)(alt='' class='task-blender')
//              .task-title HMD Model Bake 3.5
//              .task-details
//                .task-active-details
//                  span.task--minutes 1
//                  | :
//                  span.task--seconds 15
//                  |  Remaining
//                .task-inactive-details
//                  | 2:30
//                  span.hl-divider
//                  | Just now
//            li
//              .task-arrow
//                .icon-golem-right-arrow
//              .task-title Planet Scene Light vers
//              +local-image('golem/blender-eye.png', active)(alt='' class='task-blender')
//              .task-details
//                | 1:23:15
//                span.hl-divider
//                | 3:15PM Yesterday
//            li
//              .task-arrow
//                .icon-golem-right-arrow
//              .task-title HMD Model Bake 3.4
//              +local-image('golem/blender-eye.png', active)(alt='' class='task-blender')
//              .task-details
//                | 18:15
//                span.hl-divider
//                | 1:01PM 27 Feb
//            li
//              .task-arrow
//                .icon-golem-right-arrow
//              .task-title HMD Model Bake 3.3
//              +local-image('golem/blender-eye.png', active)(alt='' class='task-blender')
//              .task-details
//                | 21:51
//                span.hl-divider
//                | 11:12AM 24 Feb
//            li.task-spline
//        .design-pass--footer
//          .design-pass--status
//            .design-pass--status-circle.animate
//              .pulse
//            | 1 task in progress
//          .design-pass--eye
//            .icon-golem-eye
