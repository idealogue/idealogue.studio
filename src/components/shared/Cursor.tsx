import { TABLET } from '$utils/css'
import React, {
    createContext,
    HTMLAttributes,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import styled, { createGlobalStyle } from 'styled-components'

type Direction = 'left' | 'right' | undefined

interface CursorContext {
    direction: Direction
    setDirection(value: Direction): void
    color: undefined | string
    setColor(value: undefined | string): void
}

const Context = createContext<CursorContext>({
    direction: undefined,
    setDirection: () => {},
    color: undefined,
    setColor: () => {},
})

export const useArrowCursor = () => useContext(Context)

interface ProviderProps {
    children?: ReactNode
}

export const Provider = ({ children }: ProviderProps) => {
    const [direction, setDirection] = useState<Direction>()

    const [color, setColor] = useState<string>()

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

function ArrowInner() {
    const rootRef = useRef<HTMLDivElement>(null)

    const { direction, color = '#ffffff' } = useArrowCursor()

    const left = direction === 'left'

    useEffect(() => {
        const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
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
        <ArrowInnerRoot ref={rootRef}>
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
        </ArrowInnerRoot>
    )
}

const ArrowInnerRoot = styled.div`
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

export function Arrow() {
    return useArrowCursor().direction == null ? null : <ArrowInner />
}

interface CursorProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onMouseEnter' | 'onMouseLeave'> {
    children?: ReactNode
    direction?: Direction
    color?: string
    onMouseEnter?(): void
    onMouseLeave?(): void
}

export function Cursor({
    children,
    direction,
    color,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    ...props
}: CursorProps) {
    const { setDirection, setColor } = useArrowCursor()

    const onMouseEnter = useCallback(() => {
        if (isTouchDevice()) {
            return
        }

        setDirection(direction)
        setColor(color)
        onMouseEnterProp?.()
    }, [onMouseEnterProp, setDirection, direction, setColor, color])

    const onMouseLeave = useCallback(() => {
        setDirection(undefined)

        onMouseLeaveProp?.()
    }, [onMouseLeaveProp, setDirection])

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </div>
    )
}

export function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}
