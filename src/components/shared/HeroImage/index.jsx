import React from 'react'
import styled from 'styled-components'
import { useProject } from '$shared/Project'
import CobaltImage from './CobaltImage'
import GolemImage from './GolemImage'
import HiveImage from './HiveImage'
import HuxImage from './HuxImage'
import StreamrImage from './StreamrImage'
import VizorImage from './VizorImage'

const images = {
    cobalt: CobaltImage,
    golem: GolemImage,
    hive: HiveImage,
    huxtaburger: HuxImage,
    streamr: StreamrImage,
    vizor: VizorImage,
}

const UnstyledHeroImage = (props) => {
    const { id, name } = useProject()

    const Img = images[id]

    return (
        <Img {...props} alt={name} />
    )
}

const HeroImage = styled(UnstyledHeroImage)`
    height: 136px;
    margin: 0 auto;
    width: 136px;
`

export default HeroImage
