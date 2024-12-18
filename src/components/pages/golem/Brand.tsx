import Display from '$shared/Display'
import { XofY, XofYRoot } from '$shared/XofY'
import { LG, MD } from '$utils/css'
import React, { useReducer } from 'react'
import styled, { css } from 'styled-components'
import Image from '~/components/pages/golem/Image'
import {
    Fontface,
    Mark,
    Cell as PrestyledCell,
    Header as PrestyledHeader,
    Row as PrestyledRow,
} from '~/components/shared/Brand'
import Container from '~/components/shared/Container'

const Roboto = styled(Fontface)`
    && {
        font-family: 'Roboto', sans-serif !important;
        font-size: 18px;

        @media (min-width: ${LG}px) {
            font-size: 21px;
        }
    }
`

const Realtime = styled(Fontface)`
    && {
        font-family: 'Realtime Text', sans-serif !important;
        font-weight: 700;
    }
`

const Sharpsans = styled(Fontface)`
    && {
        font-family: 'Sharp Sans', sans-serif !important;
        font-size: 16px;
        font-weight: 700;

        @media (min-width: ${LG}px) {
            font-size: 21px;
        }
    }
`

const VerticalMark = styled(Mark)`
    width: 115px;
`

const HorizontalMark = styled(Mark)`
    width: 272px;

    @media (min-width: ${MD}px) {
        width: 240px;
    }

    @media (min-width: ${LG}px) {
        width: 320px;
    }
`

const ColorRect = styled.div<{ $code?: string }>`
    background-color: ${({ $code = '#f00' }) => $code};
    border-radius: 4px;
    height: 54px;
    margin-bottom: 1.5em;
    width: 54px;

    @media (min-width: ${LG}px) {
        height: 69px;
        width: 69px;
    }
`

const Color = styled.div`
    color: #d4d4d4;
    font-size: 10px;
    line-height: 1;
    text-align: center;

    @media (min-width: ${LG}px) {
        font-size: 12px;
    }
`

const Colors = styled.div`
    display: flex;
    justify-content: space-between;
    width: 82%;
`

const Cell = styled(PrestyledCell)<{ $current?: boolean }>`
    @media (max-width: ${MD - 1}px) {
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 100%;
        visibility: hidden;
        transition: 200ms;
        transition-property: visibility, opacity;
        transition-delay: 200ms, 0s;

        ${({ $current = false }) =>
            $current &&
            css`
                opacity: 1;
                position: relative;
                transition-delay: 0s;
                transition-delay: 200ms;
                visibility: visible;
            `}
    }
`

const Header = styled(PrestyledHeader)`
    @media (max-width: ${MD - 1}px) {
        width: 100%;
    }
`

const Inner = styled.div`
    @media (max-width: ${MD - 1}px) {
        align-items: center;
        display: flex;
        flex-direction: row;
        height: 200px;
        justify-content: center;
    }
`

const Row = styled(PrestyledRow)`
    @media (max-width: ${MD - 1}px) {
        margin-top: 0 !important;
    }
`

const Position = styled.div`
    position: relative;
`

export function Brand() {
    const [slide, next] = useReducer((x) => (x + 1) % 3, 0)

    return (
        <BrandRoot>
            <Container>
                <Position>
                    <Row>
                        <Cell $current={slide === 0}>
                            <Header>Mark Animated</Header>
                            <Inner>
                                <VerticalMark
                                    src={Image.MARK_ANIMATED}
                                    alt=""
                                />
                            </Inner>
                        </Cell>
                        <Display as={Cell} xs="none" md>
                            <Header>Display Face</Header>
                            <Realtime>
                                Realtime Text
                                <br />
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                <br />
                                abcdefghijklmnopqrstuvwxyz
                                <br />
                                1234567890 $£&amp;
                            </Realtime>
                        </Display>
                    </Row>
                    <Row>
                        <Cell $current={slide === 1}>
                            <Header>Mark Vertical Lockup</Header>
                            <Inner>
                                <VerticalMark
                                    src={Image.MARK_VERTICAL}
                                    alt=""
                                />
                            </Inner>
                        </Cell>
                        <Display as={Cell} xs="none" md>
                            <Header>Headlines</Header>
                            <Sharpsans>
                                Sharp Sans
                                <br />
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                <br />
                                abcdefghijklmnopqrstuvwxyz
                                <br />
                                1234567890 $£&amp;
                            </Sharpsans>
                        </Display>
                    </Row>
                    <Row>
                        <Cell $current={slide === 2}>
                            <Header>Mark Horizontal Lockup</Header>
                            <Inner>
                                <HorizontalMark
                                    src={Image.MARK_HORIZONTAL}
                                    alt=""
                                />
                            </Inner>
                        </Cell>
                        <Display as={Cell} xs="none" md>
                            <Header>UI &amp; Body</Header>
                            <Roboto>
                                Roboto
                                <br />
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                <br />
                                abcdefghijklmnopqrstuvwxyz
                                <br />
                                1234567890 $£&amp;
                            </Roboto>
                        </Display>
                    </Row>
                    <Display as={Row} xs="none" md="flex">
                        <Cell>
                            <Header>Brass Stage Colours</Header>
                            <Colors>
                                <Color>
                                    <ColorRect $code="#005DD5" />
                                    <strong>#005DD5</strong>
                                </Color>
                                <Color>
                                    <ColorRect $code="#FFC442" />
                                    <strong>#FFC442</strong>
                                </Color>
                                <Color>
                                    <ColorRect $code="#37C481" />
                                    <strong>#37C481</strong>
                                </Color>
                                <Color>
                                    <ColorRect $code="#B5B5B5" />
                                    <strong>#B5B5B5</strong>
                                </Color>
                            </Colors>
                        </Cell>
                        <Cell />
                    </Display>
                </Position>
                <Display md="none">
                    <XofY x={slide + 1} y={3} onClick={next} />
                </Display>
            </Container>
        </BrandRoot>
    )
}

const BrandRoot = styled.div`
    ${XofYRoot} {
        margin: 72px auto 0;
        width: 56px;
    }
`
