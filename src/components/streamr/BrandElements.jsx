import React from 'react'
import styled from 'styled-components'
import Image from '$streamr/Image'
import { Row as PrestyledRow, Cell, Header, Fontface, Mark } from '$shared/Brand'
import { PLEX_MONO, PLEX_SANS, LG, MD } from '$utils/css'
import Spacer from '$shared/Spacer'
import Display from '$shared/Display'

const LargeMarkWrap = styled.div`
    margin: 0 auto;
    max-width: 50%;
    position: relative;
    width: 240px;

    > div {
        padding-top: 100%;
    }

    @media (min-width: ${LG}px) {
        width: 298px;
    }
`

const LargeMark = styled(Mark)`
    height: 150%;
    left: -25%;
    position: absolute;
    top: -25%;
    width: 150%;
`

const VerticalMark = styled(Mark)`
    margin: 0 auto;
    max-width: 100%;
    width: 72px;
    
    @media (min-width: ${MD}px) {
        width: 120px;
    }
`

const HorizontalMark = styled(Mark)`
    margin: 0 auto;
    max-width: 100%;
    width: 176px;

    @media (min-width: ${MD}px) {
        margin: 0;
        width: 292px;
    }
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

const Row = styled(PrestyledRow)`
    & + &,
    ${Cell} + ${Cell} {
        margin-top: 96px;
    }

    @media (min-width: ${MD}px) {
        & + &,
        ${Cell} + ${Cell} {
            margin-top: 168px;
        }
    }

    ${Cell} {
        margin: 0 auto;
        max-width: 360px;
        width: auto;
    }

    ${Header} {
        font-size: 20px;
        width: auto;
    }

    @media (max-width: ${LG - 1}px) {
        display: block;
        justify-content: normal;
    }

    @media (min-width: ${LG}px) {
        ${Cell} {
            margin: 0;
        }

        ${Cell} + ${Cell} {
            margin-top: 0;
        }

        ${Cell} {
            width: 50%;
        }
    }
`

const UnstyledBrandElements = (props) => (
    <div {...props}>
        <Spacer tail>
            <LargeMarkWrap>
                <div />
                <LargeMark src={Image.LOGO} alt="Logo" />
            </LargeMarkWrap>
        </Spacer>
        <Row>
            <Cell>
                <Header>Mark Vertical Lockup</Header>
                <VerticalMark src={Image.LOGO_VERTICAL} alt="Mark Vertical Lockup" />
            </Cell>
            <Display as={Cell} xs lg="none" xl="none">
                <Header>Mark Horizontal Lockup</Header>
                <HorizontalMark src={Image.LOGO_HORIZONTAL} alt="Mark Horizontal Lockup" />
            </Display>
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
            <Display as={Cell} xs="none" lg>
                <Header>Mark Horizontal Lockup</Header>
                <HorizontalMark src={Image.LOGO_HORIZONTAL} alt="Mark Horizontal Lockup" />
            </Display>
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
