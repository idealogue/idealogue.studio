import { Display } from '$shared/Display'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'
import { ALL as Image } from './Image'

export function Modules(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <ModulesRoot {...props}>
            <div>
                <FluidImage src={Image.UI_0} />
            </div>
            <div>
                <FluidImage src={Image.UI_1} />
            </div>
            <Display xs="none" sm>
                <FluidImage src={Image.UI_2} />
            </Display>
        </ModulesRoot>
    )
}

const ModulesRoot = styled.div`
    display: flex;

    div + div {
        margin-left: 5%;
    }
`
