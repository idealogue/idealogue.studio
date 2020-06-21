import React from 'react'
import SectionHeader from '$shared/SectionHeader'
import NextProject from '$shared/NextProject'
import Layout from '$shared/Layout'
import Project, { COBALT } from '$shared/Project'
import Hero from '$shared/Hero'
import Section from '$shared/Section'
import Container from '$shared/Container'
import Bullet from '$shared/Bullet'
import Link from '$shared/Link'
import Contributor, { Contributors } from '$shared/Contributor'
import LogoImage from '$cobalt/LogoImage'
import { MobileShots, DesktopShot } from '$cobalt/ClarityImages'
import BugImages from '$cobalt/BugImages'
import Spacer from '$shared/Spacer'
import Topic from '$shared/Topic'

const LayoutTheme = {
    backgroundColor: '#207dbc',
}

const DarkTheme = {
    backgroundColor: '#248bd2',
    color: '#ffffff',
}

const LightTheme = {
    backgroundColor: '#f9f9f9',
    color: '#575757',
}

const CobaltPage = () => (
    <Project id={COBALT}>
        <Layout theme={LayoutTheme}>
            <Section theme={DarkTheme} menuToggleBackground>
                <Hero>
                    <p>
                        Cobalt is an app security startup in San Francisco.
                        <br />
                        We helped them with a brand and site.
                    </p>
                </Hero>
            </Section>
            <Topic title="Crowd Powered">
                <Section theme={LightTheme} head menuToggleColor="#575757">
                    <SectionHeader no={1} />
                    <Container>
                        <p>
                            Cobalt started life as Crowdcurity, as the name suggests, a crowdsourced
                            web-app security testing startup in San Francisco, run by a great team
                            of Danish Vikings. We helped with a new name, an eyeball / combination
                            lock-inspired mark, and an approachable brand wrapped around it all.
                        </p>
                        <Spacer head>
                            <LogoImage />
                        </Spacer>
                    </Container>
                </Section>
            </Topic>
            <Topic title="Aiming for Clarity">
                <Section theme={LightTheme} head menuToggleColor="#575757">
                    <SectionHeader no={2} />
                    <Container>
                        <p>
                            With the site, we aimed to make their range of services clear, simple
                            and accessible, with a friendly voice. We also did a brief UI pass over
                            Central, their web dashboard, to clean it up.
                        </p>
                    </Container>
                    <Spacer head tail>
                        <MobileShots />
                    </Spacer>
                    <DesktopShot />
                </Section>
            </Topic>
            <Topic title="Bugs Categorised">
                <Section theme={DarkTheme} head tail>
                    <SectionHeader no={3} />
                    <Container>
                        <p>
                            As a big part of the site is the leaderboards for their security testers,
                            where they get ranked against their peers, we worked with illustrator
                            Marty Cook to create a range of icons representing all the bug types they
                            can fix in client's applications — from access control to an SQL injection.
                        </p>
                    </Container>
                    <Spacer head>
                        <BugImages />
                    </Spacer>
                </Section>
            </Topic>
            <Topic title="Credits">
                <Section theme={LightTheme} head tail menuToggleColor="#575757">
                    <SectionHeader no={4}>
                        <Bullet />
                        <Link as="a" href="https://cobalt.io/" target="_blank" rel="noopener noreferrer">
                            Visit the Site
                        </Link>
                    </SectionHeader>
                    <Contributors>
                        <Contributor name="Matt Innes" role="Brand, Direction, Design" />
                        <Contributor name="Saori Kajiwara" role="Design, Illustration" />
                        <Contributor name="Lars Kluge" role="Inkpad CMS" />
                        <Contributor name="Mariusz Roliński" role="Front End Code" />
                        <Contributor name="Marty Cook" role="Illustration" />
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

export default CobaltPage
