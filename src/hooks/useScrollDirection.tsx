import { useEffect, useState } from 'react'

let options: false | { passive: boolean; capture: boolean } = false

if (typeof window !== 'undefined') {
    function onFocus() {
        // Tea pot.
    }

    const detector = Object.defineProperty({}, 'passive', {
        get: function () {
            options = {
                passive: true,
                capture: false,
            }

            return
        },
    })

    try {
        window.addEventListener('focus', onFocus, detector)

        window.removeEventListener('focus', onFocus, detector)
    } catch (err) {
        // No-op.
    }
}

function getScrollY(): number {
    if (typeof window === 'undefined') {
        return 0
    }

    function fallbackElement() {
        return (
            window.document.documentElement ||
            window.document.body.parentNode ||
            window.document.body
        )
    }

    return Math.round(window.pageYOffset || fallbackElement().scrollTop)
}

export default function useScrollDirection() {
    const [direction, setDirection] = useState<'up' | 'down'>()

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
