import { HeadFC } from 'gatsby'
import * as React from 'react'
import { AppLoop } from '~/components/pages/golem/AppLoop'
import { BetaLaunchPage } from '~/components/pages/golem/BetaLaunchPage'
import { BetaLaunchPageMobile } from '~/components/pages/golem/BetaLaunchPageMobile'
import { Brand } from '~/components/pages/golem/Brand'
import { GolemCharacter } from '~/components/pages/golem/GolemCharacter'
import { Golems } from '~/components/pages/golem/Golems'
import { Identity } from '~/components/pages/golem/Identity'
import { RedditPage } from '~/components/pages/golem/RedditPage'
import { Shirts } from '~/components/pages/golem/Shirts'
import { UiFirst } from '~/components/pages/golem/UiFirst'
import { UiProcess } from '~/components/pages/golem/UiProcess'
import { ProjectPage } from '~/components/ProjectPage'
import { Section } from '~/components/Section'
import { Container } from '~/components/shared/Container'
import { Contributor, Contributors } from '~/components/shared/Contributor'
import { Display } from '~/components/shared/Display'
import Hero from '~/components/shared/Hero'
import { Layout } from '~/components/shared/Layout'
import NextProject from '~/components/shared/NextProject'
import { ScrollIndicatorTarget } from '~/components/shared/ScrollIndicator'
import { SectionHeader } from '~/components/shared/SectionHeader'
import { Topic } from '~/components/shared/Topic'
import { Spacer } from '~/components/Spacer'
import { Seo } from '../components/Seo'

const LayoutTheme = {
    backgroundColor: '#000f24',
}

const BlueTheme = {
    backgroundColor: '#005ad3',
    color: '#ffffff',
}

const DarkBlueTheme = {
    backgroundColor: '#001a3d',
    color: '#ffffff',
}

const WhiteTheme = {
    backgroundColor: '#f9f9f9',
    color: '#575757',
    captionColor: '#9e9e9e',
}

const GrayishTheme = {
    backgroundColor: '#f1f1f1',
    color: '#575757',
    captionColor: '#9e9e9e',
}

const BlackTheme = {
    backgroundColor: '#000000',
    color: '#ffffff',
}

export default function GolemPage() {
    return (
        <ProjectPage projectName="golem">
            <Layout theme={LayoutTheme}>
                <Section {...BlueTheme} menuToggleBackground>
                    <Hero>
                        <p>
                            We worked on user experience design for the
                            cryptocurrency-based shared computing project,
                            as&nbsp;well as a brand that didn&apos;t see the
                            light of&nbsp;day.
                        </p>
                    </Hero>
                </Section>
                <ScrollIndicatorTarget />
                <Topic title="User Experience First">
                    <Section
                        {...WhiteTheme}
                        spacerProps={{ head: true, tail: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                On these type of projects we usually start with
                                the brand process, in order to create a good
                                toolkit and consistent voice to use in the
                                product design, launch site and social media. In
                                this case, the team wanted to do a user
                                experience pass first, as they wanted to show
                                some public progress, rather than waiting for a
                                brand process to run its course.
                            </p>
                        </Container>
                        <Spacer head scale={0.6}>
                            <UiFirst />
                        </Spacer>
                        <Spacer head>
                            <Container>
                                <p>
                                    One key problem to solve was that there
                                    would be two very distinct user types,
                                    Providers, who would run the app to earn
                                    digital tokens in return for their compute
                                    power, and Requesters who would pay to use
                                    the network to run tasks. Some of these
                                    users would do both, but many would not.
                                    This led to us dividing the UI for these
                                    groups. We explored these ideas with a
                                    number of wireframes and interaction
                                    prototypes.
                                </p>
                            </Container>
                        </Spacer>
                    </Section>
                    <Section
                        {...GrayishTheme}
                        spacerProps={{ head: true, tail: true }}
                        menuToggleColor="#575757"
                    >
                        <UiProcess />
                    </Section>
                </Topic>
                <Topic title="Simple Visual Design Pass">
                    <Section
                        {...BlueTheme}
                        spacerProps={{ head: true, tail: true }}
                    >
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                As we had not developed a brand yet, and the
                                existing Golem brand was unsuitable, we
                                developed the first visual pass as a fairly
                                generic bootstrap type theme that we could build
                                on. The toughest problem was really creating a
                                system that could work for future unknown task
                                types while also working well for the first
                                integration, which was to be 3D rendering for
                                Blender and LuxRender.
                            </p>
                        </Container>
                        <Spacer head scale={0.6}>
                            <AppLoop />
                        </Spacer>
                        <Spacer head>
                            <Container>
                                <p>
                                    The other key goal was to design something
                                    anyone could use, but also something that
                                    power users could customise to their liking.
                                    We had to push quite hard to keep the simple
                                    slide-to-allocate resources on the Network
                                    view, but balanced it out with an advanced
                                    setup for users comfortable with tweaking
                                    parameters.
                                </p>
                            </Container>
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Visual Identity">
                    <Section
                        {...BlackTheme}
                        spacerProps={{ head: true, tail: true }}
                    >
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                The core idea was to make something that could
                                go beyond the usual cryptocurrency brand and
                                appeal to a more mainstream audience. The
                                interesting points for us were the stages of the
                                project the whitepaper envisioned — Brass, Clay,
                                Stone, Iron. Creating a brand that could vary
                                and grow from stage to stage was the idea we
                                started with. We also liked the origin of the
                                name — Stanislav Lem&apos;s novel Golem XIV,
                                about a conversation with an AI which is
                                evolving consciousness.
                            </p>
                        </Container>
                        <Spacer head scale={0.6}>
                            <Identity />
                        </Spacer>
                    </Section>
                    <Section {...BlueTheme} spacerProps={{ head: true }}>
                        <Golems />
                        <Spacer head tail>
                            <Container>
                                <p>
                                    We decided upon a character that would
                                    combine an AI and a traditional Golem, along
                                    with a flexible mark that could be animated
                                    to represent the network in some way. To
                                    that end we brought on illustrator Stuart
                                    Wade, whose work we&apos;d admired on the
                                    Monster Project. The tricky part with the
                                    character development was to find something
                                    that was part AI, part golem, without being
                                    too robotic — and without feeling too
                                    threatening or overly cute. The reaction on
                                    Reddit to an early presentation was that we
                                    got that right.
                                </p>
                            </Container>
                        </Spacer>
                        <GolemCharacter />
                    </Section>
                    <Section
                        {...DarkBlueTheme}
                        spacerProps={{ head: true, tail: true }}
                    >
                        <Brand />
                        <Display xs="none" md>
                            <Spacer head tail>
                                <Shirts />
                            </Spacer>
                            <RedditPage />
                        </Display>
                    </Section>
                </Topic>
                <Topic title="Beta Launch Page">
                    <Section
                        {...BlackTheme}
                        spacerProps={{ head: true, tail: true }}
                    >
                        <SectionHeader no={4} />
                        <Container>
                            <p>
                                The beta launch page was to be fairly simple, as
                                the app itself was still under heavy
                                development. So the focus was just on alerting
                                people to the Brass milestone, providing
                                download access and encouraging users to come
                                and talk to us on Slack and Reddit about testing
                                the beta, and rendering 3D files, the first
                                Golem integration.
                            </p>
                        </Container>
                        <Spacer head scale={0.6}>
                            <Display as={BetaLaunchPage} xs="none" md />
                            <Display as={BetaLaunchPageMobile} md="none" />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section
                        {...BlueTheme}
                        spacerProps={{ head: true, tail: true }}
                    >
                        <SectionHeader no={5} />
                        <Contributors>
                            <Contributor
                                name="Matt Innes"
                                role="Brand, Design Lead"
                            />
                            <Contributor
                                name="Saori Kajiwara"
                                role="UI/UX design"
                            />
                            <Contributor
                                name="Stuart Wade"
                                role="Character design, animation"
                            />
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
    return (
        <Seo projectName="golem">
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
                rel="stylesheet"
            />
        </Seo>
    )
}
