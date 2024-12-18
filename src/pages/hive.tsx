import Icons from '$hive/Icons'
import Image from '$hive/Image'
import NewWallet from '$hive/NewWallet'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import { OldWallet } from '~/components/pages/hive/OldWallet'
import { ProjectPage } from '~/components/ProjectPage'
import { Section } from '~/components/Section'
import BrowserFrame from '~/components/shared/BrowserFrame'
import { Container } from '~/components/shared/Container'
import Contributor, { Contributors } from '~/components/shared/Contributor'
import { FluidImage } from '~/components/shared/FluidImage'
import Hero from '~/components/shared/Hero'
import Layout from '~/components/shared/Layout'
import NextProject from '~/components/shared/NextProject'
import ScrollIndicator from '~/components/shared/ScrollIndicator'
import SectionHeader from '~/components/shared/SectionHeader'
import Topic from '~/components/shared/Topic'
import { Spacer } from '~/components/Spacer'
import { Seo } from '../components/Seo'

const LayoutTheme = {
    backgroundColor: '#edb400',
}

const YellowWhiteTheme = {
    backgroundColor: '#fcc000',
    color: '#ffffff',
}

const YellowGrayTheme = {
    backgroundColor: '#fcc000',
    color: '#575757',
}

const WhiteTheme = {
    backgroundColor: '#f9f9f9',
    color: '#575757',
}

export default function HivePage() {
    return (
        <ProjectPage projectName="hive">
            <Layout theme={LayoutTheme}>
                <Section {...YellowWhiteTheme} menuToggleBackground>
                    <Hero>
                        <p>
                            Hive approached us for a brand refresh and UI for
                            their&nbsp;web and iOS Bitcoin wallets.
                        </p>
                    </Hero>
                </Section>
                <ScrollIndicator.Target />
                <Topic title="Hex Wild">
                    <Section
                        {...WhiteTheme}
                        spacerProps={{ head: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                Hive was a good brand to build on as they
                                already had a great name, they just needed a
                                more flexible mark, some consistency across
                                their communication, and stronger typography. We
                                started with the hex structure from honeycomb
                                and created a new mark plus a range of geometric
                                avatars for the app and site.
                            </p>
                            <Spacer head>
                                <Icons />
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="Hive Wallet 1.0">
                    <Section
                        {...WhiteTheme}
                        spacerProps={{ tail: true }}
                        menuToggleColor="#575757"
                    >
                        <Spacer head>
                            <SectionHeader no={2} />
                            <Container>
                                <p>
                                    The idea behind Hive Web and Hive for iOS
                                    was to make an easy to use, secure wallet
                                    for retail bitcoin – paying in stores or
                                    sending to friends. We created a new way to
                                    find other users around you wirelessly,
                                    called Waggle, after the way bees move their
                                    bodies to guide other bees.
                                </p>
                            </Container>
                        </Spacer>
                        <Spacer head scale={0.6}>
                            <OldWallet />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Hive Wallet 2.0">
                    <Section
                        {...YellowGrayTheme}
                        spacerProps={{ head: true, tail: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                Hive 1.0 was a great if you held just Bitcoin,
                                but after we added Litecoin it became clear it
                                wouldn’t scale well to many tokens. So we
                                redesigned it to accomodate a whole portfolio of
                                tokens, with a tile UI, live search, and
                                external app integrations to bring other
                                services like price tickers and instant trading.
                                In the process we also made it visually lighter.
                            </p>
                        </Container>
                        <Spacer head scale={0.6}>
                            <NewWallet />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Hive Hosted">
                    <Section
                        {...WhiteTheme}
                        spacerProps={{ head: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={4} />
                        <Container>
                            <p>
                                Though it never got off the ground, we also
                                designed a white label wallet system for Hive,
                                along with a back end dashboard for clients to
                                manage their wallet, get notifications, and real
                                time analytics.
                            </p>
                            <Spacer head scale={0.6}>
                                <BrowserFrame>
                                    <FluidImage
                                        src={Image.HOSTED}
                                        alt="Hive hosted"
                                    />
                                </BrowserFrame>
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section
                        {...WhiteTheme}
                        spacerProps={{ head: true, tail: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={5} />
                        <Contributors>
                            <Contributor
                                name="Matt Innes"
                                role="Brand, Direction, Design"
                            />
                            <Contributor
                                name="Saori Kajiwara"
                                role="UI/UX Design"
                            />
                            <Contributor
                                name="Ben Jennings"
                                role="Design, Front end code"
                            />
                            <Contributor
                                name="David Hauser"
                                role="Front end code"
                            />
                            <Contributor name="Wei Lu" role="Back end code" />
                            <Contributor name="Matt Lenz" role="iOS version" />
                        </Contributors>
                        <Container>
                            <hr />
                        </Container>
                        <NextProject />
                    </Section>
                </Topic>
            </Layout>
        </ProjectPage>
    )
}

export const Head: HeadFC = () => {
    return <Seo projectName="hive" />
}
