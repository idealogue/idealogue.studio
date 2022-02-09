import React, { createContext, useContext } from 'react'

export const STREAMR = 'streamr'

export const GOLEM = 'golem'

export const VIZOR = 'vizor'

export const COBALT = 'cobalt'

export const HIVE = 'hive'

export const HUXTABURGER = 'huxtaburger'

export const lineup = [
    GOLEM,
    VIZOR,
    COBALT,
    HIVE,
    HUXTABURGER,
]

export const projects = {
    [COBALT]: {
        id: COBALT,
        name: "Cobalt",
        href: "/cobalt",
    },
    [GOLEM]: {
        id: GOLEM,
        name: "Golem",
        href: "/golem",
    },
    [HIVE]: {
        id: HIVE,
        name: "Hive",
        href: "/hive",
    },
    [HUXTABURGER]: {
        id: HUXTABURGER,
        name: "Huxtaburger",
        href: "/huxtaburger",
    },
    [STREAMR]: {
        id: STREAMR,
        name: "Streamr",
        href: "/streamr",
    },
    [VIZOR]: {
        id: VIZOR,
        name: "Vizor",
        href: "/vizor",
    },
}

const ProjectContext = createContext(null)

export const useProject = () => (
    useContext(ProjectContext)
)

export const useNextProject = () => {
    const { id } = useProject()
    return projects[lineup[(lineup.indexOf(id) + 1) % lineup.length]]
}

const Project = ({ id, ...props }) => (
    <ProjectContext.Provider {...props} value={projects[id]} />
)

export default Project
