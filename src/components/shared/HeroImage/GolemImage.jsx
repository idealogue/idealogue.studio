import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from '$shared/GatsbyImage'

export default function GolemImage(props) {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "shared/HeroImage/golem.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `).file.childImageSharp.fluid

    return (
        <Img {...props} data={data} />
    )
}