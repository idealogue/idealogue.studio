import React, { createContext, ReactNode, useContext } from 'react'
import { ProjectName } from '../types'
import { getProjectManifest } from '../utils/project'

interface ProjectPageProps {
    children?: ReactNode
    projectName: ProjectName
}

const ProjectNameContext = createContext<ProjectName | null>(null)

export function ProjectPage({ children, projectName }: ProjectPageProps) {
    return (
        <ProjectNameContext.Provider value={projectName}>
            {children}
        </ProjectNameContext.Provider>
    )
}

export function useProjectManifest() {
    const projectName = useContext(ProjectNameContext)

    if (!projectName) {
        throw new Error('Invalid context')
    }

    return getProjectManifest(projectName)
}
