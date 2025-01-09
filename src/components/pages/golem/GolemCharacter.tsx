import { Caption } from '$shared/Caption'
import { Display } from '$shared/Display'
import { LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'
import { Container } from '~/components/shared/Container'
import { Video } from '~/components/shared/Video'

export function GolemCharacter() {
    return (
        <GolemCharacterRoot>
            <Video loop autoPlay playsInline muted>
                <source src="/videos/golem_character.mp4" type="video/mp4" />
                <source src="/videos/golem_character.webm" type="video/webm" />
                <source
                    src="/videos/golem_character.mov"
                    type="video/quicktime"
                />
            </Video>
            <Display as={Container} xs="none" sm>
                <CaptionWrapper>
                    <Caption>
                        Loop animation of the Brass Golem character
                    </Caption>
                </CaptionWrapper>
            </Display>
        </GolemCharacterRoot>
    )
}

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

const GolemCharacterRoot = styled.div``
