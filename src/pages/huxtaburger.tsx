import { HeadFC } from 'gatsby'
import * as React from 'react'
import { css } from 'styled-components'
import { BrowsingVideo } from '~/components/pages/huxtaburger/BrowsingVideo'
import { Iconic } from '~/components/pages/huxtaburger/Iconic'
import { Neon } from '~/components/pages/huxtaburger/Neon'
import { Collage, CollageA, CollageB, LargeSign, Logo } from '~/components/pages/huxtaburger/Pics'
import { ProjectPage } from '~/components/ProjectPage'
import { Section } from '~/components/Section'
import { Bullet } from '~/components/shared/Bullet'
import { Container } from '~/components/shared/Container'
import { Contributor, Contributors } from '~/components/shared/Contributor'
import { Display } from '~/components/shared/Display'
import Hero from '~/components/shared/Hero'
import { Layout } from '~/components/shared/Layout'
import { Link } from '~/components/shared/Link'
import NextProject from '~/components/shared/NextProject'
import { ScrollIndicatorTarget } from '~/components/shared/ScrollIndicator'
import { SectionHeader } from '~/components/shared/SectionHeader'
import { Topic } from '~/components/shared/Topic'
import { Spacer } from '~/components/Spacer'
import { Seo } from '../components/Seo'

export default function HuxtaburgerPage() {
    return (
        <ProjectPage projectName="huxtaburger">
            <Layout rootCss={layoutCss}>
                <Section css={[defaultCss, heroCss]}>
                    <Hero>
                        <p>
                            We designed the original brand, site and print work, and have been happy
                            to see them grow into the Melbourne icon they are today.
                        </p>
                    </Hero>
                </Section>
                <ScrollIndicatorTarget />
                <Topic title="Milk Bar vs Diner">
                    <Section spacerProps={{ head: true }} css={whiteCss}>
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                One of the first players in the now-crowded gourmet burger scene,
                                the original brand is a mashup of classic American diner with a 70’s
                                Aussie milk bar typographic aesthetic — pressed metal diamonds meets
                                red, white &amp; blue fly strips, with the king of beef at the
                                centre of it all.
                            </p>
                        </Container>
                        <Spacer head tail>
                            <Logo />
                        </Spacer>
                    </Section>
                    <Section css={[whiteCss, whiteToggleCss]}>
                        <Display as={CollageA} xs="none" sm />
                        <Display as={CollageB} xs="none" sm />
                        <Display as={Collage} sm="none" />
                        <LargeSign />
                    </Section>
                </Topic>
                <Topic title="Beery Browsing">
                    <Section spacerProps={{ tail: true }} css={whiteCss}>
                        <Spacer head>
                            <SectionHeader no={2} />
                            <Container>
                                <p>
                                    The key UX concept that drove the site design was simple. Users
                                    should be be able to flip through the site on a phone with one
                                    hand while holding a beer in the other. Also, early on, we
                                    decided we want to be able to see what was in the burgers by
                                    tapping them. Put another way, exploding burgers.
                                </p>
                                <Spacer head>
                                    <BrowsingVideo />
                                </Spacer>
                            </Container>
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Making an Icon iconic">
                    <Section spacerProps={{ head: true, tail: true }} css={blueCss}>
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                It was an uphill battle to convince the client that we should
                                illustrate all their burgers and products. Lots of people do it now,
                                but at the time it was relatively rare. It worked well, and
                                customers love it. Once we’d applied it to the products we extended
                                it to the stores, making each one an individual animated icon. Try
                                clicking the ones below.
                            </p>
                        </Container>
                        <Spacer head>
                            <Iconic />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Sexy Neon">
                    <Section spacerProps={{ head: true }} css={blackCss}>
                        <SectionHeader no={4} />
                        <Container>
                            <p>
                                We put together a wide range of signage including windows, and boxes
                                but without doubt this Hot Beef — Cold Beer neon is our favourite.
                            </p>
                        </Container>
                        <Spacer head>
                            <Neon />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section spacerProps={{ head: true, tail: true }} css={blackCss}>
                        <SectionHeader no={5}>
                            <Bullet />
                            <Link
                                href="http://huxtaburger.idealogue.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit the Site
                            </Link>
                        </SectionHeader>
                        <Contributors>
                            <Contributor name="Matt Innes" role="Brand, Direction, Design" />
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
        </ProjectPage>
    )
}

export const Head: HeadFC = () => {
    return <Seo projectName="huxtaburger" />
}

const layoutCss = css`
    --Layout_Background: #dd2712;
`

const defaultCss = css`
    --Section_Background: #ee4734;
    --Section_Color: #ffffff;
`

const heroCss = css`
    --MenuToggle_GradientHighBackgroundColor: var(--Section_Background);
`

const whiteCss = css`
    --Section_Background: #f9f9f9;
    --Section_Color: #575757;
`

const blueCss = css`
    --Section_Background: #22a4db;
    --Section_Color: #ffffff;
`

const blackCss = css`
    --Section_Background: #010000;
    --Section_Color: #ffffff;
`

const whiteToggleCss = css`
    --MenuToggle_Color: #ffffff;
`
