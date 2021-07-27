import React, { useEffect, useRef, useState, useCallback, createContext, useContext, useMemo } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Direction = {
    LEFT: 'left',
    NONE: 'none',
    RIGHT: 'right',
}

const Context = createContext({
    direction: Direction.NONE,
    setDirection: () => {},
})

const useArrowCursor = () => (
    useContext(Context)
)

export const Provider = ({ children }) => {
    const [direction, setDirection] = useState(Direction.NONE)

    const value = useMemo(() => ({
        direction,
        setDirection,
    }), [
        direction,
    ])

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

const NoCursor = createGlobalStyle`
    html,
    body {
        cursor: none !important;
    }
`

const UnstyledArrow = ({ ...props }) => {
    const rootRef = useRef()

    const left = useArrowCursor().direction === Direction.LEFT

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
                        fill="currentColor"
                        d="M25.145 0L0 25.145l25.145 25.146 2.829-2.829L7.658 27.145h59.268v-4H7.656L27.974 2.828z"
                    />
                ) : (
                    <path
                        fill="currentColor"
                        d="M41.78 0l25.146 25.145L41.78 50.291l-2.828-2.829 20.316-20.317H0v-4h59.27L38.952 2.828z"
                    />
                )}
            </svg>
        </div>
    )
}

const ArrowInner = styled(UnstyledArrow)`
    color: #ffffff;
    pointer-events: none;
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 1000;

    svg {
        display: block;
        height: 51px;
        width: 67px;
    }
`

export const Arrow = () => (
    useArrowCursor().direction === Direction.NONE ? null : (
        <ArrowInner />
    )
)

const UnstyledCursor = ({
    children,
    direction = Direction.LEFT,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    ...props
}) => {
    const { setDirection } = useArrowCursor()

    const onMouseEnter = useCallback(() => {
        setDirection(direction)

        if (onMouseEnterProp) {
            onMouseEnterProp()
        }
    }, [onMouseEnterProp, setDirection, direction])

    const onMouseLeave = useCallback(() => {
        setDirection(Direction.NONE)

        if (onMouseLeaveProp) {
            onMouseLeaveProp()
        }
    }, [onMouseLeaveProp, setDirection])

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            {...props}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    )
}

const Cursor = styled(UnstyledCursor)`
`

export default Cursor
