import { ALL as Image } from '$golem/Image'
import { CaptionedContainer } from '$shared/CaptionedContainer'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'

export function Identity() {
    return (
        <div>
            <CaptionedContainer
                caption={
                    <>
                        Exploration and development for the Brass
                        Golem&nbsp;character
                    </>
                }
            >
                <FluidImage src={Image.IDENTITY} />
            </CaptionedContainer>
        </div>
    )
}
