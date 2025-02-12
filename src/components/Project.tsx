import * as React from 'react'
import styled from 'styled-components'
import { font } from '~/utils/css'
import { useProjectManifest } from '~/utils/project'

export function ProjectName() {
    const { displayName } = useProjectManifest()

    return <ProjectNameRoot>{displayName}</ProjectNameRoot>
}

const ProjectNameRoot = styled.h1`
    ${font('publico banner')}

    color: var(--ProjectName_Color, #171717);
    font-size: clamp(2.5rem, 10vw, 6.25rem);
    line-height: normal;
    font-weight: 600;
    margin-top: 0.25em;
`

export function ProjectImage(props: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'>) {
    const { displayName } = useProjectManifest()

    return <img {...props} alt={displayName} />
}

export const ProjectHeroContent = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    text-align: center;
`
