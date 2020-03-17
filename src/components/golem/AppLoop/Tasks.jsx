import React, { useEffect, Fragment, useState, useCallback, useRef, useMemo } from 'react'
import styled from 'sc'
import { Task as HistoryTask, Title, Separator, Details, Eta, DoneAt, Body } from './History'
import Image from '$golem/Image'
import FluidImage from '$shared/FluidImage'
import Glyph, { SLIDE_RIGHT } from '$shared/Glyph'
import { TweenMax } from 'gsap'

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

const UnstyledSlideRight = (props) => (
    <div {...props}>
        <div>
            <Glyph source={SLIDE_RIGHT} />
        </div>
    </div>
)

const SlideRight = styled(UnstyledSlideRight)`
    > div {
        width: 8px;
    }
`

const CompletenessCloak = styled.div.attrs(({ progress }) => ({
    style: {
        width: `${Math.min(100, progress * 100)}%`,
    },
}))`
    background-color: #e3f3ff;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
`

const UnstyledTask = ({ title, eta, doneAt, completness, ...props }) => (
    <HistoryTask as="div" {...props}>
        {completness !== null && (
            <CompletenessCloak progress={completness} />
        )}
        <Body>
            <Left>
                <IconWrapper>
                    <FluidImage src={Image.BLENDER} alt="" />
                </IconWrapper>
                <div>
                    <Title>
                        {title}
                    </Title>
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
    </HistoryTask>
)

const Task = styled(UnstyledTask)`
    position: relative;

    ${Body} {
        position: relative;
    }
`

const UnstyledRemaining = ({ children, ...props }) => (
    <span {...props}>
        {children}
    </span>
)

const Remaining = styled(UnstyledRemaining)`
    color: #016ac9;
`

const UnstyledTasks = ({ animate, remaining: remainingProp = 75, total = 100, ...props }) => {
    const [remaining, setRemaining] = useState(remainingProp)

    const remainingRef = useRef({
        remaining: remainingProp,
    })

    const onUpdate = useCallback(() => {
        setRemaining(remainingRef.current.remaining)
    }, [])

    useEffect(() => {
        remainingRef.current.remaining = remainingProp

        if (animate) {
            const tween = TweenMax.to(remainingRef.current, remainingProp, {
                remaining: 0,
                onUpdate,
            })

            return () => {
                tween.kill()
            }
        }

        return () => {
            // No animate => no op.
        }
    }, [remainingProp, animate])

    const remainingFormatted = useMemo(() => (
        new Date(Math.floor(remaining) * 1000).toISOString().substr(15, 4)
    ), [remaining])

    return (
        <div {...props}>
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

const Tasks = styled(UnstyledTasks)``

export default Tasks
