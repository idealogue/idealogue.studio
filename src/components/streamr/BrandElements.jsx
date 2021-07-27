import React from 'react'
import styled from 'styled-components'
import Image from '$streamr/Image'
import { Row, Cell, Header, Fontface, Mark } from '$shared/Brand'
import { PLEX_MONO, PLEX_SANS } from '$utils/css'
import Spacer from '$shared/Spacer'

const LargeMark = styled(Mark)`
    margin: 0 auto;
    width: 298px;
`

const ShrunkContainer = styled.div`
    width: 82%;
`

const VerticalMark = styled(Mark)`
    margin: 0 auto;
    width: 120px;
`

const HorizontalMark = styled(Mark)`
    width: 292px;
`

const PlexSans = styled(Fontface)`
    && {
        font-family: ${PLEX_SANS};
    }
`

const PlexMono = styled(Fontface)`
    && {
        font-family: ${PLEX_MONO};
    }
`

const UnstyledBrandElements = (props) => (
    <div {...props}>
        <Spacer tail>
            <LargeMark src={Image.LOGO_ROUNDED} alt="Logo" />
        </Spacer>
        <Row>
            <Cell>
                <Header>Mark Vertical Lockup</Header>
                <ShrunkContainer>
                    <VerticalMark src={Image.LOGO_VERTICAL} alt="Mark Vertical Lockup" />
                </ShrunkContainer>
            </Cell>
            <Cell>
                <Header>Text and Display Face</Header>
                <PlexSans>
                    Plex Sans
                    <br/>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    <br/>
                    abcdefghijklmnopqrstuvwxyz
                    <br/>
                    1234567890 $£&amp;
                </PlexSans>
            </Cell>
        </Row>
        <Row>
            <Cell>
                <Header>Mark Horizontal Lockup</Header>
                <HorizontalMark src={Image.LOGO_HORIZONTAL} alt="Mark Horizontal Lockup" />
            </Cell>
            <Cell>
                <Header>Module UI and Code Face</Header>
                <PlexMono>
                    Plex Mono
                    <br/>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    <br/>
                    abcdefghijklmnopqrstuvwxyz
                    <br/>
                    1234567890 $£&amp;
                </PlexMono>
            </Cell>
        </Row>
    </div>
)

const BrandElements = styled(UnstyledBrandElements)`
`

export default BrandElements
