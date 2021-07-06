import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import src from './cobalt.gif'

export default function CobaltImage({ as: Tag = 'div' }) {
    return (
        <GatsbyImage
            as={Tag}
            alt="Cobalt"
            image={{
                backgroundColor: 'transparent',
                height: 243,
                images: {
                    fallback: {
                        src,
                        srcSet: `${src} 243w`,
                        sizes: '(min-width: 243px) 243px, 100vw',
                    },
                    sources: [{
                        src,
                        srcSet: `${src} 243w`,
                    }],
                },
                layout: 'constrained',
                width: 243,
            }}
        />
    )
}
