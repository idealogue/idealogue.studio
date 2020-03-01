import React from 'react'
import styled from 'styled-components'
import Link from '$shared/Link'
import { useNextProject } from '$shared/Project'
import Glyph, { ARROW_RIGHT } from '$shared/Glyph'

const UnstyledNextProject = ({ className, children }) => {
    const { name, href } = useNextProject()

    return (
        <div className={className}>
            <div>
                <div className="label">
                    Next Project
                </div>
                <div className="inner">
                    <Link to={href}>
                        {name}
                    </Link>
                    <Link nodecor to={href}>
                        <Glyph source={ARROW_RIGHT} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

const NextProject = styled(UnstyledNextProject)`
    display: flex;
    font-family: 'Publico Text';
    justify-content: center;
    padding: 5.75rem 0 14.5rem;

    a {
        display: block;
        font-size: 1.25rem;
        font-weight: 700;
    }

    a + a {
        margin-left: 1.5rem;
    }

    .label {
        opacity: 0.5;
        margin-bottom: 0.25rem;
    }

    svg {
        display: block;
        height: 1.5rem;
        width: 1.5rem;
    }

    .inner {
        align-items: center;
        display: flex;
    }
`

export default NextProject
