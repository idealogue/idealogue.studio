import gsap from 'gsap'
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { useMounted } from '~/hooks/useMounted'
import { arc } from '~/utils/arc'

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 25px;

    & + & {
        margin-top: 24px;
    }
`

const Caret = styled.div`
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #4e4e4e;
    height: 0;
    width: 0;
`

const Input = styled.div`
    border: 1px solid;
    border-radius: 2px;
    font-size: 1.2em;
    line-height: 2.2em;
`

const Dropdown = styled(Input)`
    align-items: center;
    background-color: #f8f8f8;
    border-color: #d5d5d5;
    color: #4e4e4e;
    display: flex;
    justify-content: space-between;
    flex: 0 1 54%;
    padding: 0 1em;
`

const OutlinedButton = styled(Input)`
    border-color: #016ac9;
    color: #016ac9;
    flex: 0 1 46%;
    font-weight: bold;
    margin-left: 25px;
    min-width: 0%;
    overflow: hidden;
    padding: 0 4px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const Arrow = styled.div<{ $down?: boolean }>`
    border-bottom: solid #4e4e4e;
    border-left: solid transparent;
    border-right: solid transparent;
    border-width: 0 3px 5px;
    height: 0;
    margin: 0 auto;
    width: 0;

    ${({ $down = false }) =>
        $down &&
        css`
            border-left: solid transparent;
            border-right: solid transparent;
            border-top: solid #4e4e4e;
            border-width: 5px 3px 0;
            margin-top: 4px;
        `}
`

function Arrows() {
    return (
        <ArrowsRoot>
            <div>
                <Arrow />
                <Arrow $down />
            </div>
        </ArrowsRoot>
    )
}

const ArrowsRoot = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 15px;

    > div {
        flex: 0 0 100%;
    }
`

interface NumericProps {
    children?: ReactNode
}

function Numeric({ children }: NumericProps) {
    return (
        <NumericRoot>
            <div>{children}</div>
            <div>
                <Arrows />
            </div>
        </NumericRoot>
    )
}

const NumericRoot = styled(Input)`
    background-color: #f8f8f8;
    border-color: #d5d5d5;
    color: #4e4e4e;
    display: flex;
    margin-top: 24px;
    text-align: center;
    white-space: nowrap;

    > div {
        flex: 1;
    }

    > div + div {
        border-left: 1px solid #d5d5d5;
        flex: 0;
    }
`

const GraphLabel = styled.div`
    color: #4e4e4e;
    font-weight: 500;
    left: 50%;
    line-height: 1em;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
`

interface CircleProps {
    angle: number
}

const Circle = ({ angle: angleProp }: CircleProps) => {
    const [angle, setAngle] = useState(angleProp)

    const angleRef = useRef({
        angle: angleProp,
    })

    const isMounted = useMounted()

    useEffect(() => {
        const tween = gsap.to(angleRef.current, 0.5, {
            angle: angleProp,
            onUpdate: () => {
                if (isMounted()) {
                    setAngle(Math.round(angleRef.current.angle))
                }
            },
        })

        return () => {
            tween.kill()
        }
    }, [angleProp, isMounted])

    const d = useMemo(() => arc('', 50, 50, 48, 0, angle, 0), [angle])

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" stroke="#eff0f1" strokeWidth="2" fill="none" />
            <path d={d} fill="none" stroke="#37c481" strokeLinecap="round" strokeWidth="4" />
        </svg>
    )
}

interface GraphProps {
    children: ReactNode
    used: number
}

function Graph({ children, used }: GraphProps) {
    return (
        <GraphRoot>
            <GraphLabel>{children}</GraphLabel>
            <Circle angle={used * 360} />
        </GraphRoot>
    )
}

const GraphRoot = styled.div`
    position: relative;

    svg {
        display: block;
        /* height: 60px; */
        height: 100px;
        margin: 0 auto;
        max-width: 100%;
        /* width: 60px; */
        width: 100px;
    }
`

interface ResourceProps {
    reflect?: boolean
    usage: number
    total: number
    unit: string
    children: ReactNode
}

function Resource({ reflect = false, usage, total, unit, children }: ResourceProps) {
    return (
        <ResourceRoot>
            <Graph used={reflect ? usage / total : 0}>{children}</Graph>
            <Numeric>
                <span>
                    {usage} {unit}
                </span>
            </Numeric>
        </ResourceRoot>
    )
}

const ResourceRoot = styled.div`
    width: 28%;
    text-align: center;

    ${NumericRoot} span {
        white-space: nowrap;
    }
`

interface AdvancedProps {
    cpu?: boolean
    ram?: boolean
    disk?: boolean
}

export function Advanced({ cpu, ram, disk }: AdvancedProps) {
    return (
        <AdvancedRoot>
            <Row>
                <Dropdown>
                    <span>Custom</span>
                    <Caret />
                </Dropdown>
                <OutlinedButton>Save as Preset</OutlinedButton>
            </Row>
            <Row>
                <Resource reflect={cpu} usage={4} unit="cores" total={6}>
                    CPU
                </Resource>
                <Resource reflect={ram} usage={1.8} unit="GB" total={4}>
                    RAM
                </Resource>
                <Resource reflect={disk} usage={700} unit="GB" total={2100}>
                    Disk
                </Resource>
            </Row>
            <Row>
                <p>
                    Allocate your machine&apos;s resources exactly as you like. Remember that if you
                    give Golem all of your processing power you will not be able to use it at the
                    same time.
                </p>
            </Row>
        </AdvancedRoot>
    )
}

const AdvancedRoot = styled.div`
    padding: 25px 0;

    && p {
        color: #cbcbcb;
        font-size: 10px;
        line-height: 1.5em;
        max-height: 4.5em;
        overflow: hidden;
        padding: 0 20px;
        text-align: center;
    }
`
