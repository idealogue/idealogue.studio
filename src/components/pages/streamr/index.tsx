import '@ibm/plex/css/ibm-plex.css'

import Surround from '$shared/Surround'
import EditorMockup from '$streamr/EditorMockup'
import Modules from '$streamr/Modules'
import * as React from 'react'
import { BrandFilm } from '~/components/pages/streamr/BrandFilm'
import IconGrid from '~/components/pages/streamr/IconGrid'
import { ProjectPage } from '~/components/ProjectPage'
import Bullet from '~/components/shared/Bullet'
import CaptionedContainer from '~/components/shared/CaptionedContainer'
import { Container } from '~/components/shared/Container'
import Contributor, { Contributors } from '~/components/shared/Contributor'
import { Display } from '~/components/shared/Display'
import Hero from '~/components/shared/Hero'
import Layout from '~/components/shared/Layout'
import Link from '~/components/shared/Link'
import NextProject from '~/components/shared/NextProject'
import ScrollIndicator from '~/components/shared/ScrollIndicator'
import SectionHeader from '~/components/shared/SectionHeader'
import Topic from '~/components/shared/Topic'
import { Spacer } from '~/components/Spacer'
import { Section } from '../../Section'
import BrubeckScreencast from './BrubeckScreencast'
import CoreMarketplace from './CoreMarketplace'
import NetworkExplorerMock from './NetworkExplorerMock'

const LayoutTheme = {
    backgroundColor: '#f3f3f3',
    color: '#7c7c7c',
}

const MainTheme = {
    backgroundColor: '#fafafa',
    color: '#06042A',
    captionColor: '#7c7c7c',
}

const SecondaryTheme = {
    backgroundColor: '#f3f3f3',
    color: '#06042A',
    captionColor: '#7c7c7c',
}

export default function StreamrPage() {
    return (
        <ProjectPage projectName="streamr">
            <Layout theme={LayoutTheme}>
                <Section
                    {...MainTheme}
                    menuToggleBackground
                    menuToggleColor="currentColor"
                >
                    <Hero>
                        <p>
                            <Display as="span" xs sm="none">
                                We created a brand, websites and
                                <br />
                                a set of applications for Streamr,
                                <br />a web3 real-time data startup.
                            </Display>
                            <Display as="span" xs="none" sm>
                                We created a brand, websites and a set
                                <br />
                                of decentralised applications for Streamr,
                                <br />a Web3 real-time data startup.
                            </Display>
                        </p>
                    </Hero>
                </Section>
                <Section
                    {...MainTheme}
                    spacerProps={{ tail: true }}
                    menuToggleColor="currentColor"
                >
                    <ScrollIndicator.Target />
                    <Topic
                        mobileTitle="A decentralised data network"
                        title="A decentralised global data network"
                    >
                        <Spacer head>
                            <SectionHeader no={1} />
                            <Container>
                                <p>
                                    We joined Zug-based Finnish startup Streamr
                                    in late 2017. Their vision for a
                                    decentralised realtime data network was
                                    appealing, and our experience with crypto
                                    and VPL-type systems were a good match for
                                    their needs. Matt took a C-level design
                                    role, and we redesigned the brand, designed
                                    and guided to implementation a set of new
                                    apps, and led the design and front end teams
                                    there for three years.
                                </p>
                            </Container>
                        </Spacer>
                    </Topic>
                    <Spacer head scale={0.6}>
                        <BrandFilm />
                    </Spacer>
                </Section>
                <Topic title="Bringing the brand to life">
                    <Section {...MainTheme} menuToggleColor="currentColor">
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                Streamr CEO, Henri Pihkala, and I preferred to
                                avoid the sci-fi cliches that seem to be
                                ever-present in the crypto world, and instead
                                aimed to visualise a semi-realistic, near-future
                                world that proposed Streamr&apos;s vision was
                                close at hand. A stylised but detailed 3D world,
                                seen as a kind of data diorama was the starting
                                point. To help us realise this we brought on one
                                of our regular collaborators, the illustrator
                                Stuart Wade. His detailed isometric
                                illustrations and animations helped visualise
                                the largely invisible data products and
                                services, along with a touch of humour.
                            </p>
                        </Container>
                        <Spacer head>
                            <IconGrid />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic
                    mobileTitle="Data Marketplace design"
                    title="Product design — Data Marketplace"
                >
                    <Section
                        {...MainTheme}
                        spacerProps={{ head: true, tail: true }}
                        menuToggleColor="currentColor"
                    >
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                The first app we worked on, the decentralised
                                data marketplace, went from drawing board to MVP
                                launch at Consensus New York 2018 in less than
                                three months. Essentially a graphical front end
                                to the data products which are Ethereum smart
                                contracts, it was a good exercise in building
                                and shipping something fast.
                                <Surround suffix="." prefix=" ">
                                    <a
                                        href="https://streamr.network/hub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Visit the app
                                    </a>
                                </Surround>
                            </p>
                        </Container>
                    </Section>
                </Topic>
                <Section {...MainTheme}>
                    <Section
                        {...SecondaryTheme}
                        spacerProps={{ head: true, tail: true }}
                        actConsecutive
                    >
                        <CaptionedContainer
                            caption={
                                <>
                                    Management, product detail and browse
                                    <Display as="br" md="none" />
                                    views for the Marketplace
                                </>
                            }
                        >
                            <Container>
                                <CoreMarketplace />
                            </Container>
                        </CaptionedContainer>
                    </Section>
                </Section>
                <Topic
                    mobileTitle="Core app design"
                    title="Product design — Core app"
                >
                    <Section {...MainTheme} menuToggleColor="currentColor">
                        <Spacer head tail>
                            <SectionHeader no={4} />
                            <Container>
                                <p>
                                    After the introduction of the Marketplace,
                                    tools and user resources were a bit all over
                                    the place. There was a VPL-type visual
                                    editor for building realtime data processes,
                                    and a stream creation tool. We gathered the
                                    resources and tools into a single app we
                                    named Core, which enabled management of
                                    streams, publishing products, and later,
                                    Data Unions from a single interface.
                                </p>
                                <p>
                                    Working with Tim Oxley, we also redesigned
                                    and rebuilt the VPL editor, bringing it into
                                    the Core app as the Canvas editor. As of
                                    2021 the editor has been retired as it needs
                                    to be fully decentralised to be useful, but
                                    the Core app itself has been decentralised,
                                    and you can try it out
                                    <Surround prefix=" " suffix=".">
                                        <a
                                            href="https://streamr.network/core"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            here
                                        </a>
                                    </Surround>
                                </p>
                            </Container>
                        </Spacer>
                    </Section>
                    <Section {...SecondaryTheme} spacerProps={{ tail: true }}>
                        <Spacer head tail>
                            <EditorMockup />
                        </Spacer>
                        <Modules />
                    </Section>
                </Topic>
                <Topic
                    mobileTitle="Network Explorer"
                    title="Product design — Network Explorer"
                >
                    <Section {...MainTheme} menuToggleColor="currentColor">
                        <Spacer head tail>
                            <SectionHeader no={5} />
                            <Container>
                                <p>
                                    For the 2021 launch of the first public
                                    version of the network, where anyone could
                                    run a node, we designed an app to visualise
                                    the network, allow users to see streams and
                                    the nodes carrying them, and view a range of
                                    metrics for the overall network, nodes and
                                    streams. Rollout was a little rocky as up to
                                    90,000 nodes piled into the third testnet in
                                    October 2021, but as the app matures it
                                    should provide an essential window into the
                                    operation of the global network. Try the app
                                    <Surround prefix=" " suffix=".">
                                        <a
                                            href="https://streamr.network/network-explorer"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            here
                                        </a>
                                    </Surround>
                                </p>
                            </Container>
                        </Spacer>
                    </Section>
                    <Section {...MainTheme} menuToggleColor="currentColor">
                        <Section
                            {...SecondaryTheme}
                            spacerProps={{ head: true, tail: true }}
                            actConsecutive
                        >
                            <NetworkExplorerMock
                                caption={
                                    <>
                                        Users can explore the map or{' '}
                                        <Display as="br" md="none" />
                                        search for streams and nodes
                                    </>
                                }
                            />
                        </Section>
                    </Section>
                </Topic>
                <Topic title="Websites">
                    <Section {...MainTheme} menuToggleColor="currentColor">
                        <Spacer head tail>
                            <SectionHeader no={6} />
                            <Container>
                                <p>
                                    While we designed and shipped several major
                                    project website iterations, the 2021
                                    milestone website was the most involved. We
                                    gave the brand a refresh to make it feel
                                    lighter and wrapped that around a new site
                                    which focuses more squarely on the Web3
                                    audience, with more realtime data, a more
                                    technical focus and a more modular design
                                    for easier updating.
                                </p>
                                <p>
                                    With the help of Demoscene WebGL specialist
                                    Simppa, and our regular collaborator Mariusz
                                    Roliński we created an interactive
                                    visualiser for the network that ended up
                                    handling the 35,000 node testnet and still
                                    managed a quick load time & high frame
                                    rates. We also produced an animated token
                                    economics explainer with Stuart Wade, who
                                    created the icons.
                                    <Surround prefix=" " suffix=".">
                                        <a
                                            href="https://streamr.network/"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            Visit the site
                                        </a>
                                    </Surround>
                                </p>
                            </Container>
                        </Spacer>
                    </Section>
                    <Section {...MainTheme} menuToggleColor="currentColor">
                        <Section
                            spacerProps={{ head: true, tail: true }}
                            {...SecondaryTheme}
                            actConsecutive
                        >
                            <BrubeckScreencast caption="The Brubeck milestone website in 2021 introduced a live network visualiser" />
                        </Section>
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section {...MainTheme} menuToggleColor="currentColor">
                        <Spacer head tail>
                            <SectionHeader no={6}>
                                <Bullet />
                                <Link
                                    as="a"
                                    href="https://streamr.network/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Streamr website
                                </Link>
                            </SectionHeader>
                            <Contributors>
                                <Contributor
                                    name="Matt Innes"
                                    role="Brand, design lead"
                                />
                                <Contributor
                                    name="Saori Kajiwara"
                                    role="UI/UX design"
                                />
                                <Contributor
                                    name="Ross Harrington"
                                    role="Brand design"
                                />
                                <Contributor
                                    name="Stuart Wade"
                                    role="Illustration &amp; animation"
                                />
                                <br />
                                <Contributor
                                    name="Juha Haavisto"
                                    role="Front end lead"
                                />
                                <Contributor
                                    name="Tuomas Koponen"
                                    role="Front end dev"
                                />
                                <Contributor
                                    name="Tim Oxley"
                                    role="Canvas editor lead"
                                />
                                <Contributor
                                    name="Mariusz Roliński"
                                    role="Public site lead"
                                />
                                <Contributor
                                    name="Simppa"
                                    role="WebGL visualiser build"
                                />
                            </Contributors>
                            <Container>
                                <hr />
                            </Container>
                            <NextProject />
                        </Spacer>
                    </Section>
                </Topic>
            </Layout>
        </ProjectPage>
    )
}
