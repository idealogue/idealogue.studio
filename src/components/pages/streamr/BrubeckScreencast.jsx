import React from 'react'
import styled, { css } from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import { TABLET, DESKTOP } from '$utils/css'
import PrestyledAutoPlayingVideo from '$shared/AutoPlayingVideo'
import Overgrow from './Overgrow'

const AutoPlayingVideo = styled(PrestyledAutoPlayingVideo)`
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

const BrubeckScreencast = ({ caption, ...props }) => (
    <CaptionedContainer {...props} caption={caption}>
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

export default BrubeckScreencast
