import { createContext, useContext } from 'react'
import { Project, ProjectManifest, ProjectName } from '../types'

const projects: Record<ProjectName, Project> = {
    deui: {
        name: 'deui',
        displayName: 'Deui',
        posterUrl: 'https://idealogue.studio/images/Deui-share.png',
        desc: 'Deui Case Study',
    },
    cargo: {
        name: 'cargo',
        displayName: 'Cargo',
        posterUrl: 'https://idealogue.studio/images/Cargo-share.png',
        desc: 'Cargo Case Study',
    },
    octant: {
        name: 'octant',
        displayName: 'Octant',
        posterUrl: 'https://idealogue.studio/images/Octant-share.png',
        desc: 'Octant Case Study',
    },
    cobalt: {
        name: 'cobalt',
        displayName: 'Cobalt',
        posterUrl: 'https://idealogue.studio/images/Cobalt-share.png',
        desc: 'Cobalt Case Study',
    },
    golem: {
        name: 'golem',
        displayName: 'Golem',
        posterUrl: 'https://idealogue.studio/images/Golem-share.png',
        desc: 'Golem Case Study',
    },
    hive: {
        name: 'hive',
        displayName: 'Hive',
        posterUrl: 'https://idealogue.studio/images/Hive-share.png',
        desc: 'Hive Case Study',
    },
    huxtaburger: {
        name: 'huxtaburger',
        displayName: 'Huxtaburger',
        posterUrl: 'https://idealogue.studio/images/Huxtaburger-share.png',
        desc: 'Huxtaburger Case Study',
    },
    streamr: {
        name: 'streamr',
        displayName: 'Streamr',
        posterUrl: 'https://idealogue.studio/images/Streamr-share.png',
        desc: 'Streamr Case Study',
    },
    vizor: {
        name: 'vizor',
        displayName: 'Vizor',
        posterUrl: 'https://idealogue.studio/images/Vizor-share.png',
        desc: 'Vizor Case Study',
    },
}

export const lineup: ProjectName[] = [
    // 'octant',
    // 'cargo',
    // 'deui',
    'streamr',
    'golem',
    'vizor',
    'cobalt',
    'hive',
    'huxtaburger',
]

export const ProjectNameContext = createContext<ProjectName | null>(null)

export function getProjectManifest<N extends ProjectName>(
    projectName: N
): ProjectManifest<N> {
    const { displayName, ...rest } = projects[projectName]

    return {
        ...rest,
        displayName,
        title: `Idealogue - ${displayName}`,
        url: `/${projectName}`,
    }
}

export function useProjectManifest() {
    const projectName = useContext(ProjectNameContext)

    if (!projectName) {
        throw new Error('Invalid context')
    }

    return getProjectManifest(projectName)
}

export function useNextProjectManifest() {
    return getProjectManifest(
        lineup[(lineup.indexOf(useProjectManifest().name) + 1) % lineup.length]
    )
}
