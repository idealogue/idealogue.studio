import { FluidImage } from '$shared/FluidImage'
import gsap, { Linear } from 'gsap'
import React, {
    ComponentProps,
    Fragment,
    HTMLAttributes,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import styled from 'styled-components'
import Image from '~/components/pages/golem/Image'
import Glyph, { SLIDE_RIGHT } from '~/components/shared/Glyph'
import useMounted from '~/hooks/useMounted'
import {
    Body,
    Details,
    DoneAt,
    Eta,
    Task as HistoryTask,
    Separator,
    Title,
} from './History'

const IconWrapper = styled.div`
    height: 24px;
    height: 32px;
    margin-right: 18px;
    margin-right: 25px;
    width: 24px;
    width: 32px;
`

const Left = styled.div`
    align-items: center;
    display: flex;
`

function SlideRight() {
    return (
        <SlideRightRoot>
            <div>
                <Glyph source={SLIDE_RIGHT} />
            </div>
        </SlideRightRoot>
    )
}

const SlideRightRoot = styled.div`
    > div {
        width: 8px;
    }
`

function getCompletenessCloakAttrs({
    $progress,
}: {
    $progress: number
}): ComponentProps<'div'> {
    return {
        style: {
            width: `${Math.min(100, $progress * 100)}%`,
        },
    }
}

const CompletenessCloak = styled.div.attrs<{ $progress: number }>(
    getCompletenessCloakAttrs
)`
    background-color: #e3f3ff;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
`

interface TaskProps {
    title: string
    eta: ReactNode
    doneAt?: string
    completness?: number
}

function Task({ title, eta, doneAt, completness }: TaskProps) {
    return (
        <TaskRoot as="div">
            {completness != null && (
                <CompletenessCloak $progress={completness} />
            )}
            <Body>
                <Left>
                    <IconWrapper>
                        <FluidImage src={Image.BLENDER} />
                    </IconWrapper>
                    <div>
                        <Title>{title}</Title>
                        <Details>
                            <Eta>{eta}</Eta>
                            {!!doneAt && (
                                <Fragment>
                                    <Separator />
                                    <DoneAt>{doneAt}</DoneAt>
                                </Fragment>
                            )}
                        </Details>
                    </div>
                </Left>
                <SlideRight />
            </Body>
        </TaskRoot>
    )
}

const TaskRoot = styled(HistoryTask)`
    position: relative;

    ${Body} {
        position: relative;
    }
`

function Remaining(props: HTMLAttributes<HTMLSpanElement>) {
    return <RemainingRoot {...props} />
}

const RemainingRoot = styled.span`
    color: #016ac9;
`

interface TasksProps {
    animate?: boolean
    remaining?: number
    total?: number
}

export function Tasks({
    animate = false,
    remaining: remainingProp = 75,
    total = 100,
}: TasksProps) {
    const [remaining, setRemaining] = useState(remainingProp)

    const remainingRef = useRef({
        remaining: remainingProp,
    })

    const isMounted = useMounted()

    useEffect(() => {
        remainingRef.current.remaining = remainingProp

        if (animate) {
            const tween = gsap.to(remainingRef.current, remainingProp, {
                remaining: 0,
                onUpdate: () => {
                    if (isMounted()) {
                        setRemaining(remainingRef.current.remaining)
                    }
                },
                ease: Linear.easeNone,
            })

            return () => {
                tween.kill()
            }
        }

        return () => {
            // No animate => no op.
        }
    }, [remainingProp, animate, isMounted])

    const remainingFormatted = useMemo(
        () =>
            new Date(Math.floor(remaining) * 1000).toISOString().substr(15, 4),
        [remaining]
    )

    return (
        <div>
            <Task
                eta={<Remaining>{remainingFormatted}</Remaining>}
                title="HMD Model Bake 3.5"
                completness={(total - remaining) / total}
            />
            <Task
                doneAt="3:15PM Yesterday"
                eta="1:23:15"
                title="Planet Scene Light vers"
            />
            <Task
                doneAt="1:01PM 27 Feb"
                eta="18:15"
                title="HMD Model Bake 3.4"
            />
            <Task
                doneAt="11:12AM 24 Feb"
                eta="21:51"
                title="HMD Model Bake 3.3"
            />
        </div>
    )
}
