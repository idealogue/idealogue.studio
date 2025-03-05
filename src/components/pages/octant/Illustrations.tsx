import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import { SM, TABLET } from '~/utils/css'
import HeroCrop from './assets/illustration_hero_crop.png'
import HeroCrop2x from './assets/illustration_hero_crop@2x.png'
import WindowCloth from './assets/illustration_window_cloth.png'
import WindowCloth2x from './assets/illustration_window_cloth@2x.png'
import WindowWithBird from './assets/illustration_window_with_bird.png'
import WindowWithBird2x from './assets/illustration_window_with_bird@2x.png'
import WindowWithDog from './assets/illustration_window_with_dog.png'
import WindowWithDog2x from './assets/illustration_window_with_dog@2x.png'

export function Illustrations() {
    return (
        <IllustrationsRoot>
            <MobileClips>
                <CaptionedContainer
                    caption={<>Brand and POAP animations by 21_19 and Stuart&nbsp;Wade</>}
                >
                    <ClipList>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_thinking_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_whale_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_flight_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_logo_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                    </ClipList>
                </CaptionedContainer>
            </MobileClips>
            <Clips>
                <div>
                    <ClipList $first>
                        <Clip
                            css={css`
                                width: 967px;
                            `}
                        >
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_thinking_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_logo_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_map_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                    </ClipList>
                </div>
                <div>
                    <ClipList>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_flight_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_maths_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                        <Clip>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/illustration_whale_desktop.mp4" />
                            </AutoPlayingVideo>
                        </Clip>
                    </ClipList>
                </div>
            </Clips>
            <BrandIllustration />
            <Windows>
                <img src={WindowWithDog} srcSet={`${WindowWithDog2x} 2x`} alt="" />
                <img src={WindowWithBird} srcSet={`${WindowWithBird2x} 2x`} alt="" />
                <img src={WindowCloth} srcSet={`${WindowCloth2x} 2x`} alt="" />
            </Windows>
        </IllustrationsRoot>
    )
}

const Clip = styled.div`
    background-color: #ffffff;
    position: relative;
    width: 37.5rem;
    border-radius: 1rem;
    border-radius: clamp(0.25rem, 5vw, 1rem);
    overflow: hidden;

    video {
        display: block;
    }
`

const ClipList = styled.div<{ $first?: boolean }>`
    display: grid;
    gap: 2rem;
    width: 0;
    overflow: visible;

    ${({ $first = false }) =>
        $first &&
        css`
            ${Clip} {
                transform: translateX(-100%);
            }
        `}
`

const Clips = styled.div`
    display: none;
    grid-template-columns: 0px 0px;
    gap: 2rem;
    width: 2rem;
    margin: 0 auto 7.25rem;

    @media ${TABLET} {
        display: grid;
    }
`

const MobileClips = styled.div`
    margin-bottom: 8rem;

    ${ClipList} {
        gap: 1.5rem;
        margin: 0 auto;
        width: auto;
        max-width: 100%;
        box-sizing: border-box;
        padding: 0 2rem 3rem;
    }

    ${Clip} {
        width: auto;
    }

    @media ${TABLET} {
        display: none;
    }
`

const Windows = styled.div`
    display: grid;
    grid-template-columns: auto;
    gap: 8rem;
    gap: clamp(3rem, 20vw, 8rem);
    justify-content: space-around;
    margin: 8rem auto 6rem;
    max-width: 100%;
    padding: 0;
    box-sizing: border-box;

    img {
        max-width: 100%;
    }

    @media (min-width: ${SM}px) {
        padding: 0 4rem;
        width: 79rem;
    }

    @media ${TABLET} {
        gap: 0;
        grid-template-columns: auto auto auto;
    }

    @media (min-width: 87rem) {
        padding: 0 8rem;
        width: 116rem;
    }
`

const MaxOvershoot = 200

function BrandIllustration() {
    const ref = React.useRef<HTMLDivElement>(null)

    const imgRef = React.useRef<HTMLImageElement>(null)

    React.useEffect(function updateOffsetX() {
        let startX: number | undefined

        let currentTranslate = 0

        let minTranslate = 0

        let maxTranslate = 0

        let velocity = 0

        let lastX = 0

        let lastTime = 0

        let animationFrameRequestId: number | undefined

        let maxOvershoot = 0

        let lastRootWidth: number | undefined

        const { current: root } = ref

        if (!root) {
            return () => {}
        }

        function onWindowResize() {
            if (!ref.current || !imgRef.current) {
                minTranslate = 0

                maxTranslate = 0

                maxOvershoot = 0

                return
            }

            const rootWidth = ref.current.clientWidth

            if (lastRootWidth !== rootWidth) {
                startX = undefined

                lastX = 0

                velocity = 0

                lastTime = 0

                currentTranslate = 0

                ref.current?.style.setProperty(
                    '--BrandIllustration_OffsetX',
                    `${currentTranslate}px`
                )

                lastRootWidth = rootWidth
            }

            const imgWidth = imgRef.current.clientWidth

            const halfImg = imgWidth / 2

            const halfRoot = rootWidth / 2

            minTranslate = Math.min(0, halfRoot - halfImg)

            maxTranslate = Math.max(0, halfImg - halfRoot)

            maxOvershoot = maxTranslate !== 0 ? MaxOvershoot : 0
        }

        onWindowResize()

        window.addEventListener('resize', onWindowResize)

        function onPointerDown(e: PointerEvent) {
            startX = e.clientX - currentTranslate

            velocity = 0

            lastX = e.clientX

            lastTime = Date.now()

            if (animationFrameRequestId != null) {
                cancelAnimationFrame(animationFrameRequestId)

                animationFrameRequestId = undefined
            }
        }

        root.addEventListener('pointerdown', onPointerDown)

        function onPointerMove(e: PointerEvent) {
            const { current: img } = imgRef

            if (startX == null || !img) {
                return
            }

            try {
                let x = e.clientX - startX

                if (x < minTranslate) {
                    const overshoot = minTranslate - x

                    if (overshoot > 2 * maxOvershoot) {
                        x = minTranslate - maxOvershoot
                    } else {
                        x = minTranslate - maxOvershoot * easing(overshoot / (2 * maxOvershoot))
                    }
                }

                if (x > maxTranslate) {
                    const overshoot = x - maxTranslate

                    if (overshoot > 2 * maxOvershoot) {
                        x = maxTranslate + maxOvershoot
                    } else {
                        x = maxTranslate + maxOvershoot * easing(overshoot / (2 * maxOvershoot))
                    }
                }

                ref.current?.style.setProperty('--BrandIllustration_OffsetX', `${x}px`)

                const now = Date.now()

                const deltaTime = now - lastTime

                if (deltaTime > 0) {
                    velocity = (e.clientX - lastX) / deltaTime
                }

                lastX = e.clientX

                lastTime = now

                currentTranslate = x
            } catch (_ohSnap) {}
        }

        window.addEventListener('pointermove', onPointerMove)

        function onPointerUp() {
            startX = undefined

            animateWithMomentum()
        }

        function animateWithMomentum() {
            const velocityDecay = 0.8

            function step() {
                if (startX != null) {
                    return
                }

                velocity *= velocityDecay
                currentTranslate += velocity * 20

                if (currentTranslate < minTranslate) {
                    currentTranslate = minTranslate + (currentTranslate - minTranslate) * 0.9
                }

                if (currentTranslate > maxTranslate) {
                    currentTranslate = maxTranslate + (currentTranslate - maxTranslate) * 0.9
                }

                ref.current?.style.setProperty(
                    '--BrandIllustration_OffsetX',
                    `${currentTranslate}px`
                )

                if (
                    Math.abs(velocity) > 0.1 ||
                    currentTranslate - minTranslate < -0.01 ||
                    currentTranslate - maxTranslate > 0.01
                ) {
                    animationFrameRequestId = requestAnimationFrame(step)
                } else {
                    currentTranslate = Math.max(
                        minTranslate,
                        Math.min(maxTranslate, currentTranslate)
                    )

                    ref.current?.style.setProperty(
                        '--BrandIllustration_OffsetX',
                        `${currentTranslate}px`
                    )
                }
            }

            animationFrameRequestId = requestAnimationFrame(step)
        }

        window.addEventListener('pointerup', onPointerUp)

        return () => {
            if (animationFrameRequestId != null) {
                cancelAnimationFrame(animationFrameRequestId)

                animationFrameRequestId = undefined
            }

            window.removeEventListener('pointerup', onPointerUp)

            window.removeEventListener('pointermove', onPointerMove)

            root.removeEventListener('pointerdown', onPointerDown)

            window.removeEventListener('resize', onWindowResize)
        }
    }, [])

    const [isSpotted, spot] = React.useReducer(() => true, false)

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isSpotted) {
                    setTimeout(() => {
                        spot()
                    }, 1000)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [isSpotted])

    return (
        <BrandIllustrationRoot ref={ref} $wiggle={isSpotted}>
            <BrandIllustrationImage
                onMouseDown={(e) => {
                    e.preventDefault()
                }}
                ref={imgRef}
                src={HeroCrop}
                srcSet={`${HeroCrop2x} 2x`}
                alt=""
            />
        </BrandIllustrationRoot>
    )
}

const wiggle = keyframes`
    0% { transform: translateX(0); }
    25% { transform: translateX(-2%); }
    50% { transform: translateX(2%); }
    75% { transform: translateX(-2%); }
    100% { transform: translateX(0); }
`

const BrandIllustrationImage = styled.img`
    display: block;
    width: 85.75rem;
    max-width: 225vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%) translateX(var(--BrandIllustration_OffsetX, 0));
    user-select: none;
`

const BrandIllustrationRoot = styled.div<{ $wiggle: boolean }>`
    width: 85.75rem;
    max-width: 100%;
    margin: 0 auto;
    touch-action: pan-y;

    ${({ $wiggle }) =>
        $wiggle &&
        css`
            animation: ${wiggle} 0.75s ease-in-out;

            @media (min-width: 85.75rem) {
                animation: none;
            }
        `}
`

const IllustrationsRoot = styled.div``

function easing(x: number): number {
    return 1 - (1 - x) * (1 - x)
}
