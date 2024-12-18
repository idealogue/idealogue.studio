import * as React from 'react'
import styled from 'styled-components'
import Glyph, { ARROW_RIGHT } from '~/components/shared/Glyph'
import Link from '~/components/shared/Link'
import { useNextProjectManifest } from '~/utils/project'

type NextProjectProps = React.HTMLAttributes<HTMLDivElement>

const UnstyledNextProject = (props: NextProjectProps) => {
    const { displayName, url } = useNextProjectManifest()

    return (
        <div {...props}>
            <div>
                <div className="label">Next Project</div>
                <div className="inner">
                    <Link to={url}>{displayName}</Link>
                    <Link nodecor to={url}>
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
    padding: 5.75rem 0 0;

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
