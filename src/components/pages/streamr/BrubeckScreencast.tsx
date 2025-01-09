import { AutoPlayingVideo as PrestyledAutoPlayingVideo } from '$shared/AutoPlayingVideo'
import { CaptionedContainer } from '$shared/CaptionedContainer'
import { DESKTOP, TABLET } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'
import { Overgrow } from './Overgrow'

interface BrubeckScreencastProps {
    caption: string
}

export function BrubeckScreencast({ caption }: BrubeckScreencastProps) {
    return (
        <CaptionedContainer caption={caption}>
            <Overgrow>
                <AutoPlayingVideo loop playsInline muted $mobile>
                    <source src="/videos/brubeckMobile.mp4" type="video/mp4" />
                </AutoPlayingVideo>
                <AutoPlayingVideo loop playsInline muted $tablet>
                    <source src="/videos/brubeckTablet.mp4" type="video/mp4" />
                </AutoPlayingVideo>
                <AutoPlayingVideo loop playsInline muted $desktop>
                    <source src="/videos/brubeckDesktop.mp4" type="video/mp4" />
                </AutoPlayingVideo>
            </Overgrow>
        </CaptionedContainer>
    )
}

const AutoPlayingVideo = styled(PrestyledAutoPlayingVideo)<{
    $mobile?: boolean
    $tablet?: boolean
    $desktop?: boolean
}>`
    border-radius: 10px;

    ${({ $mobile }) =>
        !!$mobile &&
        css`
            @media ${TABLET} {
                display: none;
            }
        `}

    ${({ $tablet }) =>
        !!$tablet &&
        css`
            display: none;

            @media ${TABLET} {
                display: block;
            }

            @media ${DESKTOP} {
                display: none;
            }
        `}

    ${({ $desktop }) =>
        !!$desktop &&
        css`
            display: none;

            @media ${DESKTOP} {
                display: block;
            }
        `}
`
