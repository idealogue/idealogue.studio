import React from 'react'
import SectionHeader from '$shared/SectionHeader'
import NextProject from '$shared/NextProject'
import Layout from '$shared/Layout'
import Project, { GOLEM } from '$shared/Project'
import Hero from '$shared/Hero'
import Section from '$shared/Section'
import Container from '$shared/Container'
import Contributor, { Contributors } from '$shared/Contributor'
import UiFirst from '$golem/UiFirst'
import UiProcess from '$golem/UiProcess'
import AppLoop from '$golem/AppLoop'
import Identity from '$golem/Identity'
import Golems from '$golem/Golems'
import GolemCharacter from '$golem/GolemCharacter'
import RedditPage from '$golem/RedditPage'
import BetaLaunchPage from '$golem/BetaLaunchPage'
import Shirts from '$golem/Shirts'
import Brand from '$golem/Brand'
import Spacer from '$shared/Spacer'

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

const CobaltPage = () => (
    <Project id={GOLEM}>
        <Layout theme={LayoutTheme}>
            <Section theme={BlueTheme}>
                <Hero>
                    <p>
                        We worked on user experience design for the cryptocurrency-based shared
                        computing project, as well as a brand that didn’t see the light of day.
                    </p>
                </Hero>
            </Section>
            <Section theme={WhiteTheme} head tail>
                <SectionHeader no={1}>
                    User Experience First
                </SectionHeader>
                <Container>
                    <p>
                        On these type of projects we usually start with the brand process, in order
                        to create a good toolkit and consistent voice to use in the product design,
                        launch site and social media. In this case, the team wanted to do a user
                        experience pass first, as they wanted to show some public progress, rather
                        than waiting for a brand process to run its course.
                    </p>
                </Container>
                <Spacer head tail>
                    <UiFirst />
                </Spacer>
                <Container>
                    <p>
                        One key problem to solve was that there would be two very distinct user
                        types, Providers, who would run the app to earn digital tokens in return
                        for their compute power, and Requesters who would pay to use the network
                        to run tasks. Some of these users would do both, but many would not. This
                        led to us dividing the UI for these groups. We explored these ideas with
                        a number of wireframes and interaction prototypes.
                    </p>
                </Container>
            </Section>
            <Section theme={GrayishTheme} head tail>
                <UiProcess />
            </Section>
            <Section theme={BlueTheme} head tail>
                <SectionHeader no={2}>
                    Simple Visual Design Pass
                </SectionHeader>
                <Container>
                    <p>
                        As we had not developed a brand yet, and the existing Golem brand was
                        unsuitable, we developed the first visual pass as a fairly generic
                        bootstrap type theme that we could build on. The toughest problem was
                        really creating a system that could work for future unknown task types
                        while also working well for the first integration, which was to be 3D
                        rendering for Blender and LuxRender.
                    </p>
                </Container>
                <Spacer head tail>
                    <AppLoop />
                </Spacer>
                <Container>
                    <p>
                        The other key goal was to design something anyone could use, but also
                        something that power users could customise to their liking. We had to push
                        quite hard to keep the simple slide-to-allocate resources on the Network
                        view, but balanced it out with an advanced setup for users comfortable with
                        tweaking parameters.
                    </p>
                </Container>
            </Section>
            <Section theme={BlackTheme} head tail>
                <SectionHeader no={3}>
                    Visual Identity
                </SectionHeader>
                <Container>
                    <p>
                        The core idea was to make something that could go beyond the usual
                        cryptocurrency brand and appeal to a more mainstream audience. The
                        interesting points for us were the stages of the project the whitepaper
                        envisioned — Brass, Clay, Stone, Iron. Creating a brand that could vary
                        and grow from stage to stage was the idea we started with. We also liked
                        the origin of the name — Stanislav Lem’s novel Golem XIV, about
                        a conversation with an AI which is evolving consciousness.
                    </p>
                </Container>
                <Spacer head>
                    <Identity />
                </Spacer>
            </Section>
            <Section theme={BlueTheme} head>
                <Golems />
                <Spacer head tail>
                    <Container>
                        <p>
                            We decided upon a character that would combine an AI and a traditional
                            Golem, along with a flexible mark that could be animated to represent the
                            network in some way. To that end we brought on illustrator Stuart Wade,
                            whose work we’d admired on the Monster Project. The tricky part with the
                            character development was to find something that was part AI, part golem,
                            without being too robotic — and without feeling too threatening or overly
                            cute. The reaction on Reddit to an early presentation was that we got
                            that right.
                        </p>
                    </Container>
                </Spacer>
                <GolemCharacter />
            </Section>
            <Section theme={DarkBlueTheme} head tail>
                <Brand />
                <Spacer head tail>
                    <Shirts />
                </Spacer>
                <RedditPage />
            </Section>
            <Section theme={BlackTheme} head tail>
                <SectionHeader no={4}>
                    Beta Launch Page
                </SectionHeader>
                <Container>
                    <p>
                        The beta launch page was to be fairly simple, as the app itself was still
                        under heavy development. So the focus was just on alerting people to the
                        Brass milestone, providing download access and encouraging users to come
                        and talk to us on Slack and Reddit about testing the beta, and rendering
                        3D files, the first Golem integration.
                    </p>
                </Container>
                <Spacer head>
                    <BetaLaunchPage />
                </Spacer>
            </Section>
            <Section theme={BlueTheme} head tail>
                <SectionHeader no={5}>
                    Credits
                </SectionHeader>
                <Contributors>
                    <Contributor name="Matt Innes" role="Brand, Design Lead" />
                    <Contributor name="Saori Kajiwara" role="UI/UX design" />
                    <Contributor name="Stuart Wade" role="Character design, animation" />
                </Contributors>
                <Container>
                    <hr />
                </Container>
                <NextProject />
            </Section>
        </Layout>
    </Project>
)

export default CobaltPage
