import React from 'react'
import styled from 'styled-components'
import { useProject } from '$shared/Project'
import cobalt from './cobalt.gif'
import golem from './golem.png'
import hive from './hive.png'
import huxtaburger from './huxtaburger.png'
import streamr from './streamr.png'
import vizor from './vizor.png'

const images = {
    cobalt,
    golem,
    hive,
    huxtaburger,
    streamr,
    vizor,
}

const UnstyledHeroImage = (props) => {
    const { id, name } = useProject()

    return (
        <img {...props} src={images[id]} alt={name} />
    )
}

const HeroImage = styled(UnstyledHeroImage)`
    display: block;
    height: 160px;
    width: 160px;
`

export default HeroImage
