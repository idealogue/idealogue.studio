import React, { createContext, useContext, useCallback, useMemo, useState } from 'react'

const MenuContext = createContext({
    close: () => {},
    isOpen: false,
    open: () => {},
})

export const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const open = useCallback(() => {
        setIsOpen(true)
    }, [])

    const close = useCallback(() => {
        setIsOpen(false)
    }, [])

    const value = useMemo(() => ({
        close,
        isOpen,
        open,
    }), [
        close,
        isOpen,
        open,
    ])

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

export default () => (
    useContext(MenuContext)
)
