import type { HeadFC } from 'gatsby'
import * as React from 'react'

export default function IndexPage() {
    return <h1>Index page</h1>
}

export const Head: HeadFC = () => {
    return <title>Home Page</title>
}
