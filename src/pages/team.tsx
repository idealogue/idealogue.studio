import type { HeadFC } from 'gatsby'
import React from 'react'
import { Seo } from '../components/Seo'

export { TeamPage as default } from '$team'

export const Head: HeadFC = () => {
    return <Seo />
}
