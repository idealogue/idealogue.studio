import { Video } from '$shared/Video'
import React, { useEffect, useRef, VideoHTMLAttributes } from 'react'

type AutoPlayingVideoProps = Omit<
    VideoHTMLAttributes<HTMLVideoElement>,
    'autoPlay'
>

// `autoPlay` gets dropped from `props` here. We play the video when it's seen for the first time.
export function AutoPlayingVideo(props: AutoPlayingVideoProps) {
    const ref = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const { current: video } = ref

        if (!video) {
            return () => {}
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(async ({ isIntersecting }) => {
                const { current: video } = ref

                if (isIntersecting && video && video.paused) {
                    try {
                        await video.play()
                    } catch (e) {
                        // Ignore failures.
                    }
                }
            })
        })

        observer.observe(video)

        return () => {
            observer.disconnect()
        }
    }, [])

    return <Video {...props} ref={ref} />
}
