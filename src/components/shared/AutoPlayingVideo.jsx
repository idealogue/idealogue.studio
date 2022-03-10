import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Video from '$shared/Video'

// `autoPlay` gets dropped from `props` here. We play the video when it's seen for the first time.
function UnstyledAutoPlayingVideo({ autoPlay, ...props }) {
    const ref = useRef()

    useEffect(() => {
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

        observer.observe(ref.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <Video {...props} ref={ref} />
    )
}

const AutoPlayingVideo = styled(UnstyledAutoPlayingVideo)``

export default AutoPlayingVideo
