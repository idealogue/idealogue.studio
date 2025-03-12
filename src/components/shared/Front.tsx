import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useIsBrowser } from '~/utils/ssr'

interface FrontProps {
    children: ReactNode
}

export function Front({ children }: FrontProps) {
    if (!useIsBrowser()) {
        return null
    }

    const el = document.getElementById('__front')

    if (!el) {
        throw new Error('Missing <div id="__front">')
    }

    return createPortal(children, el)
}
