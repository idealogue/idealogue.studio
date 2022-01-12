import React from 'react'
import styled from 'styled-components'

const UnstyledVizor360 = ({ className }) => (
    <iframe
        className={className}
        src="https://www.youtube.com/embed/cMx-YaiYTrk?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
)

const Vizor360 = styled(UnstyledVizor360)`
    aspect-ratio: 560 / 315;
    display: block;
    width: 100%;
`

export default Vizor360
