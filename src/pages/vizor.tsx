import EditorImage from '$vizor/Image/editor.jpg'
import EditorImage2x from '$vizor/Image/editor@2x.jpg'
import LaunchPageImage from '$vizor/Image/launchPage.jpg'
import LaunchPageImage2x from '$vizor/Image/launchPage@2x.jpg'
import PlatformImage from '$vizor/Image/platform.jpg'
import PlatformImage2x from '$vizor/Image/platform@2x.jpg'
import * as React from 'react'
import { css } from 'styled-components'
import { Icons } from '~/components/pages/vizor/Icons'
import { ALL as Image } from '~/components/pages/vizor/Image'
import { Modules } from '~/components/pages/vizor/Modules'
import { PlayerPics } from '~/components/pages/vizor/PlayerPics'
import { Vizor360 } from '~/components/pages/vizor/Vizor360'
import { ProjectPage } from '~/components/ProjectPage'
import { Section } from '~/components/Section'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import { BrowserFrame } from '~/components/shared/BrowserFrame'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import { Container } from '~/components/shared/Container'
import { Contributor, Contributors } from '~/components/shared/Contributor'
import { FluidImage } from '~/components/shared/FluidImage'
import Hero from '~/components/shared/Hero'
import { Layout } from '~/components/shared/Layout'
import NextProject from '~/components/shared/NextProject'
import { ScrollIndicatorTarget } from '~/components/shared/ScrollIndicator'
import { SectionHeader } from '~/components/shared/SectionHeader'
import { Spacer } from '~/components/Spacer'
import { Seo } from '../components/Seo'
import { Topic } from '../components/shared/Topic'

export default function VizorPage() {
    return (
        <ProjectPage projectName="vizor">
            <Layout rootCss={layoutCss}>
                <Section css={[defaultCss, heroCss]}>
                    <Hero>
                        <p>
                            Working with Helsinki-based startup Pixelface, we designed a powerful
                            system for creating WebVR in&nbsp;the&nbsp;browser.
                        </p>
                    </Hero>
                </Section>
                <ScrollIndicatorTarget />
                <Topic title="From Engi.works to Vizor">
                    <Section spacerProps={{ head: true }} css={[defaultCss, navyCss]}>
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                The app we saw in mid-2015, then known as Engi, was very rough, but
                                powerful. It had its own WebGL-based realtime 3D graphics engine, a
                                ton of shaders and effects, the ability to output to stereo VR
                                views, and a deep visual programming interface. We renamed it Vizor
                                and created a new brand style for it.
                            </p>
                            <Spacer head>
                                <FluidImage src={Image.GRID} />
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="Visual Programming">
                    <Section spacerProps={{ head: true }} css={[defaultCss, navyCss]}>
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                One of our first tasks was to clean up the programming UI. It could
                                do almost anything, but was a confusing mess of tiny icons, unclear
                                connections and hard to fathom structure. We introduced a colour
                                scheme for patch types, accordions, clearer connections, and a
                                consistent structure.
                            </p>
                            <Spacer head>
                                <Modules />
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="The Patches Editor">
                    <Section spacerProps={{ head: true, tail: true }} css={[defaultCss, navyCss]}>
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                The visual programming editor, now renamed Patches and open-source,
                                is a fast and fluid webGL-based 3D editor with switchable cameras
                                and single-click to publish. We introduced a unique circular grid
                                centred around the user, for easy VR composing, as well as bold,
                                highly visible icons for HMD and lights.
                            </p>
                            <Spacer head>
                                <BrowserFrame shadow dark>
                                    <AutoPlayingVideo loop playsInline muted>
                                        <source src="/videos/vizor.mp4" type="video/mp4" />
                                    </AutoPlayingVideo>
                                </BrowserFrame>
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="The Player">
                    <Section
                        spacerProps={{ head: true, tail: true }}
                        css={[defaultCss, midnightBlueCss]}
                    >
                        <SectionHeader no={4} />
                        <Container>
                            <p>
                                Content on Vizor ranges from 360 photos to immersive stories,
                                infographics and visual experiments. The player was designed for
                                simplicity across 2D and VR views on desktops and mobile.
                            </p>
                        </Container>
                        <Spacer head>
                            <PlayerPics />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="User Pages">
                    <Section spacerProps={{ head: true, tail: true }} css={[defaultCss, navyCss]}>
                        <SectionHeader no={5} />
                        <Container>
                            <p>
                                With a fully web-based file system, users needed to be able to have
                                public and private views of their projects, along with drafts and
                                public projects to keep things tidy. We prototyped and created this
                                from the ground up, as it didn&apos;t exist in the original
                                prototype.
                            </p>
                            <Spacer head>
                                <BrowserFrame shadow dark>
                                    <FluidImage
                                        src={PlatformImage2x}
                                        srcSet={`${PlatformImage}, ${PlatformImage2x} 2x`}
                                        fill
                                    />
                                </BrowserFrame>
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="Icons and Assets">
                    <Section spacerProps={{ head: true, tail: true }} css={[defaultCss]}>
                        <SectionHeader no={6} />
                        <Container>
                            <p>
                                Due to the need to keep polygon counts and file sizes down for a
                                reasonable page load time, we worked with illustrator Jeremy
                                Edelblut to develop a playful, low-poly style to use across 3D icons
                                for the editor, as well as library assets for users to build with.
                            </p>
                        </Container>
                        <Spacer head>
                            <Icons />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Vizor 360">
                    <Section spacerProps={{ head: true }} css={[defaultCss, navyCss]}>
                        <SectionHeader no={7} />
                        <Container>
                            <p>
                                The Patches editor is powerful, but seeing strong user interest in
                                360 media led to building a new, user-friendly app for telling
                                stories and making tours with 360 images. Built from scratch in
                                React, Vizor 360 is fast, light and easy to use.
                            </p>
                            <Spacer head>
                                <BrowserFrame shadow dark>
                                    <FluidImage
                                        src={EditorImage2x}
                                        srcSet={`${EditorImage}, ${EditorImage2x} 2x`}
                                        fill
                                    />
                                </BrowserFrame>
                            </Spacer>
                        </Container>
                        <Spacer head />
                        <CaptionedContainer caption="The Vizor 360 product launch page">
                            <Container>
                                <BrowserFrame shadow dark>
                                    <FluidImage
                                        src={LaunchPageImage2x}
                                        srcSet={`${LaunchPageImage}, ${LaunchPageImage2x} 2x`}
                                        fill
                                    />
                                </BrowserFrame>
                            </Container>
                        </CaptionedContainer>
                    </Section>
                    <Section spacerProps={{ head: true }} css={[defaultCss, navyCss]}>
                        <Vizor360 />
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section spacerProps={{ head: true, tail: true }} css={[defaultCss, navyCss]}>
                        <SectionHeader no={8} />
                        <Contributors>
                            <Contributor name="Matt Innes" role="Brand, Design lead" />
                            <Contributor name="Saori Kajiwara" role="UI/UX design " />
                            <Contributor name="Jeremy Edelblut" role="Patches illustration" />
                            <Contributor name="Filip Hodas" role="Vizor 360 illustration" />
                            <br />
                            <strong>Vizor Patches</strong>
                            <Contributor name="Kaarlo Kananen" role="Editor code" />
                            <Contributor name="Jaakko Manninen" role="Core code" />
                            <Contributor name="Georgi Marinov" role="Front end" />
                            <Contributor name="Antti Jäderholm" role="VPL UX" />
                            <br />
                            <strong>Vizor 360</strong>
                            <Contributor name="Tim Oxley" role="Front end" />
                            <Contributor name="Jouko Saastamoinen" role="Front end" />
                            <Contributor name="Esa Ruoho" role="Quality assurance" />
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

export const Head = () => {
    return <Seo projectName="vizor" />
}

const layoutCss = css`
    --Layout_Background: #040322;
`

const defaultCss = css`
    --Section_Background: #09063e;
    --Section_Color: #ffffff;
    --Caption_Color: rgba(255, 255, 255, 0.5);
`

const heroCss = css`
    --MenuToggle_GradientHighBackgroundColor: var(--Section_Background);
`

const navyCss = css`
    --Section_Background: #06042a;
`

const midnightBlueCss = css`
    --Section_Background: #04021f;
`
