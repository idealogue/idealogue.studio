import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react'
import { Swipeable } from 'react-swipeable'
import styled from 'sc'
import gsap from 'gsap'
import useMounted from '$hooks/useMounted'
import Cursor from '$shared/Cursor'

const Direction = {
    RIGHT: 'right',
    LEFT: 'left',
}

const Inner = styled.div`
    transform: translateX(${({ dx }) => dx * 100}%);
    width: 100%;
`

const Tape = styled(Swipeable)`
    display: flex;
    justify-content: space-between;
    width: ${({ numSlides }) => numSlides * 100}%;
`

export const SlideContainer = styled.div`
    flex-basis: 100%;
    padding: 0 ${({ gutter }) => Math.floor(gutter / 2)}px;
`

export const slideIndex = (at, n) => ((at % n) + n) % n

const windowSize = 5

const UnstyledGallery = ({
    children,
    defaultSlide,
    onChange,
    currentWingSize = 0,
    gutter = 48,
    ...props
}) => {
    const [slide, setSlide] = useState(defaultSlide)

    const childArr = React.Children.toArray(children)

    const count = React.Children.count(children)

    const n = windowSize * 2 - 1

    const springRef = useRef()

    const isMounted = useMounted()

    const isSlidingRef = useRef(false)

    useEffect(() => {
        const { current: spring } = springRef

        if (!isSlidingRef.current) {
            return
        }

        if (spring) {
            gsap.to(spring, {
                duration: 0.35,
                transform: 'translateX(0%)',
                onComplete: () => {
                    if (isMounted()) {
                        isSlidingRef.current = false
                    }
                },
            })
        }

        if (onChange) {
            onChange(slide)
        }
    }, [slide, isMounted, onChange])

    const animate = useCallback((direction) => {
        const forward = direction === Direction.RIGHT

        const { current: spring } = springRef

        const { current: isSliding } = isSlidingRef

        const from = forward ? 100 : -100

        if (spring && !isSliding) {
            gsap.set(spring, {
                transform: `translateX(${from}%)`,
            })
            isSlidingRef.current = true
            setSlide((s) => s + (forward ? 1 : -1))
        }
    }, [])

    const onNext = useCallback(() => {
        animate(Direction.RIGHT)
    }, [animate])

    const onPrev = useCallback(() => {
        animate(Direction.LEFT)
    }, [animate])

    const directionToClick = useMemo(() => ({
        right: onNext,
        left: onPrev,
    }), [onNext, onPrev])

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div {...props}>
            <Inner dx={-(n - 1) / 2}>
                <div ref={springRef}>
                    <Tape
                        onSwipedLeft={onNext}
                        onSwipedRight={onPrev}
                        numSlides={n}
                    >
                        {[...Array(n)].map((_, index) => {
                            const key = slide - ((n - 1) / 2) + index

                            const active = Math.abs(slide - key) <= currentWingSize

                            const arrowDirection = !active ? (slide > key ? 'left' : 'right') : 'none'

                            return (
                                <SlideContainer key={key} gutter={gutter}>
                                    <Cursor
                                        direction={arrowDirection}
                                        onClick={directionToClick[arrowDirection]}
                                    >
                                        {React.cloneElement(childArr[slideIndex(key, count)], {
                                            active,
                                        })}
                                    </Cursor>
                                </SlideContainer>
                            )
                        })}
                    </Tape>
                </div>
            </Inner>
        </div>
    )
}

const Gallery = styled(UnstyledGallery)`
    margin: 0 auto;
    width: 100%;
`

export default Gallery
