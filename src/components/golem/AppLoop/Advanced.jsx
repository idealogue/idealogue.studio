import React, { useRef, useState, useEffect, useMemo } from 'react'
import styled, { css } from 'sc'
import arc from '$utils/arc'
import { TweenMax } from 'gsap'
import useMounted from '$hooks/useMounted'

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
    text-align: center;
`

const Arrow = styled.div`
    border-bottom: solid #4e4e4e;
    border-left: solid transparent;
    border-right: solid transparent;
    border-width: 0 3px 5px;
    height: 0;
    margin: 0 auto;
    width: 0;

    ${({ down }) => !!down && css`
        border-left: solid transparent;
        border-right: solid transparent;
        border-top: solid #4e4e4e;
        border-width: 5px 3px 0;
        margin-top: 4px;
    `}
`

const UnstyledArrows = (props) => (
    <div {...props}>
        <div>
            <Arrow />
            <Arrow down />
        </div>
    </div>
)

const Arrows = styled(UnstyledArrows)`
    display: flex;
    align-items: center;
    height: 100%;
    width: 15px;

    > div {
        flex: 0 0 100%;
    }
`

const UnstyledNumeric = ({ children, ...props }) => (
    <Input {...props}>
        <div>
            {children}
        </div>
        <div>
            <Arrows />
        </div>
    </Input>
)

const Numeric = styled(UnstyledNumeric)`
    background-color: #f8f8f8;
    border-color: #d5d5d5;
    color: #4e4e4e;
    display: flex;
    margin-top: 24px;
    text-align: center;

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

const Circle = ({ angle: angleProp }) => {
    const [angle, setAngle] = useState(angleProp)

    const angleRef = useRef({
        angle: angleProp,
    })

    const isMounted = useMounted()

    useEffect(() => {
        const tween = TweenMax.to(angleRef.current, 0.5, {
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

    const d = useMemo(() => (
        arc(null, 50, 50, 48, 0, angle, 0)
    ), [angle])

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" stroke="#eff0f1" strokeWidth="2" fill="none" />
            <path d={d} fill="none" stroke="#37c481" strokeLinecap="round" strokeWidth="4" />
        </svg>
    )
}

const UnstyledGraph = ({ children, used, ...props }) => (
    <div {...props}>
        <GraphLabel>
            {children}
        </GraphLabel>
        <Circle angle={used * 360} />
    </div>
)

const Graph = styled(UnstyledGraph)`
    position: relative;

    svg {
        display: block;
        height: 60px;
        margin: 0 auto;
        width: 60px;

        height: 100px;
        width: 100px;
    }
`

const UnstyledResource = ({ reflect, usage, total, unit, children, ...props }) => (
    <div {...props}>
        <Graph used={reflect ? usage / total : 0}>
            {children}
        </Graph>
        <Numeric>
            {usage} {unit}
        </Numeric>
    </div>
)

const Resource = styled(UnstyledResource)`
    width: 28%;
    text-align: center;
`

const UnstyledAdvanced = ({ cpu, ram, disk, ...props }) => (
    <div {...props}>
        <Row>
            <Dropdown>
                <span>Custom</span>
                <Caret />
            </Dropdown>
            <OutlinedButton>
                Save as Preset
            </OutlinedButton>
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
                Allocate your machine’s resources exactly as you like. Remember that if you give Golem all of your processing power you will not be able to use it at the same time.
            </p>
        </Row>
    </div>
)

const Advanced = styled(UnstyledAdvanced)`
    padding: 25px 0;

    p {
        color: #cbcbcb;
        font-size: 10px;
        line-height: 1.5em;
        padding: 0 20px;
        text-align: center;
    }
`

export default Advanced
