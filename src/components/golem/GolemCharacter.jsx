import React from 'react'
import styled from 'styled-components'
import Video from '$shared/Video'
import Caption from '$shared/Caption'
import Container from '$shared/Container'
import Display from '$shared/Display'
import { SM, MD, LG } from '$utils/css'

const CaptionWrapper = styled.div`
    position: relative;

    ${Caption} {
        position: absolute;
        width: 100%;
    }

    @media (min-width: ${SM}px) {
        ${Caption} {
            top: -64px;
        }
    }

    @media (min-width: ${MD}px) {
        ${Caption} {
            top: -88px;
        }
    }

    @media (min-width: ${LG}px) {
        ${Caption} {
            top: -128px;
        }
    }
`

const UnstyledGolemCharacter = (props) => (
    <div {...props}>
        <Video id="golemCharacter" loop autoPlay playsInline muted />
        <Display as={Container} xs="none" sm="block">
            <CaptionWrapper>
                <Caption>
                    Loop animation of the Brass Golem character
                </Caption>
            </CaptionWrapper>
        </Display>
    </div>
)

const GolemCharacter = styled(UnstyledGolemCharacter)`
    video {
        display: block;
        width: 100%;
    }
`

export default GolemCharacter
