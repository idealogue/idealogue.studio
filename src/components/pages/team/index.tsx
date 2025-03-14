import * as React from 'react'
import styled, { css } from 'styled-components'
import { Section } from '~/components/Section2'
import { Layout } from '~/components/shared/Layout'
import { font } from '~/utils/css'
import PictureTeam0 from './assets/team0.jpg'
import PictureTeam02x from './assets/team0@2x.jpg'
import MobilePictureTeam0 from './assets/team0_mobile.jpg'
import MobilePictureTeam02x from './assets/team0_mobile@2x.jpg'
import PictureTeam1 from './assets/team1.jpg'
import PictureTeam12x from './assets/team1@2x.jpg'
import MobilePictureTeam1 from './assets/team1_mobile.jpg'
import MobilePictureTeam12x from './assets/team1_mobile@2x.jpg'
import PictureTeam2 from './assets/team2.jpg'
import PictureTeam22x from './assets/team2@2x.jpg'
import MobilePictureTeam2 from './assets/team2_mobile.jpg'
import MobilePictureTeam22x from './assets/team2_mobile@2x.jpg'

export function TeamPage() {
    return (
        <Layout rootCss={layoutCss}>
            <Section x s m l css={defaultCss}>
                <OuterWrap>
                    <Container>
                        <Content>
                            <About>
                                <h1>About Idealogue</h1>
                                <p>
                                    Matt and Saori both studied Communication Design in&nbsp;Melbourne
                                    at&nbsp;Swinburne Design School before establishing Idealogue in
                                    2013. Our focus is&nbsp;to work on projects we that believe in,
                                    at&nbsp;the&nbsp;point where design and tech&nbsp;meet.
                                </p>
                                <p>
                                    We've designed brands, software and websites for projects
                                    spanning webVR, public goods funding, realtime data, security
                                    and&nbsp;finance.
                                </p>
                                <p>
                                    Our studio is located in Nightingale&apos;s Wurru Wurru Biik
                                    building, on the traditional lands of&nbsp;the Wurundjeri people
                                    of&nbsp;the Kulin Nation. Rin, our friendly studio Staffy will
                                    be there to greet you&nbsp;if&nbsp;you&nbsp;visit.
                                </p>
                            </About>
                            <Pictures>
                                <PicturesInner>
                                    <img
                                        alt="Matt & Saori"
                                        src={PictureTeam0}
                                        srcSet={`${PictureTeam02x} 2x`}
                                    />
                                    <Spaceholder />
                                    <img
                                        alt="Book shelf"
                                        src={PictureTeam1}
                                        srcSet={`${PictureTeam12x} 2x`}
                                    />
                                    <img
                                        alt="At work"
                                        src={PictureTeam2}
                                        srcSet={`${PictureTeam22x} 2x`}
                                    />
                                </PicturesInner>
                                <PicturesInnerMobile>
                                    <img
                                        alt="Matt & Saori"
                                        src={MobilePictureTeam0}
                                        srcSet={`${MobilePictureTeam02x} 2x`}
                                    />
                                    <img
                                        alt="Book shelf"
                                        src={MobilePictureTeam1}
                                        srcSet={`${MobilePictureTeam12x} 2x`}
                                    />
                                    <img
                                        alt="At work"
                                        src={MobilePictureTeam2}
                                        srcSet={`${MobilePictureTeam22x} 2x`}
                                    />
                                </PicturesInnerMobile>
                            </Pictures>
                        </Content>
                    </Container>
                </OuterWrap>
            </Section>
        </Layout>
    )
}

const layoutCss = css`
    --Layout_Background: #ffffff;
`

const defaultCss = css`
    --MenuToggle_Color: #06042a;
    --Section_SpaceBetweenParagraphs: 1.75rem;

    h1 {
        ${font('lab grotesque')}

        font-size: 1.125rem;
        font-weight: 700;
        margin: 0 0 1rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.75rem;
    }
`

const PicturesInner = styled.div`
    display: none;

    @media (min-width: 51.5rem) {
        display: grid;
        grid-template-columns: auto auto;
        gap: 1rem;
    }
`

const PicturesInnerMobile = styled.div`
    img {
        max-width: 100%;
    }

    img + img {
        margin-top: 1rem;
    }

    @media (min-width: 51.5rem) {
        display: none;
    }
`

const Spaceholder = styled.div``

const Pictures = styled.div`
    img {
        border-radius: 0.5rem;
        display: block;
    }

    @media (min-width: 51.5rem) {
        width: 18.5rem;
    }

    @media (min-width: 71.5rem) {
        max-width: 26rem;
        min-height: 10rem;
        min-width: 18.5rem;
        width: 100%;
    }
`

const About = styled.div`
    width: 100%;
    min-width: 0;

    @media (min-width: 71.5rem) {
        width: 28rem;
    }
`

const Content = styled.div`
    grid-template-columns: 1fr;
    gap: 8rem;
    display: grid;

    @media (min-width: 51.5rem) {
        gap: 5rem;
        grid-template-columns: 1fr auto;
    }
`

const Container = styled.div`
    margin: 0 auto;
    max-width: 100%;
    width: 20rem;

    @media (min-width: 51.5rem) {
        width: 51.5rem;
    }

    @media (min-width: 71.5rem) {
        width: 68rem;
    }
`

const OuterWrap = styled.div`
    padding: 0 2rem;

    @media (min-width: 51.5rem) {
        padding: 0 4rem;
    }

    @media (min-width: 71.5rem) {
        padding: 0 10rem;
    }
`
