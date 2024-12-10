import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { useInViewport } from 'react-in-viewport'
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
import TouchIndicator from './TouchIndicator'

const DUR = 300

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
    display: flex;
    flex-direction: column;
    height: 716px;
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
    position: relative;
    transition: ${DUR}ms color;

    & + & {
        margin-left: 30px;
    }

    ${({ active }) =>
        !!active &&
        css`
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

const HeaderWrapper = styled.div`
    position: relative;
`

const UnstyledUnderline = ({ x, width, ...props }) => <div {...props} />

const Underline = styled(UnstyledUnderline)`
    background-color: #016ac9;
    bottom: 0;
    height: 1px;
    left: ${({ x }) => 107 + x}px;
    position: absolute;
    top: 60px;
    transition: ${DUR}ms;
    transition-property: width, left;
    width: ${({ width }) => width}px;
`

const ScreenWrapper = styled.div`
    position: relative;
`

const Body = styled(ScreenWrapper)`
    flex-grow: 1;
`

const Screen = styled.div`
    opacity: 1;
    visibility: visible;
    transition: ${DUR}ms;

    ${({ active }) =>
        !active &&
        css`
            opacity: 0;
            position: absolute;
            top: 0;
            visibility: hidden;
            width: 100%;
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
        sustain: 3000,
        networkScreen: RESOURCES,
        ram: false,
        resourcePos: 18,
        showResourceSliderTouch: false,
        screen: NETWORK,
    },
    {
        balanceMode: 1,
        sustain: 1500,
    },
    {
        balanceMode: 0,
    },
    {
        balanceMode: 2,
    },
    {
        balanceMode: 3,
    },
    {
        balanceMode: 2,
    },
    {
        balanceMode: 0,
    },
    {
        showResourceSliderTouch: true,
        sustain: 500,
    },
    {
        resourcePos: 92,
        sustain: Number.POSITIVE_INFINITY,
    },
    {
        sustain: 500,
    },
    {
        resourcePos: 10,
        sustain: Number.POSITIVE_INFINITY,
    },
    {
        sustain: 500,
    },
    {
        resourcePos: 18,
        sustain: Number.POSITIVE_INFINITY,
    },
    {
        sustain: 500,
    },
    {
        showResourceSliderTouch: false,
        sustain: 700,
    },
    {
        networkScreen: HISTORY,
        sustain: 2000,
    },
    {
        networkScreen: ADVANCED,
        sustain: 0,
    },
    {
        cpu: true,
        sustain: 200,
    },
    {
        ram: true,
        sustain: 200,
    },
    {
        disk: true,
        sustain: 2000,
    },
    {
        screen: TASKS,
        sustain: 4500,
    },
]

const useFrame = (inViewport) => {
    const [frameNo, setFrameNo] = useState(0)

    const sustainRef = useRef(new SleepSustain())

    const frame = useMemo(
        () =>
            frames.slice(0, frameNo + 1).reduce(
                (memo, frame) => ({
                    ...memo,
                    ...frame,
                }),
                {}
            ),
        [frameNo]
    )

    const isMounted = useMounted()

    const next = useCallback(() => {
        if (isMounted()) {
            setFrameNo((current) => (current + 1) % frames.length)
        }
    }, [isMounted])

    useEffect(() => {
        const { current: sustain } = sustainRef

        if (inViewport) {
            if (frame.sustain !== Number.POSITIVE_INFINITY) {
                sustain.run(frame.sustain).then(next)
            }
        }

        return () => {
            sustain.cancel()
        }
    }, [frame, isMounted, next, inViewport])

    return useMemo(() => [frame, next], [frame, next])
}

const PlusGlyph = styled(Glyph).attrs(() => ({ source: PLUS }))`
    && {
        display: none;

        @media (min-width: 455px) {
            display: block;
        }
    }
`

const BookGlyph = styled(Glyph).attrs(() => ({ source: BOOK }))`
    && {
        display: none;

        @media (min-width: 420px) {
            display: block;
        }
    }
`
const SettingsGlyph = styled(Glyph).attrs(() => ({ source: SETTINGS }))`
    && {
        display: none;

        @media (min-width: 386px) {
            display: block;
        }
    }
`

const AppLoop = (props) => {
    const rootRef = useRef()

    const { inViewport } = useInViewport(rootRef, undefined, undefined, {})

    const [
        {
            balanceMode,
            cpu,
            disk,
            networkScreen,
            ram,
            resourcePos,
            screen,
            showResourceSliderTouch,
        },
        next,
    ] = useFrame(inViewport)

    const [[underlineX, underlineWidth], setUnderlineProps] = useState([0, 0])

    const networkTabRef = useRef()

    const tasksTabRef = useRef()

    useEffect(() => {
        const { current: networkTab } = networkTabRef

        const { current: tasksTab } = tasksTabRef

        if (!networkTab || !tasksTab) {
            return
        }

        const el = screen === NETWORK ? networkTab : tasksTab

        const rect = el.getBoundingClientRect()

        const parentRect = el.parentElement.getBoundingClientRect()

        setUnderlineProps([
            Math.round(rect.left - parentRect.left),
            Math.round(rect.width),
        ])
    }, [screen])

    return (
        <Root {...props} ref={rootRef}>
            <DesignPass>
                <HeaderWrapper>
                    <Header>
                        <HeaderInner>
                            <HeaderButtons>
                                <div />
                                <div />
                                <div />
                            </HeaderButtons>
                            <Tabs>
                                <Tab
                                    active={screen === NETWORK}
                                    ref={networkTabRef}
                                >
                                    Network
                                    {screen === NETWORK && (
                                        <TouchIndicator
                                            center
                                            immitateRelease
                                            visible={screen === NETWORK}
                                        />
                                    )}
                                </Tab>
                                <Tab
                                    active={screen === TASKS}
                                    ref={tasksTabRef}
                                >
                                    Tasks
                                    {screen === TASKS && (
                                        <TouchIndicator
                                            center
                                            immitateRelease
                                            visible={screen === TASKS}
                                        />
                                    )}
                                </Tab>
                            </Tabs>
                        </HeaderInner>
                        <HeaderIcons>
                            <PlusGlyph />
                            <BookGlyph />
                            <SettingsGlyph />
                        </HeaderIcons>
                    </Header>
                    <Underline width={underlineWidth} x={underlineX} />
                </HeaderWrapper>
                <Body>
                    <Screen active={screen === NETWORK}>
                        <Balance
                            gnt={balanceMode < 2}
                            converted={balanceMode % 2 === 1}
                        />
                        <Nav active={networkScreen} />
                        <ScreenWrapper>
                            <Screen active={networkScreen === RESOURCES}>
                                <ResourceSlider
                                    onTransitionFinish={next}
                                    position={resourcePos}
                                    showTouch={showResourceSliderTouch}
                                />
                            </Screen>
                            <Screen active={networkScreen === HISTORY}>
                                <History />
                            </Screen>
                            <Screen active={networkScreen === ADVANCED}>
                                <Advanced cpu={cpu} disk={disk} ram={ram} />
                            </Screen>
                        </ScreenWrapper>
                    </Screen>
                    <Screen active={screen === TASKS}>
                        <Tasks animate={screen === TASKS} />
                    </Screen>
                </Body>
                <Footer>
                    <Status processing={screen === TASKS}>
                        {screen === NETWORK
                            ? '240 Nodes'
                            : '1 task in progress'}
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
