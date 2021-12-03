import React from 'react'
import styled, { css } from 'styled-components'
import CaptionedContainer from '$shared/CaptionedContainer'
import { TABLET, DESKTOP } from '$utils/css'
import PrestyledVideo from '$shared/Video'
import Overgrow from './Overgrow'

const Video = styled(PrestyledVideo)`
    border-radius: 10px;

    ${({ $mobile }) => !!$mobile && css`
        @media ${TABLET} {
            display: none;
        }
    `}

    ${({ $tablet }) => !!$tablet && css`
        display: none;

        @media ${TABLET} {
            display: block;
        }

        @media ${DESKTOP} {
            display: none;
        }
    `}

    ${({ $desktop }) => !!$desktop && css`
        display: none;

        @media ${DESKTOP} {
            display: block;
        }
    `}
`

const BrubeckScreencast = ({ caption, ...props }) => (
    <CaptionedContainer
        {...props}
        caption={caption}
    >
        <Overgrow>
            <Video loop autoPlay playsInline muted $mobile>
                <source src="/videos/brubeckMobile.mp4" type="video/mp4" />
            </Video>
            <Video loop autoPlay playsInline muted $tablet>
                <source src="/videos/brubeckTablet.mp4" type="video/mp4" />
            </Video>
            <Video loop autoPlay playsInline muted $desktop>
                <source src="/videos/brubeckDesktop.mp4" type="video/mp4" />
            </Video>
        </Overgrow>
    </CaptionedContainer>
)

export default BrubeckScreencast
