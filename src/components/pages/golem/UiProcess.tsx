import { ALL as Image } from '$golem/Image'
import { CaptionedContainer } from '$shared/CaptionedContainer'
import { FluidImage } from '$shared/FluidImage'
import * as React from 'react'

export function UiProcess() {
    return (
        <div>
            <CaptionedContainer caption="Early wireframes for the Golem app">
                <FluidImage src={Image.UI_PROCESS} />
            </CaptionedContainer>
        </div>
    )
}
