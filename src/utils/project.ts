import { Project, ProjectManifest, ProjectName } from '../types'

const projects: Record<ProjectName, Project> = {
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
