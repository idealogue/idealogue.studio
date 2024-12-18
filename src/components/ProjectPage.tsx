import React, { ReactNode } from 'react'
import { ProjectName } from '../types'
import { ProjectNameContext } from '../utils/project'

interface ProjectPageProps {
    children?: ReactNode
    projectName: ProjectName
}

export function ProjectPage({ children, projectName }: ProjectPageProps) {
    return (
        <ProjectNameContext.Provider value={projectName}>
            {children}
        </ProjectNameContext.Provider>
    )
}
