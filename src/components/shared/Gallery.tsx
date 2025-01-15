import { useMounted } from '$hooks/useMounted'
import gsap from 'gsap'
import React, {
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import {
    SwipeableProps as NativeSwipeableProps,
    useSwipeable,
} from 'react-swipeable'
import styled from 'styled-components'
import { Cursor } from '~/components/shared/Cursor'

interface OwnSwipeableProps {
    children?: ReactNode
    className?: string
    innerRef?(el: HTMLDivElement): void
}

type SwipeableProps = OwnSwipeableProps & NativeSwipeableProps

const Swipeable = ({
    className,
    children,
    innerRef,
    ...props
}: SwipeableProps) => {
    const handlers = useSwipeable(props)

    const setRef = useCallback(
        (el: HTMLDivElement) => {
            handlers.ref(el)

            innerRef?.(el)
        },
        [innerRef]
    )

    return (
        <div className={className} {...handlers} ref={setRef}>
            {children}
        </div>
    )
}

type Direction = 'right' | 'left'

const Inner = styled.div<{ $dx: number }>`
    transform: translateX(${({ $dx }) => $dx * 100}%);
    width: 100%;
`

const Tape = styled(Swipeable)<{ $numSlides: number }>`
    display: flex;
    justify-content: space-between;
    width: ${({ $numSlides }) => $numSlides * 100}%;
`

export const SlideContainer = styled.div<{ $gutter: number }>`
    flex-basis: 100%;
    padding: 0 ${({ $gutter }) => Math.floor($gutter / 2)}px;
    transition: 0.5s opacity;

    &:first-child,
    &:last-child {
        opacity: 0;
    }
`

export function slideIndex(at: number, total: number) {
    return ((at % total) + total) % total
}

const windowSize = 7

interface GalleryProps {
    children: ReactNode
    defaultSlide: number
    onChange?(slide: number): void
    currentWingSize?: number
    gutter?: number
}

export function Gallery({
    children,
    defaultSlide,
    onChange,
    currentWingSize = 0,
    gutter = 48,
    ...props
}: GalleryProps) {
    const [slide, setSlide] = useState(defaultSlide)

    const childArr = React.Children.toArray(children) as ReactElement<{
        $active?: boolean
    }>[]

    const count = React.Children.count(children)

    const n = windowSize * 2 - 1

    const springRef = useRef<HTMLDivElement>(null)

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

        onChange?.(slide)
    }, [slide, isMounted, onChange])

    const animate = useCallback((direction: Direction) => {
        const forward = direction === 'right'

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
        animate('right')
    }, [animate])

    const onPrev = useCallback(() => {
        animate('left')
    }, [animate])

    const directionToClick = useMemo(
        () => ({
            right: onNext,
            left: onPrev,
        }),
        [onNext, onPrev]
    )

    return (
        <GalleryRoot {...props}>
            <Inner $dx={-(n - 1) / 2}>
                <div ref={springRef}>
                    <Tape
                        onSwipedLeft={onNext}
                        onSwipedRight={onPrev}
                        $numSlides={n}
                    >
                        {[...Array(n)].map((_, index) => {
                            const key = slide - (n - 1) / 2 + index

                            const active =
                                Math.abs(slide - key) <= currentWingSize

                            const arrowDirection: Direction | undefined =
                                !active
                                    ? slide > key
                                        ? 'left'
                                        : 'right'
                                    : undefined

                            return (
                                <SlideContainer key={key} $gutter={gutter}>
                                    <Cursor
                                        color="#0324ff"
                                        direction={arrowDirection}
                                        onClick={
                                            arrowDirection
                                                ? directionToClick[
                                                      arrowDirection
                                                  ]
                                                : undefined
                                        }
                                    >
                                        {React.cloneElement(
                                            childArr[slideIndex(key, count)],
                                            {
                                                $active: active,
                                            }
                                        )}
                                    </Cursor>
                                </SlideContainer>
                            )
                        })}
                    </Tape>
                </div>
            </Inner>
        </GalleryRoot>
    )
}

const GalleryRoot = styled.div`
    margin: 0 auto;
    width: 100%;
`
