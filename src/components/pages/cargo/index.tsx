import * as React from 'react'
import { css } from 'styled-components'
import { CargoLogo } from '~/components/pages/cargo/CargoLogo'
import { Folders } from '~/components/pages/cargo/Folders'
import { Icons } from '~/components/pages/cargo/Icons'
import { Modules } from '~/components/pages/cargo/Modules'
import { ProjectHeroContent, ProjectName } from '~/components/Project'
import { ProjectPage } from '~/components/ProjectPage'
import { Section } from '~/components/Section'
import { Container } from '~/components/shared/Container'
import { Contributor, Contributors } from '~/components/shared/Contributor'
import { Layout } from '~/components/shared/Layout'
import NextProject from '~/components/shared/NextProject'
import { ScrollIndicator, ScrollIndicatorTarget } from '~/components/shared/ScrollIndicator'
import { SectionHeader } from '~/components/shared/SectionHeader'
import { Topic } from '~/components/shared/Topic'

export function CargoPage() {
    return (
        <ProjectPage projectName="cargo">
            <Layout rootCss={layoutCss}>
                <Section css={[defaultCss, heroCss]}>
                    <ProjectHeroContent>
                        <Container>
                            <CargoLogo />
                            <ProjectName />
                        </Container>
                    </ProjectHeroContent>
                    <ScrollIndicator />
                </Section>
                <ScrollIndicatorTarget />
                <Topic title="Forests, containers and manifests">
                    <Section spacerProps={{ head: true, tail: true }} css={defaultCss}>
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                Cargo was a project we worked on with Golem Foundation that never
                                launched. The original idea was a universal file system with some
                                knowledge base concepts like multiple paths to any file. Large
                                groups of shared files were thought of as forests, while the atomic
                                unit was the container, a file or group of files with a manifest
                                carrying metadata.
                            </p>
                            <p>
                                It was probably too ambitious, with apps for every platform, too
                                similar to existing services like Dropbox, and assumed users would
                                actively want to organise their own files. It made it to a few
                                prototypes and then was killed — but some of the team went on to
                                build Octant.
                            </p>
                        </Container>
                    </Section>
                </Topic>
                <Section css={blackCss}>
                    <Modules />
                </Section>
                <Topic title="Icons and illustration">
                    <Section css={defaultCss} spacerProps={{ head: true }}>
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                As the main Cargo app was intended to both work as an integration
                                into the user's file system, and as a web-based platform, we created
                                icons for forests, containers and shared files that would work
                                clearly right down to tiny native filesystem list views. Stuart Wade
                                worked with us to create a series of dark and light mode spot
                                illustrations to be used throughout the apps.
                            </p>
                        </Container>
                    </Section>
                </Topic>
                <Section css={defaultCss} spacerProps={{ head: true }}>
                    <Folders />
                </Section>
                <Section css={defaultCss} spacerProps={{ head: true }}>
                    <Icons />
                </Section>
                <Topic title="Credits">
                    <Section css={defaultCss} spacerProps={{ head: true, tail: true }}>
                        <SectionHeader no={3} />
                        <Contributors>
                            <Contributor name="Saori Kajiwara" role="UI/UX design" />
                            <Contributor name="Matt Innes" role="Brand, design lead" />
                            <Contributor name="Stuart Wade" role="Illustration & Animation" />
                            <Contributor name="Andrzej Ziółek" role="Front end lead" />
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

const layoutCss = css`
    --Layout_Background: #101010;
`

const defaultCss = css`
    --Section_Background: #181818;
    --Section_Color: #9ea39e;
    --ProjectName_Color: #ffffff;
    --SectionHeader_Color: #ffffff;
    --SectionHeader_BorderColor: #ffffff;
    --SectionHeader_NumberColor: var(--Section_Color);
`

const heroCss = css`
    --MenuToggle_GradientHighBackgroundColor: var(--Section_Background);
`

const blackCss = css`
    --Section_Background: #000000;
    --Section_Color: #9ea39e;
`
