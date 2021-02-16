import React from 'react'
import Img from 'gatsby-image'

export default function GatsbyImage({ data, ...props }) {
    return (
        <Img {...props} fluid={data} />
    )
}
