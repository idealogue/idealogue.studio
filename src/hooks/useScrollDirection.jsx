import { useState, useEffect } from 'react'

let options = false

if (typeof window !== 'undefined') {
    try {
        window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line getter-return
            get: function() {
                options = {
                    passive: true,
                    capture: false,
                }
            }
        }))
    } catch(err) {
        // No-op.
    }
}

const getScrollY = () => {
    let d, b, html

    if (typeof window === 'undefined') {
        return 0
    }

    return Math.round(window.pageYOffset || (
        d = window.document,
        b = d.body,
        html = d.documentElement, html || b.parentNode || b
    ).scrollTop)
}

export default function useScrollDirection() {
    const [direction, setDirection] = useState()

    useEffect(() => {
        let scrolled = false

        let lastScrollY = getScrollY()

        const update = () => {
            const scrollY = getScrollY()
            setDirection(scrollY <= lastScrollY ? 'up' : 'down')
            lastScrollY = scrollY
            scrolled = false
        }

        const onScroll = () => {
            if (!scrolled) {
                scrolled = true
                window.requestAnimationFrame(update)
            }
        }

        window.addEventListener('scroll', onScroll, options)

        return () => {
            window.removeEventListener('scroll', onScroll, options)
        }
    }, [])

    return direction
}
