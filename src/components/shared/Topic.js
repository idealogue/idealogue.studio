import React, { createContext, useContext, useMemo } from 'react'

const Context = createContext({
    hash: undefined,
    title: undefined,
})

export const useTopic = () => (
    useContext(Context)
)

const Topic = ({ title, children, ...props }) => {
    const hash = (title || '').replace(/[\s\-]+/g, '-').toLowerCase()
    
    const value = useMemo(() => ({
        hash,
        title,
    }), [
        hash,
        title,
    ])

    return (
        <Context.Provider {...props} value={value}>
            <div id={hash} />
            {children}
        </Context.Provider>
    )
}

export default Topic
