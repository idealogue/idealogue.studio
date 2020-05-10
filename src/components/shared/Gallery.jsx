import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Swipeable } from 'react-swipeable'
import styled from 'sc'
import gsap from 'gsap'
import useMounted from '$hooks/useMounted'

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
    padding: 0 24px;
`

export const slideIndex = (at, n) => ((at % n) + n) % n

const windowSize = 5

const UnstyledGallery = ({
    children,
    defaultSlide,
    onChange,
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
    }, [slide])

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
    }, [])

    const onPrev = useCallback(() => {
        animate(Direction.LEFT)
    }, [])

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

                            return (
                                <SlideContainer key={key}>
                                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                                    <div onClick={(key < slide && onPrev) || (key > slide && onNext) || undefined}>
                                        {childArr[slideIndex(key, count)]}
                                    </div>
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
