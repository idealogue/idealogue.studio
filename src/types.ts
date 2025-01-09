export type ProjectName =
    | 'streamr'
    | 'golem'
    | 'vizor'
    | 'cobalt'
    | 'hive'
    | 'huxtaburger'

export interface Project {
    name: ProjectName
    displayName: string
    posterUrl: string
    desc: string
}

export interface ProjectManifest<N extends ProjectName = ProjectName>
    extends Project {
    title: `Idealogue - ${string}`
    url: `/${N}`
}
