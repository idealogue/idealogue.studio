import React, { useState, useCallback, useMemo, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Container from '$shared/Container'
import CaptionedContainer from '$shared/CaptionedContainer'
import { SM } from '$utils/css'
import Glyph, { BOOK, PLUS, SETTINGS } from '$shared/Glyph'
import Balance from './Balance'
import Nav, { RESOURCES, HISTORY, ADVANCED } from './Nav'
import Footer from './Footer'
import Status from './Status'
import Button from './Button'
import ResourceSlider from './ResourceSlider'
import History from './History'
import Advanced from './Advanced'
import Tasks from './Tasks'
import useMounted from '$hooks/useMounted'

const Root = styled(Container)`
    color: #cbcbcb;

    p {
        font-family: 'Roboto', sans-serif;
    }
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
    /* padding: 0 18px; */
    padding: 0 25px;
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

const NETWORK = 'network'

const TASKS = 'tasks'

class SleepSustain {
    run(millis = 1000) {
        const self = this

        return new Promise((resolve) => {
            self.timeout = setTimeout(() => {
                resolve()
            }, millis)
        })
    }

    cancel() {
        clearTimeout(this.timeout)
    }
}

const frames = [
    {
        balanceMode: 0,
        cpu: false,
        disk: false,
        sustain: 1000,
        networkScreen: RESOURCES,
        ram: false,
        resourcePos: 18,
        screen: NETWORK,
    }, {
        balanceMode: 1,
    }, {
        balanceMode: 0,
    }, {
        balanceMode: 2,
    }, {
        balanceMode: 3,
    }, {
        balanceMode: 2,
    }, {
        balanceMode: 0,
    }, {
        resourcePos: 92,
    }, {
        resourcePos: 10,
    }, {
        resourcePos: 18,
    }, {
        networkScreen: HISTORY,
    }, {
        networkScreen: ADVANCED,
    }, {
        cpu: true,
        sustain: 200,
    }, {
        ram: true,
        sustain: 200,
    }, {
        disk: true,
        sustain: 10000,
    }, {
        screen: TASKS,
        sustain: 1000,
    },
]

const useFrame = () => {
    const [frameNo, setFrameNo] = useState(0)

    const frame = useMemo(() => (
        frames.slice(0, frameNo + 1).reduce((memo, frame) => ({
            ...memo,
            ...frame,
        }), {})
    ), [frameNo])

    const isMounted = useMounted()

    useEffect(() => {
        const sustain = new SleepSustain()

        sustain.run(frame.sustain).then(() => {
            if (isMounted()) {
                setFrameNo((current) => (current + 1) % frames.length)
            }
        })

        return () => {
            sustain.cancel()
        }
    }, [frame, isMounted])

    return frame
}

const AppLoop = (props) => {
    const {
        balanceMode,
        cpu,
        disk,
        networkScreen,
        ram,
        resourcePos,
        screen,
    } = useFrame()

    return (
        <Root {...props}>
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
                        <Balance
                            gnt={balanceMode < 2}
                            converted={balanceMode % 2 === 1}
                        />
                        <Nav active={networkScreen} />
                        <div>
                            <Screen active={networkScreen === RESOURCES}>
                                <ResourceSlider position={resourcePos} />
                            </Screen>
                            <Screen active={networkScreen === HISTORY}>
                                <History />
                            </Screen>
                            <Screen active={networkScreen === ADVANCED}>
                                <Advanced
                                    cpu={cpu}
                                    disk={disk}
                                    ram={ram}
                                />
                            </Screen>
                        </div>
                    </Screen>
                    <Screen active={screen === TASKS}>
                        <Tasks
                            animate={screen === TASKS}
                        />
                    </Screen>
                </Body>
                <Footer>
                    <Status processing={screen === TASKS}>
                        {screen === NETWORK ? '240 Nodes' : '1 task in progress'}
                    </Status>
                    {screen === NETWORK ? (
                        <Button>Start Golem</Button>
                    ) : (
                        <div />
                    )}
                </Footer>
            </DesignPass>
            <CaptionedContainer caption="A loop of the Golem app main views" />
        </Root>
    )
}

export default AppLoop
