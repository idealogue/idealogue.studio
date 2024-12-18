import Iconic from '$hux/Iconic'
import Neon from '$hux/Neon'
import { Collage, CollageA, CollageB, LargeSign, Logo } from '$hux/Pics'
import { HeadFC } from 'gatsby'
import * as React from 'react'
import { BrowsingVideo } from '~/components/pages/huxtaburger/BrowsingVideo'
import { ProjectPage } from '~/components/ProjectPage'
import { Section } from '~/components/Section'
import Bullet from '~/components/shared/Bullet'
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
import { Seo } from '../components/Seo'

const LayoutTheme = {
    backgroundColor: '#dd2712',
}

const RedTheme = {
    backgroundColor: '#ee4734',
    color: '#ffffff',
}

const WhiteTheme = {
    backgroundColor: '#f9f9f9',
    color: '#575757',
}

const BlueTheme = {
    backgroundColor: '#22a4db',
    color: '#ffffff',
}

const BlackTheme = {
    backgroundColor: '#010000',
    color: '#ffffff',
}

export default function HuxtaburgerPage() {
    return (
        <ProjectPage projectName="huxtaburger">
            <Layout theme={LayoutTheme}>
                <Section {...RedTheme} menuToggleBackground>
                    <Hero>
                        <p>
                            We designed the original brand, site and print work,
                            and have been happy to see them grow into the
                            Melbourne icon they are today.
                        </p>
                    </Hero>
                </Section>
                <ScrollIndicator.Target />
                <Topic title="Milk Bar vs Diner">
                    <Section
                        {...WhiteTheme}
                        spacerProps={{ head: true }}
                        menuToggleColor="#575757"
                    >
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                One of the first players in the now-crowded
                                gourmet burger scene, the original brand is a
                                mashup of classic American diner with a 70’s
                                Aussie milk bar typographic aesthetic — pressed
                                metal diamonds meets red, white &amp; blue fly
                                strips, with the king of beef at the centre of
                                it all.
                            </p>
                        </Container>
                        <Spacer head tail>
                            <Logo />
                        </Spacer>
                    </Section>
                    <Section {...WhiteTheme} menuToggleColor="#ffffff">
                        <Display as={CollageA} xs="none" sm />
                        <Display as={CollageB} xs="none" sm />
                        <Display as={Collage} sm="none" />
                        <LargeSign />
                    </Section>
                </Topic>
                <Topic title="Beery Browsing">
                    <Section
                        {...WhiteTheme}
                        spacerProps={{ tail: true }}
                        menuToggleColor="#575757"
                    >
                        <Spacer head>
                            <SectionHeader no={2} />
                            <Container>
                                <p>
                                    The key UX concept that drove the site
                                    design was simple. Users should be be able
                                    to flip through the site on a phone with one
                                    hand while holding a beer in the other.
                                    Also, early on, we decided we want to be
                                    able to see what was in the burgers by
                                    tapping them. Put another way, exploding
                                    burgers.
                                </p>
                                <Spacer head>
                                    <BrowsingVideo />
                                </Spacer>
                            </Container>
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Making an Icon iconic">
                    <Section
                        {...BlueTheme}
                        spacerProps={{ head: true, tail: true }}
                    >
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                It was an uphill battle to convince the client
                                that we should illustrate all their burgers and
                                products. Lots of people do it now, but at the
                                time it was relatively rare. It worked well, and
                                customers love it. Once we’d applied it to the
                                products we extended it to the stores, making
                                each one an individual animated icon. Try
                                clicking the ones below.
                            </p>
                        </Container>
                        <Spacer head>
                            <Iconic />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Sexy Neon">
                    <Section {...BlackTheme} spacerProps={{ head: true }}>
                        <SectionHeader no={4} />
                        <Container>
                            <p>
                                We put together a wide range of signage
                                including windows, and boxes but without doubt
                                this Hot Beef — Cold Beer neon is our favourite.
                            </p>
                        </Container>
                        <Spacer head>
                            <Neon />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section
                        {...BlackTheme}
                        spacerProps={{ head: true, tail: true }}
                    >
                        <SectionHeader no={5}>
                            <Bullet />
                            <Link
                                as="a"
                                href="http://huxtaburger.idealogue.io/"
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
                                name="Ben Jennings"
                                role="Design, Code"
                            />
                            <Contributor name="David Hauser" role="Code" />
                            <Contributor name="Mariusz Roliński" role="Code" />
                            <Contributor
                                name="Marty Cook &amp; Saori Kajiwara"
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
        </ProjectPage>
    )
}

export const Head: HeadFC = () => {
    return <Seo projectName="huxtaburger" />
}
