import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Front({ children }) {
    const [portal, setPortal] = useState(null)

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setPortal(createPortal(children, document.getElementById('__front')))
        }
    }, [children])

    return portal
}
