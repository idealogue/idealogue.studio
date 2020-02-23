import React from 'react'
import styled from 'styled-components'
import Video from '$shared/Video'
import Caption from '$shared/Caption'
import Container from '$shared/Container'

const CaptionWrapper = styled.div`
    position: relative;

    ${Caption} {
        position: absolute;
        top: -128px;
        width: 100%;
    }
`

const UnstyledGolemCharacter = (props) => (
    <div {...props}>
        <Video id="golemCharacter" loop autoPlay playsInline muted />
        <Container>
            <CaptionWrapper>
                <Caption>
                    Loop animation of the Brass Golem character
                </Caption>
            </CaptionWrapper>
        </Container>
    </div>
)

const GolemCharacter = styled(UnstyledGolemCharacter)`
    video {
        display: block;
        width: 100%;
    }
`

export default GolemCharacter
