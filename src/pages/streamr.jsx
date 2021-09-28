import '@ibm/plex/css/ibm-plex.css'

import React from 'react'
import Bullet from '$shared/Bullet'
import Container from '$shared/Container'
import Contributor, { Contributors } from '$shared/Contributor'
import Hero from '$shared/Hero'
import Layout from '$shared/Layout'
import Link from '$shared/Link'
import NextProject from '$shared/NextProject'
import Project, { STREAMR } from '$shared/Project'
import Section from '$shared/Section'
import SectionHeader from '$shared/SectionHeader'
import PublicSiteView from '$streamr/PublicSiteView'
import Modules from '$streamr/Modules'
import EditorMockup from '$streamr/EditorMockup'
import BrandFilm from '$streamr/BrandFilm'
import ConsensusFilm from '$streamr/ConsensusFilm'
import BrandElements from '$streamr/BrandElements'
import Icons from '$streamr/Icons'
import IconGrid from '$streamr/IconGrid'
import Spacer from '$shared/Spacer'
import Display from '$shared/Display'
import ConsensusGallery from '$streamr/ConsensusGallery'
import Image from '$streamr/Image'
import Topic from '$shared/Topic'
import ScrollIndicator from '$shared/ScrollIndicator'

const LayoutTheme = {
    backgroundColor: '#06042a',
}

const DarkBlueTheme = {
    backgroundColor: '#06042a',
    color: '#ffffff',
}

const BlueTheme = {
    backgroundColor: '#09006d',
    color: '#ffffff',
}

const StreamrPage = () => (
    <Project id={STREAMR}>
        <Layout theme={LayoutTheme}>
            <Section theme={DarkBlueTheme} menuToggleBackground>
                <Hero>
                    <p>
                        We rebranded Streamr, a decentralised realtime data platform, and integrated
                        their services into a&nbsp;more&nbsp;user-focused app called Core.
                    </p>
                </Hero>
            </Section>
            <Section theme={DarkBlueTheme} tail>
                <BrandFilm />
                <ScrollIndicator.Target />
                <Topic title="An introduction to realtime data">
                    <Spacer head>
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                When we first met them in 2017, Streamr had a big vision for the future
                                of realtime data economy, and a powerful but somewhat rough visual
                                programming app already working. They were planning to build a global
                                peer-to-peer realtime data network, with nodes incentivised by an ERC-20
                                crypto token, DATA.
                            </p>
                            <p>
                                Given our experience with both crypto and visual programming systems,
                                it seemed like a good match, so we came onboard in late 2017. We first
                                worked on a website that helped to raise $30M in an initial coin offering,
                                and then turned focus to a rebrand.
                            </p>
                            <Spacer head tail>
                                <BrandElements />
                            </Spacer>
                            <p>
                                The existing brand was fairly basic, but they were attached to the name, and
                                wanted to retain some connection to the original brand. We kept the name and
                                their orange colour, and replaced the rest. After exploring a number of
                                directions we arrived at a stylised S shape built from the ubiquitous wi-fi
                                mark, representing the variety of realtime data sources Streamr works with.
                                If you'd like a deeper dive into the brand process, there's a Medium piece
                                here about it. 
                            </p>
                        </Container>
                    </Spacer>
                </Topic>
            </Section>
            <Topic title="Creating a stylised data diorama">
                <Section theme={BlueTheme} head tail>
                    <SectionHeader no={2} />
                    <Container>
                        <p>
                            Streamr CEO, Henri Pihkala, and I preferred to avoid the sci-fi cliches
                            that seem to be ever-present in the crypto world, and instead aimed
                            to visualise a semi-realistic, near-future world that works in different
                            ways to our present day. A stylised but detailed 3D world, seen as a kind
                            of data diorama was the starting point. To help us realise this we brought
                            on one of our regular collaborators, the illustrator Stuart Wade. His
                            detailed isometric illustrations and animations helped visualise Streamr’s
                            largely invisible data products and services, along with a touch of humour.
                        </p>
                    </Container>
                    <Spacer head tail>
                        <Icons />
                    </Spacer>
                    <IconGrid />
                </Section>
            </Topic>
            <Topic title="Consensus New York — an early milestone">
                <Section theme={DarkBlueTheme} head>
                    <SectionHeader no={3} />
                    <Container>
                        <p>
                            The first new app to roll out was a brand new Data Marketplace MVP, which
                            from the start of design to launch at the Consensus conference in May 2018
                            was a touch over 3 months — probably the fastest we've ever turned around
                            an entire app from scratch. Launch was a bit hectic, and the app MVP was
                            a bit rough, but it was well received, and certainly was a trial by fire
                            for the whole design and front end teams.
                        </p>
                        <p>
                            We worked with London agency Accept & Proceed who did a great job
                            of creating a room build and various data installations, including
                            robots building real-world infographics from a Streamr data feed, an AR
                            installation using a 3D printed car body, and a pollution sensing diorama
                            incorporating 3D print of the buildings of midtown Manhattan.
                        </p>
                    </Container>
                    <Spacer head>
                        <ConsensusFilm />
                    </Spacer>
                    <Display xs="none" lg>
                        <ConsensusGallery
                            items={Image.CONSENSUS_GALLERY_A}
                        />
                        <ConsensusGallery
                            items={Image.CONSENSUS_GALLERY_B}
                        />
                    </Display>
                    <Display lg="none">
                        <ConsensusGallery
                            items={[
                                ...Image.CONSENSUS_GALLERY_A,
                                ...Image.CONSENSUS_GALLERY_B,
                            ]}
                        />
                    </Display>
                </Section>
            </Topic>
            <Topic title="Core - one app to rule them all">
                <Section theme={DarkBlueTheme}>
                    <Spacer head>
                        <SectionHeader no={4} />
                        <Container>
                            <p>
                                Streamr had some powerful tools, included a node & cable visual editor for
                                building realtime data processes, and a stream creation tool. Once we added
                                the Marketplace, the divide became quite stark between old and new. We
                                realised the main weakness was a lack of central point to manage all the
                                resources users could create. So we designed a set of user pages to glue
                                everything together, which we eventually renamed Core.
                            </p>
                            <p>
                                Core now includes editors to create streams, canvases and dashboards, as
                                well as products for the Marketplace, including the Data Unions feature
                                for building crowdsourced data products.
                            </p>
                        </Container>
                    </Spacer>
                    <Spacer head tail>
                        <EditorMockup />
                    </Spacer>
                    <Modules />
                </Section>
            </Topic>
            <Topic title="Wrapping it all into one package">
                <Section theme={DarkBlueTheme}>
                    <Spacer head tail>
                        <SectionHeader no={5} />
                        <Container>
                            <p>
                                All of this was wrapped up into the full public website, launched in 2019.
                                With the help of another of our regular collaborators, front end dev
                                Mariusz Roliński, we wrote and designed a new site that incorporated
                                realtime live data showing the amount of traffic passing through the
                                Streamr Network, as well as live token prices. Another key part of this
                                was the design and rewriting of an all-new Docs section.
                            </p>
                        </Container>
                    </Spacer>
                    <PublicSiteView />
                </Section>
            </Topic>
            <Topic title="Credits">
                <Section theme={DarkBlueTheme}>
                    <Spacer head tail>
                        <SectionHeader no={6}>
                            <Bullet />
                            <Link as="a" href="https://streamr.network/" target="_blank" rel="noopener noreferrer">
                                Visit Streamr website
                            </Link>
                        </SectionHeader>
                        <Contributors>
                            <Contributor name="Ross Harrington" role="Brand design &amp; animation" />
                            <Contributor name="Matt Innes" role="Brand, Design lead" />
                            <Contributor name="Saori Kajiwara" role="UI/UX design" />
                            <Contributor name="Stuart Wade" role="Illustration &amp; animation" />
                            <br />
                            <Contributor name="Matthew Fontana" role="Front end dev" />
                            <Contributor name="Juha Haavisto" role=" Front end lead" />
                            <Contributor name="Tuomas Koponen" role="Front end dev" />
                            <Contributor name="Tim Oxley" role=" Core app lead" />
                            <Contributor name="Henri Pihkala" role="CEO / Product lead" />
                            <Contributor name="Mariusz Roliński" role="Public site lead" />
                        </Contributors>
                        <Container>
                            <hr />
                        </Container>
                        <NextProject />
                    </Spacer>
                </Section>
            </Topic>
        </Layout>
    </Project>
)

export default StreamrPage
