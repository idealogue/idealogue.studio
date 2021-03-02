import React from 'react'
import styled from 'styled-components'
import { useProject } from '$shared/Project'
import CobaltImage from './CobaltImage'
import GolemImage from './GolemImage'
import HiveImage from './HiveImage'
import HuxImage from './HuxImage'
import StreamrImage from './StreamrImage'
import VizorImage from './VizorImage'
import { SM, MD, LG } from '$utils/css'

const images = {
    cobalt: CobaltImage,
    golem: GolemImage,
    hive: HiveImage,
    huxtaburger: HuxImage,
    streamr: StreamrImage,
    vizor: VizorImage,
}

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

const UnstyledHeroImage = (props) => {
    const { id, name } = useProject()

    return (
        <Img {...props} as={images[id]} alt={name} />
    )
}

const HeroImage = styled(UnstyledHeroImage)``

export default HeroImage
