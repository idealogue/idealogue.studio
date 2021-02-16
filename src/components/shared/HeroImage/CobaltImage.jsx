import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from '$shared/GatsbyImage'
import Cobalt from './cobalt.gif'

export default function CobaltImage(props) {
    return (
        <Img
            {...props}
            data={{
                aspectRatio: 1,
                sizes: '100vw',
                src: Cobalt,
                srcSet: `${Cobalt} 243w`,
            }}
        />
    )
}
