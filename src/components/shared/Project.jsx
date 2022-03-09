import React, { createContext, useContext } from 'react'

export const STREAMR = 'streamr'

export const GOLEM = 'golem'

export const VIZOR = 'vizor'

export const COBALT = 'cobalt'

export const HIVE = 'hive'

export const HUXTABURGER = 'huxtaburger'

export const lineup = [
    STREAMR,
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
        socialPosterUrl: "https://idealogue.studio/images/Cobalt-share.png",
        desc: "Cobalt Case Study",
        title: "Idealogue – Cobalt",
    },
    [GOLEM]: {
        id: GOLEM,
        name: "Golem",
        href: "/golem",
        socialPosterUrl: "https://idealogue.studio/images/Golem-share.png",
        desc: "Golem Case Study",
        title: "Idealogue – Golem",
    },
    [HIVE]: {
        id: HIVE,
        name: "Hive",
        href: "/hive",
        socialPosterUrl: "https://idealogue.studio/images/Hive-share.png",
        desc: "Hive Case Study",
        title: "Idealogue – Hive",
    },
    [HUXTABURGER]: {
        id: HUXTABURGER,
        name: "Huxtaburger",
        href: "/huxtaburger",
        socialPosterUrl: "https://idealogue.studio/images/Huxtaburger-share.png",
        desc: "Huxtaburger Case Study",
        title: "Idealogue – Huxtaburger",
    },
    [STREAMR]: {
        id: STREAMR,
        name: "Streamr",
        href: "/streamr",
        socialPosterUrl: "https://idealogue.studio/images/Streamr-share.png",
        desc: "Streamr Case Study",
        title: "Idealogue – Streamr",
    },
    [VIZOR]: {
        id: VIZOR,
        name: "Vizor",
        href: "/vizor",
        socialPosterUrl: "https://idealogue.studio/images/Vizor-share.png",
        desc: "Vizor Case Study",
        title: "Idealogue – Vizor",
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
