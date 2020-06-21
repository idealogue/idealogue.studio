import { useEffect } from 'react'

const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

let wheelOpt = false

try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: function () {
            wheelOpt = {
                passive: false,
            }
        }
    }))
} catch(e) {}

const ScrollSuppressor = () => {
    useEffect(() => {
        const handler = (e) => {
            if (e.type === 'keydown') {
                switch (e.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                    case 'PageUp':
                    case 'PageDown':
                        e.preventDefault()
                        return false
                }
            } else {
                e.preventDefault()
            }
        }

        window.addEventListener('DOMMouseScroll', handler, false)
        window.addEventListener(wheelEvent, handler, wheelOpt)
        window.addEventListener('touchmove', handler, wheelOpt)
        window.addEventListener('keydown', handler, false)

        return () => {
            window.removeEventListener('DOMMouseScroll', handler, false)
            window.removeEventListener(wheelEvent, handler, wheelOpt) 
            window.removeEventListener('touchmove', handler, wheelOpt)
            window.removeEventListener('keydown', handler, false)
        }
    }, [])

    return null
}

export default ScrollSuppressor
