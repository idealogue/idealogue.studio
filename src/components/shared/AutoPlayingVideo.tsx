import { Video } from '$shared/Video'
import React, { useEffect, useRef, VideoHTMLAttributes } from 'react'

interface AutoPlayingVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'autoPlay'> {
    disabled?: boolean
}

// `autoPlay` gets dropped from `props` here. We play the video when it's seen for the first time.
export function AutoPlayingVideo({ disabled = false, ...props }: AutoPlayingVideoProps) {
    const ref = useRef<HTMLVideoElement>(null)

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
                    await video.play()
                } catch (_ignored) {}
            })
        })

        observer.observe(video)

        return () => {
            observer.disconnect()
        }
    }, [disabled])

    return <Video {...props} ref={ref} />
}
