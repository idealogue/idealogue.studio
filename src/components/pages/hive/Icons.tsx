import { ALL as Image } from '$hive/Image'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'
import styled from 'styled-components'

export function Icons(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <IconsRoot {...props}>
            <FluidImage src={Image.ICONS} alt="Icons" />
        </IconsRoot>
    )
}

const IconsRoot = styled.div`
    margin: 0 auto;
    max-width: 80%;
    width: 628px;
`
