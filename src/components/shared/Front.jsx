import { createPortal } from 'react-dom'

export default function Front({ children }) {
    if (typeof document !== 'undefined') {
        return createPortal(children, document.getElementById('__front'))
    }

    return null
}
