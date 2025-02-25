import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Player } from '~/components/pages/octant/Player'
import { Caption as PrestyledCaption } from '~/components/shared/Caption'
import { TABLET } from '~/utils/css'
import Poster from './assets/view_all_mobile_poster.jpg'

export function ViewGalleryMobile() {
    const [clipIndex, setClipIndex] = useState(0)

    return (
        <ViewGalleryMobileRoot>
            <Player
                src={'/videos/octant/view_all_mobile.mp4'}
                posterSrc={Poster}
                durationsInSeconds={durations}
                onClipChange={setClipIndex}
            />
            <Captions>
                <PrestyledCaption>&zwnj;</PrestyledCaption>
                <Caption $active={clipIndex === 0}>Main views of Octant.app </Caption>
                <Caption $active={clipIndex === 1}>Projects view of Octant.app</Caption>
                <Caption $active={clipIndex === 2}>Metrics views of Octant.app </Caption>
            </Captions>
        </ViewGalleryMobileRoot>
    )
}

const durations: [number, ...number[]] = [
    9.033333 /* homepage */, 12.033333 /* projects */, 10.033333 /* metrics */,
]

const Caption = styled(PrestyledCaption)<{ $active: boolean }>`
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transition: 350ms;
    transition-property: visibility, opacity;
    transition-delay: 350ms, 0s;
    top: 0;

    ${({ $active }) =>
        $active &&
        css`
            visibility: visible;
            opacity: 1;
            transition-delay: 350ms;
        `}
`

const Captions = styled.div`
    position: relative;
`

const ViewGalleryMobileRoot = styled.div`
    @media ${TABLET} {
        display: none;
    }
`
