import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import src from './cobalt.gif'

interface CobaltImageProps {
    as?: React.ElementType
}

export default function CobaltImage({ as: Tag = 'div' }: CobaltImageProps) {
    return (
        <GatsbyImage
            as={Tag}
            alt="Cobalt"
            image={{
                height: 243,
                images: {
                    fallback: {
                        src,
                        srcSet: `${src} 243w`,
                        sizes: '(min-width: 243px) 243px, 100vw',
                    },
                },
                layout: 'constrained',
                width: 243,
            }}
        />
    )
}
