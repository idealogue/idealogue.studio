import React from 'react'
import Container from '$shared/Container'
import Contributor, { Contributors } from '$shared/Contributor'
import Hero from '$shared/Hero'
import Layout from '$shared/Layout'
import NextProject from '$shared/NextProject'
import Project, { HIVE } from '$shared/Project'
import Section from '$shared/Section'
import SectionHeader from '$shared/SectionHeader'
import Icons from '$hive/Icons'
import OldWallet from '$hive/OldWallet'
import FluidImage from '$shared/FluidImage'
import BrowserFrame from '$shared/BrowserFrame'
import Image from '$hive/Image'
import NewWallet from '$hive/NewWallet'
import Spacer from '$shared/Spacer'
import Topic from '$shared/Topic'
import ScrollIndicator from '$shared/ScrollIndicator'

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

const HivePage = () => (
    <Project id={HIVE}>
        <Layout theme={LayoutTheme}>
            <Section theme={YellowWhiteTheme} menuToggleBackground>
                <Hero>
                    <p>
                        Hive approached us for a brand refresh and UI for their&nbsp;web and iOS
                        Bitcoin wallets.
                    </p>
                </Hero>
            </Section>
            <ScrollIndicator.Target />
            <Topic title="Hex Wild">
                <Section theme={WhiteTheme} head menuToggleColor="#575757">
                    <SectionHeader no={1} />
                    <Container>
                        <p>
                            Hive was a good brand to build on as they already had a great name,
                            they just needed a more flexible mark, some consistency across their
                            communication, and stronger typography. We started with the hex structure
                            from honeycomb and created a new mark plus a range of geometric avatars
                            for the app and site.
                        </p>
                        <Spacer head>
                            <Icons />
                        </Spacer>
                    </Container>
                </Section>
            </Topic>
            <Topic title="Hive Wallet 1.0">
                <Section theme={WhiteTheme} tail menuToggleColor="#575757">
                    <Spacer head>
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                The idea behind Hive Web and Hive for iOS was to make an easy to use,
                                secure wallet for retail bitcoin ??? paying in stores or sending to friends.
                                We created a new way to find other users around you wirelessly, called
                                Waggle, after the way bees move their bodies to guide other bees.
                            </p>
                        </Container>
                    </Spacer>
                    <Spacer head scale={0.6}>
                        <OldWallet />
                    </Spacer>
                </Section>
            </Topic>
            <Topic title="Hive Wallet 2.0">
                <Section theme={YellowGrayTheme} head tail menuToggleColor="#575757">
                    <SectionHeader no={3} />
                    <Container>
                        <p>
                            Hive 1.0 was a great if you held just Bitcoin, but after we added Litecoin
                            it became clear it wouldn???t scale well to many tokens. So we redesigned
                            it to accomodate a whole portfolio of tokens, with a tile UI, live search,
                            and external app integrations to bring other services like price tickers
                            and instant trading. In the process we also made it visually lighter.
                        </p>
                    </Container>
                    <Spacer head scale={0.6}>
                        <NewWallet />
                    </Spacer>
                </Section>
            </Topic>
            <Topic title="Hive Hosted">
                <Section theme={WhiteTheme} head menuToggleColor="#575757">
                    <SectionHeader no={4} />
                    <Container>
                        <p>
                            Though it never got off the ground, we also designed a white label wallet
                            system for Hive, along with a back end dashboard for clients to manage
                            their wallet, get notifications, and real time analytics.
                        </p>
                        <Spacer head scale={0.6}>
                            <BrowserFrame>
                                <FluidImage src={Image.HOSTED} alt="Hive hosted" />
                            </BrowserFrame>
                        </Spacer>
                    </Container>
                </Section>
            </Topic>
            <Topic title="Credits">
                <Section theme={WhiteTheme} head tail menuToggleColor="#575757">
                    <SectionHeader no={5} />
                    <Contributors>
                        <Contributor name="Matt Innes" role="Brand, Direction, Design" />
                        <Contributor name="Saori Kajiwara" role="UI/UX Design" />
                        <Contributor name="Ben Jennings" role="Design, Front end code" />
                        <Contributor name="David Hauser" role="Front end code" />
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
    </Project>
)


export default HivePage
