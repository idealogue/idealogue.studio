import React from 'react'
import Bullet from '$shared/Bullet'
import Container from '$shared/Container'
import Contributor, { Contributors } from '$shared/Contributor'
import Hero from '$shared/Hero'
import Layout from '$shared/Layout'
import Link from '$shared/Link'
import NextProject from '$shared/NextProject'
import Project, { HUXTABURGER } from '$shared/Project'
import Section from '$shared/Section'
import Display from '$shared/Display'
import SectionHeader from '$shared/SectionHeader'
import BrowsingVideo from '$hux/BrowsingVideo'
import { Logo, CollageA, CollageB, Collage, LargeSign } from '$hux/Pics'
import Iconic from '$hux/Iconic'
import Neon from '$hux/Neon'
import Spacer from '$shared/Spacer'
import Topic from '$shared/Topic'
import ScrollIndicator from '$shared/ScrollIndicator'

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

const HuxtaburgerPage = () => (
    <Project id={HUXTABURGER}>
        <Layout theme={LayoutTheme}>
            <Section theme={RedTheme} menuToggleBackground>
                <Hero>
                    <p>
                        We designed the original brand, site and print work, and
                        have been happy to see them grow into the Melbourne icon
                        they are today.
                    </p>
                </Hero>
            </Section>
            <ScrollIndicator.Target />
            <Topic title="Milk Bar vs Diner">
                <Section theme={WhiteTheme} head menuToggleColor="#575757">
                    <SectionHeader no={1} />
                    <Container>
                        <p>
                            One of the first players in the now-crowded gourmet
                            burger scene, the original brand is a mashup of
                            classic American diner with a 70’s Aussie milk bar
                            typographic aesthetic — pressed metal diamonds meets
                            red, white &amp; blue fly strips, with the king of
                            beef at the centre of it all.
                        </p>
                    </Container>
                    <Spacer head tail>
                        <Logo />
                    </Spacer>
                </Section>
                <Section theme={WhiteTheme}>
                    <Display as={CollageA} xs="none" sm="block" />
                    <Display as={CollageB} xs="none" sm="block" />
                    <Display as={Collage} sm="none" />
                    <LargeSign />
                </Section>
            </Topic>
            <Topic title="Beery Browsing">
                <Section theme={WhiteTheme} tail menuToggleColor="#575757">
                    <Spacer head>
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                The key UX concept that drove the site design
                                was simple. Users should be be able to flip
                                through the site on a phone with one hand while
                                holding a beer in the other. Also, early on, we
                                decided we want to be able to see what was in
                                the burgers by tapping them. Put another way,
                                exploding burgers.
                            </p>
                            <Spacer head>
                                <BrowsingVideo />
                            </Spacer>
                        </Container>
                    </Spacer>
                </Section>
            </Topic>
            <Topic title="Making an Icon iconic">
                <Section theme={BlueTheme} head tail>
                    <SectionHeader no={3} />
                    <Container>
                        <p>
                            It was an uphill battle to convince the client that
                            we should illustrate all their burgers and products.
                            Lots of people do it now, but at the time it was
                            relatively rare. It worked well, and customers love
                            it. Once we’d applied it to the products we extended
                            it to the stores, making each one an individual
                            animated icon. Try clicking the ones below.
                        </p>
                    </Container>
                    <Spacer head>
                        <Iconic />
                    </Spacer>
                </Section>
            </Topic>
            <Topic title="Sexy Neon">
                <Section theme={BlackTheme} head>
                    <SectionHeader no={4} />
                    <Container>
                        <p>
                            We put together a wide range of signage including
                            windows, and boxes but without doubt this Hot Beef —
                            Cold Beer neon is our favourite.
                        </p>
                    </Container>
                    <Spacer head>
                        <Neon />
                    </Spacer>
                </Section>
            </Topic>
            <Topic title="Credits">
                <Section theme={BlackTheme} head tail>
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
                        <Contributor name="Ben Jennings" role="Design, Code" />
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
    </Project>
)

export default HuxtaburgerPage
