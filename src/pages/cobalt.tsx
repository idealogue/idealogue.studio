import BugImages from '$cobalt/BugImages'
import { DesktopShot, MobileShots } from '$cobalt/ClarityImages'
import LogoImage from '$cobalt/LogoImage'
import Bullet from '$shared/Bullet'
import Container from '$shared/Container'
import Contributor, { Contributors } from '$shared/Contributor'
import Hero from '$shared/Hero'
import Layout from '$shared/Layout'
import Link from '$shared/Link'
import NextProject from '$shared/NextProject'
import Project, { COBALT } from '$shared/Project'
import ScrollIndicator from '$shared/ScrollIndicator'
import SectionHeader from '$shared/SectionHeader'
import Topic from '$shared/Topic'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import { Spacer } from '~/components/Spacer'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'

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

export default function CobaltPage() {
    return (
        <Project id={COBALT}>
            <Layout theme={LayoutTheme}>
                <Section {...DarkTheme} menuToggleBackground>
                    <Hero>
                        <p>
                            Cobalt is an app security startup in San Francisco.
                            We helped them with a&nbsp;brand and&nbsp;site.
                        </p>
                    </Hero>
                </Section>
                <ScrollIndicator.Target />
                <Topic title="Crowd Powered">
                    <Section
                        {...LightTheme}
                        spacerProps={{ head: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                Cobalt started life as Crowdcurity, as the name
                                suggests, a crowdsourced web-app security
                                testing startup in San Francisco, run by a great
                                team of Danish Vikings. We helped with a new
                                name, an eyeball / combination lock-inspired
                                mark, and an approachable brand wrapped around
                                it all.
                            </p>
                            <Spacer head scale={0.6}>
                                <LogoImage />
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="Aiming for Clarity">
                    <Section
                        {...LightTheme}
                        spacerProps={{ head: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                With the site, we aimed to make their range of
                                services clear, simple and accessible, with a
                                friendly voice. We also did a brief UI pass over
                                Central, their web dashboard, to clean it up.
                            </p>
                        </Container>
                        <Spacer head tail scale={0.6}>
                            <MobileShots />
                        </Spacer>
                        <Spacer tail>
                            <DesktopShot />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Bugs Categorised">
                    <Section
                        {...DarkTheme}
                        spacerProps={{ head: true, tail: true }}
                    >
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                As a big part of the site is the leaderboards
                                for their security testers, where they get
                                ranked against their peers, we worked with
                                illustrator Marty Cook to create a range of
                                icons representing all the bug types they can
                                fix in client's applications — from access
                                control to an SQL injection.
                            </p>
                        </Container>
                        <Spacer head scale={0.6}>
                            <BugImages />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section
                        {...LightTheme}
                        spacerProps={{ head: true, tail: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={4}>
                            <Bullet />
                            <Link
                                as="a"
                                href="https://cobalt.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit the Site
                            </Link>
                        </SectionHeader>
                        <Contributors>
                            <Contributor
                                name="Matt Innes"
                                role="Brand, Direction, Design"
                            />
                            <Contributor
                                name="Saori Kajiwara"
                                role="Design, Illustration"
                            />
                            <Contributor name="Lars Kluge" role="Inkpad CMS" />
                            <Contributor
                                name="Mariusz Roliński"
                                role="Front End Code"
                            />
                            <Contributor
                                name="Marty Cook"
                                role="Illustration"
                            />
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
}

export const Head: HeadFC = () => {
    return <Seo projectName="cobalt" />
}