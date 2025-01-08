import { Container } from '$shared/Container'
import { SM } from '$utils/css'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useInViewport } from 'react-in-viewport'
import styled, { css } from 'styled-components'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import Glyph, { BOOK, PLUS, SETTINGS } from '~/components/shared/Glyph'
import { useMounted } from '~/hooks/useMounted'
import { Advanced } from './Advanced'
import { Balance } from './Balance'
import { Button } from './Button'
import { Footer } from './Footer'
import { History } from './History'
import { Nav, NavItemId } from './Nav'
import { ResourceSlider } from './ResourceSlider'
import { Status } from './Status'
import { Tasks } from './Tasks'
import { TouchIndicator } from './TouchIndicator'

const DUR = 300

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
        /* @todo Determine if we render it on mobile. This could be the default. */
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

const Tab = styled.div<{ $active?: boolean }>`
    font-size: 18px;
    font-weight: bold;
    line-height: 1em;
    position: relative;
    transition: ${DUR}ms color;

    & + & {
        margin-left: 30px;
    }

    ${({ $active = false }) =>
        $active &&
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

interface UnderlineProps {
    x: number
    width: number
}

function Underline({ x, width }: UnderlineProps) {
    return <UnderlineRoot $x={x} $width={width} />
}

const UnderlineRoot = styled.div<{ $x: number; $width: number }>`
    background-color: #016ac9;
    bottom: 0;
    height: 1px;
    left: ${({ $x }) => 107 + $x}px;
    position: absolute;
    top: 60px;
    transition: ${DUR}ms;
    transition-property: width, left;
    width: ${({ $width }) => $width}px;
`

const ScreenWrapper = styled.div`
    position: relative;
`

const Body = styled(ScreenWrapper)`
    flex-grow: 1;
`

const Screen = styled.div<{ $active?: boolean }>`
    opacity: 1;
    visibility: visible;
    transition: ${DUR}ms;

    ${({ $active = false }) =>
        !$active &&
        css`
            opacity: 0;
            position: absolute;
            top: 0;
            visibility: hidden;
            width: 100%;
        `}
`

type ScreenItemId = 'network' | 'tasks'

class SleepSustain {
    timeout: number | undefined

    async run(millis = 1000) {
        return new Promise<void>((resolve) => {
            this.timeout = window.setTimeout(() => {
                resolve()
            }, millis)
        })
    }

    cancel() {
        if (typeof this.timeout === 'number') {
            clearTimeout(this.timeout)

            this.timeout = undefined
        }
    }
}

interface Frame {
    balanceMode: number
    cpu: boolean
    disk: boolean
    sustain: number
    networkScreen: NavItemId
    ram: boolean
    resourcePos: number
    showResourceSliderTouch: boolean
    screen: ScreenItemId
}

const frames: [Frame, ...Partial<Frame>[]] = [
    {
        balanceMode: 0,
        cpu: false,
        disk: false,
        sustain: 3000,
        networkScreen: 'resources',
        ram: false,
        resourcePos: 18,
        showResourceSliderTouch: false,
        screen: 'network',
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
        networkScreen: 'history',
        sustain: 2000,
    },
    {
        networkScreen: 'advanced',
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
        screen: 'tasks',
        sustain: 4500,
    },
]

const useFrame = (inViewport: boolean): [Frame, () => void] => {
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
            ) as Frame,
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

export function AppLoop() {
    const rootRef = useRef<HTMLDivElement>(null)

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

    const networkTabRef = useRef<HTMLDivElement>(null)

    const tasksTabRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const { current: networkTab } = networkTabRef

        const { current: tasksTab } = tasksTabRef

        if (!networkTab || !tasksTab) {
            return
        }

        const el = screen === 'network' ? networkTab : tasksTab

        const rect = el.getBoundingClientRect()

        if (!el.parentElement) {
            return
        }

        const parentRect = el.parentElement.getBoundingClientRect()

        setUnderlineProps([
            Math.round(rect.left - parentRect.left),
            Math.round(rect.width),
        ])
    }, [screen])

    return (
        <AppLoopRoot ref={rootRef}>
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
                                    $active={screen === 'network'}
                                    ref={networkTabRef}
                                >
                                    Network
                                    {screen === 'network' && (
                                        <TouchIndicator
                                            center
                                            immitateRelease
                                            visible={screen === 'network'}
                                        />
                                    )}
                                </Tab>
                                <Tab
                                    $active={screen === 'tasks'}
                                    ref={tasksTabRef}
                                >
                                    Tasks
                                    {screen === 'tasks' && (
                                        <TouchIndicator
                                            center
                                            immitateRelease
                                            visible={screen === 'tasks'}
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
                    <Screen $active={screen === 'network'}>
                        <Balance
                            gnt={balanceMode < 2}
                            converted={balanceMode % 2 === 1}
                        />
                        <Nav itemId={networkScreen} />
                        <ScreenWrapper>
                            <Screen $active={networkScreen === 'resources'}>
                                <ResourceSlider
                                    onTransitionFinish={next}
                                    position={resourcePos}
                                    showTouch={showResourceSliderTouch}
                                />
                            </Screen>
                            <Screen $active={networkScreen === 'history'}>
                                <History />
                            </Screen>
                            <Screen $active={networkScreen === 'advanced'}>
                                <Advanced cpu={cpu} disk={disk} ram={ram} />
                            </Screen>
                        </ScreenWrapper>
                    </Screen>
                    <Screen $active={screen === 'tasks'}>
                        <Tasks animate={screen === 'tasks'} />
                    </Screen>
                </Body>
                <Footer>
                    <Status processing={screen === 'tasks'}>
                        {screen === 'network'
                            ? '240 Nodes'
                            : '1 task in progress'}
                    </Status>
                    {screen === 'network' ? (
                        <Button>Start Golem</Button>
                    ) : (
                        <div />
                    )}
                </Footer>
            </DesignPass>
            <CaptionedContainer caption="A loop of the Golem app main views" />
        </AppLoopRoot>
    )
}

const AppLoopRoot = styled(Container)`
    color: #cbcbcb;

    p {
        font-family: 'Roboto', sans-serif;
    }
`
