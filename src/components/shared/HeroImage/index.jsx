import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { useProject } from '$shared/Project'
import { SM, MD, LG } from '$utils/css'
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
