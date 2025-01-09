import React, { createContext, ReactNode, useContext, useMemo } from 'react'

const Context = createContext({
    hash: '',
    mobileTitle: 'Untitled',
    title: 'Untitled',
})

export function useTopic() {
    return useContext(Context)
}

interface TopicProps {
    title: string
    mobileTitle?: string
    children?: ReactNode
}

export function Topic({ title, mobileTitle = title, children }: TopicProps) {
    const hash = useMemo(() => {
        return (title || '').replace(/[\s-]+/g, '-').toLowerCase()
    }, [title])

    const value = useMemo(
        () => ({
            hash,
            mobileTitle,
            title,
        }),
        [hash, mobileTitle, title]
    )

    return (
        <Context.Provider value={value}>
            <div id={hash} />
            {children}
        </Context.Provider>
    )
}
