import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'

const MenuContext = createContext({
    close: () => {},
    isOpen: false,
    open: () => {},
})

interface MenuProviderProps {
    children?: ReactNode
}

export function MenuProvider({ children }: MenuProviderProps) {
    const [isOpen, setIsOpen] = useState(false)

    const open = useCallback(() => {
        setIsOpen(true)
    }, [])

    const close = useCallback(() => {
        setIsOpen(false)
    }, [])

    const value = useMemo(
        () => ({
            close,
            isOpen,
            open,
        }),
        [close, isOpen, open]
    )

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export function useMenu() {
    return useContext(MenuContext)
}
