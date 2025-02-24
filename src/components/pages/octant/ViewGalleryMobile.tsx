import React from 'react'
import { Player, Source } from '~/components/pages/octant/Player'
import HomepagePoster from './assets/view_homepage_mobile_poster.jpg'
import MetricsPoster from './assets/view_metrics_mobile_poster.jpg'
import ProjectsPoster from './assets/view_projects_mobile_poster.jpg'

const sources: [Source, ...Source[]] = [
    {
        posterSrc: HomepagePoster,
        mediaSrc: '/videos/octant/view_homepage_mobile.mp4',
    },
    {
        posterSrc: ProjectsPoster,
        mediaSrc: '/videos/octant/view_projects_mobile.mp4',
    },
    {
        posterSrc: MetricsPoster,
        mediaSrc: '/videos/octant/view_metrics_mobile.mp4',
    },
]

export function ViewGalleryMobile() {
    return <Player sources={sources} />
}
