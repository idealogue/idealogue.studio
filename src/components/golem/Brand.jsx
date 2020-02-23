import React from 'react'
import styled from 'styled-components'
import Image from '$golem/Image'
import Container from '$shared/Container'
import Helmet from 'react-helmet'

const Row = styled.div`
    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 96px;
    }
`

const Cell = styled.div`
    width: 50%;
`

const Header = styled.div`
    border-bottom: 2px solid white;
    font-size: 20px;
    line-height: 1em;
    margin-bottom: 2.5em;
    padding-bottom: 1em;
    width: 82%;
`

const Fontface = styled.p`
    && {
        line-height: 1.35;
    }
`

const Roboto = styled(Fontface)`
    && {
        font-family: 'Roboto', sans-serif !important;
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
        font-weight: 700;
    }
`

const Mark = styled.img`
    display: block;
`

const VerticalMark = styled(Mark)`
    width: 115px;
`

const HorizontalMark = styled(Mark)`
    width: 320px;
`

const ColorRect = styled.div`
    background-color: ${({ code }) => code || '#f00'};
    border-radius: 4px;
    height: 69px;
    margin-bottom: 1.5em;
    width: 69px;
`

const Color = styled.div`
    color: #d4d4d4;
    font-size: 12px;
    line-height: 1;
    text-align: center;
`

const Colors = styled.div`
    display: flex;
    justify-content: space-between;
    width: 82%;
`

const Brand = (props) => (
    <div {...props}>
        <Container>
            <Row>
                <Cell>
                    <Header>Mark Animated</Header>
                    <VerticalMark src={Image.MARK_ANIMATED} alt="" />
                </Cell>
                <Cell>
                    <Header>Display Face</Header>
                    <Realtime>
                        Realtime Text
                        <br/>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        <br/>
                        abcdefghijklmnopqrstuvwxyz
                        <br/>
                        1234567890 $£&amp;
                    </Realtime>
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Header>Mark Vertical Lockup</Header>
                    <VerticalMark src={Image.MARK_VERTICAL} alt="" />
                </Cell>
                <Cell>
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
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Header>Mark Horizontal Lockup</Header>
                    <HorizontalMark src={Image.MARK_HORIZONTAL} alt="" />
                </Cell>
                <Cell>
                    <Header>UI &amp; Body</Header>
                    <Helmet>
                        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
                    </Helmet>
                    <Roboto>
                        Roboto
                        <br />
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        <br />
                        abcdefghijklmnopqrstuvwxyz
                        <br />
                        1234567890 $£&amp;
                    </Roboto>
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Header>Brass Stage Colours</Header>
                    <Colors>
                        <Color>
                            <ColorRect code="#005DD5" />
                            <strong>#005DD5</strong>
                        </Color>
                        <Color>
                            <ColorRect code="#FFC442" />
                            <strong>#FFC442</strong>
                        </Color>
                        <Color>
                            <ColorRect code="#37C481" />
                            <strong>#37C481</strong>
                        </Color>
                        <Color>
                            <ColorRect code="#B5B5B5" />
                            <strong>#B5B5B5</strong>
                        </Color>
                    </Colors>
                </Cell>
                <Cell />
            </Row>
        </Container>
    </div>
)

export default Brand
