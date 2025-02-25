import * as React from 'react'
import styled, { css } from 'styled-components'
import { Blockquote, BlockquoteBody } from '~/components/Html'
import { Exploration } from '~/components/pages/octant/Exploration'
import { Illustrations } from '~/components/pages/octant/Illustrations'
import { Ui } from '~/components/pages/octant/Ui'
import { UiMobile } from '~/components/pages/octant/UiMobile'
import { ViewGallery } from '~/components/pages/octant/ViewGallery'
import { ViewGalleryMobile } from '~/components/pages/octant/ViewGalleryMobile'
import { Websites } from '~/components/pages/octant/Websites'
import { WebsitesMobile } from '~/components/pages/octant/WebsitesMobile'
import {
    ProjectImage as PrestyledProjectIamge,
    ProjectHeroContent,
    ProjectName,
} from '~/components/Project'
import { ProjectPage } from '~/components/ProjectPage'
import { HeroSection, Section } from '~/components/Section2'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import { Container } from '~/components/shared/Container'
import { Contributor, Contributors } from '~/components/shared/Contributor'
import { Layout } from '~/components/shared/Layout'
import NextProject from '~/components/shared/NextProject'
import { ScrollIndicator, ScrollIndicatorTarget } from '~/components/shared/ScrollIndicator'
import { SectionHeader } from '~/components/shared/SectionHeader'
import { Topic } from '~/components/shared/Topic'
import { TABLET } from '~/utils/css'
import Tree from './assets/tree.png'
import Tree2x from './assets/tree@2x.png'

export function OctantPage() {
    return (
        <ProjectPage projectName="octant">
            <Layout rootCss={layoutCss}>
                <HeroSection css={[defaultCss, heroCss]}>
                    <ProjectHeroContent>
                        <Container>
                            <ProjectImage src={Tree} srcSet={`${Tree2x} 2x`} />
                            <ProjectName />
                        </Container>
                    </ProjectHeroContent>
                    <ScrollIndicator />
                </HeroSection>
                <ScrollIndicatorTarget />
                <Topic title="Making public goods funding easy">
                    <Section x s m l css={defaultCss}>
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                Octant started life as a simple game where users get rewarded for
                                donating to good causes. We designed and built it in a couple of
                                weeks with the Golem Foundation team for use at their booth at ETH
                                Warsaw in 2023. It has since developed into one of the leading web3
                                public goods funding platforms.
                            </p>
                            <p>
                                The way it works is quite simple. Lock some tokens into the smart
                                contract powering the Octant app and earn rewards. The longer you
                                lock, the more you earn. Every 3 months an allocation window opens,
                                you choose as many public goods projects as you like, and divide
                                your rewards between them and yourself very easily using a slider.
                            </p>
                            <p>
                                The funds for rewards come from 100K ETH staked by the Golem
                                Foundation. Match funding is applied so even small donations can
                                have a sizeable effect on the amounts projects receive.
                            </p>
                        </Container>
                    </Section>
                </Topic>
                <Section x s m l css={[defaultCss, sageMistBgCss]}>
                    <ViewGallery />
                    <ViewGalleryMobile />
                </Section>
                <Topic title="Modular, tile-based UI for flexibility">
                    <Section x="t" s="t" m="t" l="t" css={defaultCss}>
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                One of the core design challenges was that the project started as an
                                experiment, and so we expected that large changes would be the norm.
                                Our solution was to make it as tile-based and modular as possible,
                                so the app could adapt to any kind of funding, rewards or allocation
                                ideas.
                            </p>
                            <p>
                                The slider-based mechanism to divide donations & personal rewards
                                was one of the trickiest to get right, but the app&apos;s overall
                                ease of use seems to have found the right balance.
                            </p>
                            <Blockquote>
                                <BlockquoteBody>
                                    Octant is the most exciting new project in the public goods
                                    space… I&nbsp;loved the clean UI and overall experience of 3
                                    step&nbsp;checkout.
                                </BlockquoteBody>
                                <cite>@TheDevanshMehta</cite>
                            </Blockquote>
                        </Container>
                    </Section>
                </Topic>
                <Section x="t" s="t" m="t" l="t" css={defaultCss}>
                    <Ui />
                    <UiMobile />
                </Section>
                <Topic title="Navigating public goods">
                    <Section css={defaultCss} x s m="t" l="t">
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                We named the project and built a simple brand around it, based on
                                the initial idea of the project as an experiment in governance
                                mechanisms.
                            </p>
                            <p>
                                An Octant (or reflecting quadrant) was a major innovation in
                                celestial navigation for its time, something that helped early
                                explorers find their way in an unknown world. We explored marks that
                                played with different meanings for the word, which can refer to the
                                celestial instrument, or to the arc of a circle divided into
                                eighths.
                            </p>
                        </Container>
                    </Section>
                </Topic>
                <Section x s m l css={explorationCss}>
                    <CaptionedContainer
                        caption={
                            <>
                                Various representations of Octant in mark form with final
                                at&nbsp;top&nbsp;right
                            </>
                        }
                    >
                        <Exploration />
                    </CaptionedContainer>
                </Section>
                <Section x="t" s="t" m="t" l="t" css={[defaultCss, pearlDustBgCss]}>
                    <Container>
                        <p>
                            We worked with Jeff Phillips on a 2D simple line style illustration set
                            to give the brand a friendly, approachable face. Animation house 21_19
                            helped out with an early promo video for the project. Stuart Wade came
                            on board later to help us out with animations for community POAPs and
                            social media.
                        </p>
                    </Container>
                </Section>
                <Section x s m l css={[defaultCss, pearlDustBgCss]}>
                    <CaptionedContainer caption="Brand animation and illustration">
                        <Illustrations />
                    </CaptionedContainer>
                </Section>
                <Topic title="Websites">
                    <Section x="t" s="t" m="t" l="t" css={[defaultCss, sageMistBgCss]}>
                        <SectionHeader no={4} />
                        <Container>
                            <p>
                                The landing page we put together was fairly simple, with a main page
                                explaining the basic concept at a high level, and a token page where
                                visitors can check prices and learn a bit more about GLM, the token
                                required to use this version of Octant.
                            </p>
                        </Container>
                    </Section>
                </Topic>
                <Section x s m l css={[defaultCss, sageMistBgCss]}>
                    <Websites />
                    <WebsitesMobile />
                </Section>
                <Topic title="Credits">
                    <Section x s m l css={defaultCss}>
                        <SectionHeader no={5} />
                        <Contributors>
                            <Contributor name="Saori Kajiwara" role="UI/UX design" />
                            <Contributor name="Matt Innes" role="Brand, design lead" />
                            <Contributor name="Jeff Philips" role="Illustration" />
                            <Contributor name="Stuart Wade" role="Animation" />
                            <Contributor name="21_19" role="Brand animation" />
                            <Contributor name="Andrzej Ziółek" role="Front end lead" />
                            <Contributor name="Jakub Mikołajczyk" role="Front end" />
                            <Contributor name="Piotr Arendt" role="Website build" />
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
    --Layout_Background: #ebebeb;
`

const defaultCss = css`
    --Section_Background: #f8f8f8;
    --Section_Color: #6b6b6b;
    --SectionHeader_BorderColor: #ebebeb;
    --SectionHeader_Color: #06042a;
    --SectionHeader_NumberColor: #9ea39e;
`

const explorationCss = css`
    --Section_Background: #ffffff;
    --Section_Color: #171717;

    @media ${TABLET} {
        --Section_Background: #f8f8f8;
        --Section_Color: #6b6b6b;
    }
`

const heroCss = css`
    --MenuToggle_GradientHighBackgroundColor: var(--Section_Background);
`

const pearlDustBgCss = css`
    --Section_Background: #f3f3f3;
`

const sageMistBgCss = css`
    --Section_Background: #cdd1cd;
    --Player_NavButtonIdleColor: #9ea39e;
    --Player_NavButtonActiveColor: #ffffff;
`

const ProjectImage = styled(PrestyledProjectIamge)`
    width: clamp(10rem, 26vw, 16.625rem);
`
