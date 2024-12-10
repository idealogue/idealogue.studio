import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    createContext,
    useContext,
    useMemo,
} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { TABLET } from '$utils/css'
import isMobileDevice from '$utils/isMobileDevice'

const Direction = {
    LEFT: 'left',
    NONE: 'none',
    RIGHT: 'right',
}

const Context = createContext({
    direction: Direction.NONE,
    setDirection: () => {},
    color: undefined,
    setColor: () => {},
})

const useArrowCursor = () => useContext(Context)

export const Provider = ({ children }) => {
    const [direction, setDirection] = useState(Direction.NONE)

    const [color, setColor] = useState()

    const value = useMemo(
        () => ({
            direction,
            setDirection,
            color,
            setColor,
        }),
        [direction, color]
    )

    return <Context.Provider value={value}>{children}</Context.Provider>
}

const NoCursor = createGlobalStyle`
    @media ${TABLET} {
        html,
        body {
            cursor: none !important;
        }
    }
`

const UnstyledArrow = ({ ...props }) => {
    const rootRef = useRef()

    const { direction, color = '#ffffff' } = useArrowCursor()

    const left = direction === Direction.LEFT

    useEffect(() => {
        const onMouseMove = ({ clientX, clientY }) => {
            if (typeof window === 'undefined') {
                return
            }

            const { current: root } = rootRef

            if (root) {
                root.style.left = `${clientX}px`
                root.style.top = `${clientY}px`
            }
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <div {...props} ref={rootRef}>
            <NoCursor />
            <svg viewBox="0 0 67 51" xmlns="http://www.w3.org/2000/svg">
                {left ? (
                    <path
                        fill={color}
                        d="M25.145 0L0 25.145l25.145 25.146 2.829-2.829L7.658 27.145h59.268v-4H7.656L27.974 2.828z"
                    />
                ) : (
                    <path
                        fill={color}
                        d="M41.78 0l25.146 25.145L41.78 50.291l-2.828-2.829 20.316-20.317H0v-4h59.27L38.952 2.828z"
                    />
                )}
            </svg>
        </div>
    )
}

const ArrowInner = styled(UnstyledArrow)`
    pointer-events: none;
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 1000;

    svg {
        display: none;
        height: 51px;
        width: 67px;
    }

    @media ${TABLET} {
        svg {
            display: block;
        }
    }
`

export const Arrow = () =>
    useArrowCursor().direction === Direction.NONE ? null : <ArrowInner />

const UnstyledCursor = ({
    children,
    direction = Direction.LEFT,
    color,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    ...props
}) => {
    const { setDirection, setColor } = useArrowCursor()

    const onMouseEnter = useCallback(() => {
        if (isMobileDevice()) {
            return
        }

        setDirection(direction)
        setColor(color)

        if (onMouseEnterProp) {
            onMouseEnterProp()
        }
    }, [onMouseEnterProp, setDirection, direction, setColor, color])

    const onMouseLeave = useCallback(() => {
        setDirection(Direction.NONE)

        if (onMouseLeaveProp) {
            onMouseLeaveProp()
        }
    }, [onMouseLeaveProp, setDirection])

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </div>
    )
}

const Cursor = styled(UnstyledCursor)``

export default Cursor
