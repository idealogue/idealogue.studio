import React, { createContext, useContext, useState, useEffect } from 'react'

let options = false

if (typeof window !== undefined) {
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

const DirectionContext = createContext(undefined)

export const useScrollDirection = () => (
    useContext(DirectionContext)
)

const ScrollDirectionProvider = ({ children }) => {
    const [direction, setDirection] = useState()

    useEffect(() => {
        let scrolled = false

        let lastScrollY = getScrollY()

        const update = () => {
            const scrollY = getScrollY()
            setDirection(scrollY < lastScrollY ? 'up' : 'down')
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

    return (
        <DirectionContext.Provider value={direction}>
            {children || null}
        </DirectionContext.Provider>
    )
}

export default ScrollDirectionProvider
