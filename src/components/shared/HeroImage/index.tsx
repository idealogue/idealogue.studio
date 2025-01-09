import { LG, MD, SM } from '$utils/css'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import { ProjectName } from '~/types'
import { useProjectManifest } from '~/utils/project'
import CobaltImage from './CobaltImage'

const Img = styled.div`
    height: 120px;
    margin: 0 auto;
    width: 120px;

    @media (min-width: ${SM}px) {
        height: 144px;
        width: 144px;
    }

    @media (min-width: ${MD}px) {
        height: 160px;
        width: 160px;
    }

    @media (min-width: ${LG}px) {
        height: 192px;
        width: 192px;
    }
`

const images: Record<ProjectName, React.ReactNode> = {
    cobalt: <CobaltImage as={Img} />,
    golem: <StaticImage as={Img} src="golem.png" alt="Golem" />,
    hive: <StaticImage as={Img} src="hive.png" alt="Hive" />,
    huxtaburger: (
        <StaticImage as={Img} src="huxtaburger.png" alt="Huxtaburger" />
    ),
    streamr: <StaticImage as={Img} src="streamr.png" alt="Streamr" />,
    vizor: <StaticImage as={Img} src="vizor.png" alt="Vizor" />,
}

export default function HeroImage() {
    return images[useProjectManifest().name]
}
