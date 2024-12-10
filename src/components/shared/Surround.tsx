import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    prefix: ReactNode
    suffix: ReactNode
}

export default function Surround({
    prefix = null,
    suffix = null,
    children,
}: Props) {
    return (
        <>
            {prefix}
            {children}
            {suffix}
        </>
    )
}
