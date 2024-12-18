import { PhoneFrame, PhoneFrameRoot } from '$shared/PhoneFrame'
import * as React from 'react'
import styled from 'styled-components'
import AutoPlayingVideo from '~/components/shared/AutoPlayingVideo'

export function BrowsingVideo() {
    return (
        <BrowsingVideoRoot>
            <PhoneFrame>
                <AutoPlayingVideo loop playsInline muted>
                    <source src="/videos/hux.mp4" type="video/mp4" />
                    <source src="/videos/hux.webm" type="video/webm" />
                    <source src="/videos/hux.mov" type="video/quicktime" />
                </AutoPlayingVideo>
            </PhoneFrame>
        </BrowsingVideoRoot>
    )
}

const BrowsingVideoRoot = styled.div`
    ${PhoneFrameRoot} {
        margin: 0 auto;
    }
`
