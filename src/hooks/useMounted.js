import { useRef, useEffect, useCallback } from 'react'

export default function useMounted() {
    const ref = useRef(true)

    useEffect(() => () => {
        ref.current = false
    }, [])

    return useCallback(() => (
        ref.current
    ), [])
}
