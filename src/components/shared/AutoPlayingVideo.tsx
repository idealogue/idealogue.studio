import { Video } from '$shared/Video'
import React, { RefObject, useEffect, useReducer, useRef, VideoHTMLAttributes } from 'react'

interface AutoPlayingVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'autoPlay'> {
    disabled?: boolean
    innerRef?: RefObject<HTMLVideoElement | null>
    onTimeUpdate?(src: string, currentTime: number, totalTime: number): void
    onPlaybackEnded?(src: string, currentTime: number, totalTime: number): void
}

// `autoPlay` gets dropped from `props` here. We play the video when it's seen for the first time.
export function AutoPlayingVideo({
    disabled = false,
    innerRef,
    src,
    children,
    onTimeUpdate,
    onPlaybackEnded,
    ...props
}: AutoPlayingVideoProps) {
    const localRef = useRef<HTMLVideoElement>(null)

    const ref = innerRef || localRef

    const [cache, invalidate] = useReducer((c) => c + 1, 0)

    const onTimeUpdateRef = useRef(onTimeUpdate)

    if (onTimeUpdateRef.current !== onTimeUpdate) {
        onTimeUpdateRef.current = onTimeUpdate
    }

    const onPlaybackEndedRef = useRef(onPlaybackEnded)

    if (onPlaybackEndedRef.current !== onPlaybackEnded) {
        onPlaybackEndedRef.current = onPlaybackEnded
    }

    useEffect(
        function invalidateCacheOnSrc() {
            ref.current?.pause()

            invalidate()
        },
        [src]
    )

    useEffect(function trackTime() {
        const { current: video } = ref

        function onUpdate(e: Event) {
            const target = e.currentTarget

            if (target instanceof HTMLVideoElement) {
                onTimeUpdateRef.current?.(target.currentSrc, target.currentTime, target.duration)
            }
        }

        video?.addEventListener('timeupdate', onUpdate)

        function onDone(e: Event) {
            const target = e.currentTarget

            if (target instanceof HTMLVideoElement) {
                onPlaybackEndedRef.current?.(target.currentSrc, target.currentTime, target.duration)
            }
        }

        video?.addEventListener('ended', onDone)

        return () => {
            video?.removeEventListener('ended', onDone)

            video?.removeEventListener('timeupdate', onUpdate)
        }
    }, [])

    useEffect(() => {
        const { current: video } = ref

        if (!video) {
            return () => {}
        }

        if (disabled) {
            if (!video.paused) {
                video.pause()
            }

            return () => {}
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(async ({ isIntersecting }) => {
                const { current: video } = ref

                if (!video || !video.paused || !isIntersecting) {
                    return
                }

                try {
                    video.load()

                    await video.play()
                } catch (_ignored) {}
            })
        })

        observer.observe(video)

        return () => {
            observer.disconnect()
        }
    }, [disabled, ref, cache])

    return (
        <Video {...props} ref={ref}>
            {src ? <source src={src} /> : children}
        </Video>
    )
}
