import { HeadFC } from 'gatsby'
import * as React from 'react'
import { css } from 'styled-components'
import { BugImages } from '~/components/pages/cobalt/BugImages'
import { DesktopShot, MobileShots } from '~/components/pages/cobalt/ClarityImages'
import { LogoImage } from '~/components/pages/cobalt/LogoImage'
import { ProjectPage } from '~/components/ProjectPage'
import { Bullet } from '~/components/shared/Bullet'
import { Container } from '~/components/shared/Container'
import { Contributor, Contributors } from '~/components/shared/Contributor'
import Hero from '~/components/shared/Hero'
import { Layout } from '~/components/shared/Layout'
import { Link } from '~/components/shared/Link'
import NextProject from '~/components/shared/NextProject'
import { ScrollIndicatorTarget } from '~/components/shared/ScrollIndicator'
import { SectionHeader } from '~/components/shared/SectionHeader'
import { Topic } from '~/components/shared/Topic'
import { Spacer } from '~/components/Spacer'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'

export default function CobaltPage() {
    return (
        <ProjectPage projectName="cobalt">
            <Layout rootCss={layoutCss}>
                <Section css={[darkCss, heroCss]}>
                    <Hero>
                        <p>
                            Cobalt is an app security startup in San Francisco. We helped them with
                            a&nbsp;brand and&nbsp;site.
                        </p>
                    </Hero>
                </Section>
                <ScrollIndicatorTarget />
                <Topic title="Crowd Powered">
                    <Section spacerProps={{ head: true }} css={lightCss}>
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                Cobalt started life as Crowdcurity, as the name suggests, a
                                crowdsourced web-app security testing startup in San Francisco, run
                                by a great team of Danish Vikings. We helped with a new name, an
                                eyeball / combination lock-inspired mark, and an approachable brand
                                wrapped around it all.
                            </p>
                            <Spacer head scale={0.6}>
                                <LogoImage />
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="Aiming for Clarity">
                    <Section spacerProps={{ head: true }} css={lightCss}>
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                With the site, we aimed to make their range of services clear,
                                simple and accessible, with a friendly voice. We also did a brief UI
                                pass over Central, their web dashboard, to clean it up.
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
                    <Section spacerProps={{ head: true, tail: true }} css={darkCss}>
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                As a big part of the site is the leaderboards for their security
                                testers, where they get ranked against their peers, we worked with
                                illustrator Marty Cook to create a range of icons representing all
                                the bug types they can fix in client's applications — from access
                                control to an SQL injection.
                            </p>
                        </Container>
                        <Spacer head scale={0.6}>
                            <BugImages />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section spacerProps={{ head: true, tail: true }} css={lightCss}>
                        <SectionHeader no={4}>
                            <Bullet />
                            <Link
                                href="https://cobalt.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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
        </ProjectPage>
    )
}

export const Head: HeadFC = () => {
    return <Seo projectName="cobalt" />
}

const layoutCss = css`
    --Layout_Background: #207dbc;
`

const darkCss = css`
    --Section_Background: #248bd2;
    --Section_Color: #ffffff;
`

const lightCss = css`
    --Section_Background: #f9f9f9;
    --Section_Color: #575757;
`

const heroCss = css`
    --MenuToggle_GradientHighBackgroundColor: var(--Section_Background);
`
