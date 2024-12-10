import AutoPlayingVideo from '$shared/AutoPlayingVideo'
import BrowserFrame from '$shared/BrowserFrame'
import CaptionedContainer from '$shared/CaptionedContainer'
import Container from '$shared/Container'
import Contributor, { Contributors } from '$shared/Contributor'
import FluidImage from '$shared/FluidImage'
import Hero from '$shared/Hero'
import Layout from '$shared/Layout'
import NextProject from '$shared/NextProject'
import Project, { VIZOR } from '$shared/Project'
import ScrollIndicator from '$shared/ScrollIndicator'
import Section from '$shared/Section'
import SectionHeader from '$shared/SectionHeader'
import Spacer from '$shared/Spacer'
import Ateneum from '$vizor/Ateneum'
import Icons from '$vizor/Icons'
import Image from '$vizor/Image'
import EditorImage from '$vizor/Image/editor.jpg'
import EditorImage2x from '$vizor/Image/editor@2x.jpg'
import LaunchPageImage from '$vizor/Image/launchPage.jpg'
import LaunchPageImage2x from '$vizor/Image/launchPage@2x.jpg'
import PlatformImage from '$vizor/Image/platform.jpg'
import PlatformImage2x from '$vizor/Image/platform@2x.jpg'
import Modules from '$vizor/Modules'
import PlayerPics from '$vizor/PlayerPics'
import Vizor360 from '$vizor/Vizor360'
import * as React from 'react'
import { Seo } from '../components/Seo'
import Topic from '../components/shared/Topic'

const LayoutTheme = {
    backgroundColor: '#040322',
}

const DarkBlueTheme = {
    backgroundColor: '#09063e',
    color: '#ffffff',
}

const NavyTheme = {
    backgroundColor: '#06042a',
    color: '#ffffff',
}

const MidnightBlueTheme = {
    backgroundColor: '#04021f',
    color: '#ffffff',
}

export default function VizorPage() {
    return (
        <Project id={VIZOR}>
            <Layout theme={LayoutTheme}>
                <Section theme={DarkBlueTheme} menuToggleBackground>
                    <Hero>
                        <p>
                            Working with Helsinki-based startup Pixelface, we
                            designed a powerful system for creating WebVR
                            in&nbsp;the&nbsp;browser.
                        </p>
                    </Hero>
                </Section>
                <ScrollIndicator.Target />
                <Topic title="From Engi.works to Vizor">
                    <Section theme={NavyTheme} head>
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                The app we saw in mid-2015, then known as Engi,
                                was very rough, but powerful. It had its own
                                WebGL-based realtime 3D graphics engine, a ton
                                of shaders and effects, the ability to output to
                                stereo VR views, and a deep visual programming
                                interface. We renamed it Vizor and created a new
                                brand style for it.
                            </p>
                            <Spacer head>
                                <FluidImage src={Image.GRID} alt="" />
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="Visual Programming">
                    <Section theme={NavyTheme} head>
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                One of our first tasks was to clean up the
                                programming UI. It could do almost anything, but
                                was a confusing mess of tiny icons, unclear
                                connections and hard to fathom structure. We
                                introduced a colour scheme for patch types,
                                accordions, clearer connections, and a
                                consistent structure.
                            </p>
                            <Spacer head>
                                <Modules />
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="The Patches Editor">
                    <Section theme={NavyTheme} head tail>
                        <SectionHeader no={3} />
                        <Container>
                            <p>
                                The visual programming editor, now renamed
                                Patches and open-source, is a fast and fluid
                                webGL-based 3D editor with switchable cameras
                                and single-click to publish. We introduced a
                                unique circular grid centred around the user,
                                for easy VR composing, as well as bold, highly
                                visible icons for HMD and lights.
                            </p>
                            <Spacer head>
                                <BrowserFrame shadow dark>
                                    <AutoPlayingVideo loop playsInline muted>
                                        <source
                                            src="/videos/vizor.mp4"
                                            type="video/mp4"
                                        />
                                    </AutoPlayingVideo>
                                </BrowserFrame>
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="The Player">
                    <Section theme={MidnightBlueTheme} head tail>
                        <SectionHeader no={4} />
                        <Container>
                            <p>
                                Content on Vizor ranges from 360 photos to
                                immersive stories, infographics and visual
                                experiments. The player was designed for
                                simplicity across 2D and VR views on desktops
                                and mobile.
                            </p>
                        </Container>
                        <Spacer head>
                            <PlayerPics />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="User Pages">
                    <Section theme={NavyTheme} head tail>
                        <SectionHeader no={5} />
                        <Container>
                            <p>
                                With a fully web-based file system, users needed
                                to be able to have public and private views of
                                their projects, along with drafts and public
                                projects to keep things tidy. We prototyped and
                                created this from the ground up, as it
                                didn&apos;t exist in the original prototype.
                            </p>
                            <Spacer head>
                                <BrowserFrame shadow dark>
                                    <FluidImage
                                        src={PlatformImage2x}
                                        srcSet={`${PlatformImage}, ${PlatformImage2x} 2x`}
                                        alt=""
                                        fill
                                    />
                                </BrowserFrame>
                            </Spacer>
                        </Container>
                    </Section>
                </Topic>
                <Topic title="Icons and Assets">
                    <Section theme={DarkBlueTheme} head tail>
                        <SectionHeader no={6} />
                        <Container>
                            <p>
                                Due to the need to keep polygon counts and file
                                sizes down for a reasonable page load time, we
                                worked with illustrator Jeremy Edelblut to
                                develop a playful, low-poly style to use across
                                3D icons for the editor, as well as library
                                assets for users to build with.
                            </p>
                        </Container>
                        <Spacer head>
                            <Icons />
                        </Spacer>
                    </Section>
                </Topic>
                <Topic title="Vizor 360">
                    <Section theme={NavyTheme} head>
                        <SectionHeader no={7} />
                        <Container>
                            <p>
                                The Patches editor is powerful, but seeing
                                strong user interest in 360 media led to
                                building a new, user-friendly app for telling
                                stories and making tours with 360 images. Built
                                from scratch in React, Vizor 360 is fast, light
                                and easy to use.
                            </p>
                            <Spacer head>
                                <BrowserFrame shadow dark>
                                    <FluidImage
                                        src={EditorImage2x}
                                        srcSet={`${EditorImage}, ${EditorImage2x} 2x`}
                                        alt=""
                                        fill
                                    />
                                </BrowserFrame>
                            </Spacer>
                        </Container>
                        <Spacer head tail>
                            <Ateneum />
                        </Spacer>
                        <CaptionedContainer caption="The Vizor 360 product launch page">
                            <Container>
                                <BrowserFrame shadow dark>
                                    <FluidImage
                                        src={LaunchPageImage2x}
                                        srcSet={`${LaunchPageImage}, ${LaunchPageImage2x} 2x`}
                                        alt=""
                                        fill
                                    />
                                </BrowserFrame>
                            </Container>
                        </CaptionedContainer>
                    </Section>
                    <Section theme={NavyTheme} head>
                        <Vizor360 />
                    </Section>
                </Topic>
                <Topic title="Credits">
                    <Section theme={NavyTheme} head tail>
                        <SectionHeader no={8} />
                        <Contributors>
                            <Contributor
                                name="Matt Innes"
                                role="Brand, Design lead"
                            />
                            <Contributor
                                name="Saori Kajiwara"
                                role="UI/UX design "
                            />
                            <Contributor
                                name="Jeremy Edelblut"
                                role="Patches illustration"
                            />
                            <Contributor
                                name="Filip Hodas"
                                role="Vizor 360 illustration"
                            />
                            <br />
                            <strong>Vizor Patches</strong>
                            <Contributor
                                name="Kaarlo Kananen"
                                role="Editor code"
                            />
                            <Contributor
                                name="Jaakko Manninen"
                                role="Core code"
                            />
                            <Contributor
                                name="Georgi Marinov"
                                role="Front end"
                            />
                            <Contributor name="Antti Jäderholm" role="VPL UX" />
                            <br />
                            <strong>Vizor 360</strong>
                            <Contributor name="Tim Oxley" role="Front end" />
                            <Contributor
                                name="Jouko Saastamoinen"
                                role="Front end"
                            />
                            <Contributor
                                name="Esa Ruoho"
                                role="Quality assurance"
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

export const Head = () => {
    return <Seo />
}
