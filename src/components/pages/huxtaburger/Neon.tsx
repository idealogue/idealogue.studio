import { ALL as Image } from '$hux/Image'
import { Container } from '$shared/Container'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'

export function Neon(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <Container>
                <FluidImage src={Image.NEON} />
            </Container>
        </div>
    )
}
