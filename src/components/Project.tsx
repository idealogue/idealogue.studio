import * as React from 'react'
import styled from 'styled-components'
import { useProjectManifest } from '~/utils/project'

export function ProjectName() {
    const { displayName } = useProjectManifest()

    return <ProjectNameRoot>{displayName}</ProjectNameRoot>
}

const ProjectNameRoot = styled.h1``

export function ProjectImage(
    props: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'>
) {
    const { displayName } = useProjectManifest()

    return <img {...props} alt={displayName} />
}

export const ProjectHeroContent = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    text-align: center;
`
