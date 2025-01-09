import { HeadFC } from 'gatsby'
import * as React from 'react'

export default function NotFoundPage() {
    return <h1>404</h1>
}

export const Head: HeadFC = () => {
    return <title>Not found</title>
}
