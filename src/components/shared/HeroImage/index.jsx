import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { useProject } from '$shared/Project'
import { SM, MD, LG } from '$utils/css'
import CobaltImage from './CobaltImage'

const Img = styled.div`
    height: 102px;
    margin: 0 auto;
    width: 102px;

    @media (min-width: ${SM}px) {
        height: 116px;
        width: 116px;
    }

    @media (min-width: ${MD}px) {
        height: 134px;
        width: 134px;
    }

    @media (min-width: ${LG}px) {
        height: 160px;
        width: 160px;
    }
`

const images = {
    cobalt: <CobaltImage as={Img} />,
    golem: <StaticImage as={Img} src="golem.png" alt="Golem" />,
    hive: <StaticImage as={Img} src="hive.png" alt="Hive" />,
    huxtaburger: <StaticImage as={Img} src="huxtaburger.png" alt="Huxtaburger" />,
    streamr: <StaticImage as={Img} src="streamr.png" alt="Streamr" />,
    vizor: <StaticImage as={Img} src="vizor.png" alt="Vizor" />,
}

export default function HeroImage() {
    return images[useProject().id]
}
