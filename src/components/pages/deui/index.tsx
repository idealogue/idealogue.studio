import * as React from 'react'
import styled, { css } from 'styled-components'
import { ThemeToggle } from '~/components/pages/deui/ThemeToggle'
import { ProjectHeroContent, ProjectImage, ProjectName } from '~/components/Project'
import { ProjectPage } from '~/components/ProjectPage'
import { Section } from '~/components/Section'
import { Container } from '~/components/shared/Container'
import { Layout } from '~/components/shared/Layout'
import { ScrollIndicator, ScrollIndicatorTarget } from '~/components/shared/ScrollIndicator'
import { SectionHeader } from '~/components/shared/SectionHeader'
import { Topic } from '~/components/shared/Topic'
import { font } from '~/utils/css'
import Cup from './assets/cup.png'
import Cup2x from './assets/cup@2x.png'
import MachinePicture from './assets/machine.jpg'
import Controller from './assets/ui_controller.jpg'
import Controller2x from './assets/ui_controller@2x.jpg'
import ControllerLight from './assets/ui_controller_light.jpg'
import ControllerLight2x from './assets/ui_controller_light@2x.jpg'
import Profiles from './assets/ui_profiles.jpg'
import Profiles2x from './assets/ui_profiles@2x.jpg'
import ProfilesLight from './assets/ui_profiles_light.jpg'
import ProfilesLight2x from './assets/ui_profiles_light@2x.jpg'
import Settings from './assets/ui_settings.jpg'
import Settings2x from './assets/ui_settings@2x.jpg'
import SettingsLight from './assets/ui_settings_light.jpg'
import SettingsLight2x from './assets/ui_settings_light@2x.jpg'
import Shot from './assets/ui_shot.jpg'
import Shot2x from './assets/ui_shot@2x.jpg'
import ShotLight from './assets/ui_shot_light.jpg'
import ShotLight2x from './assets/ui_shot_light@2x.jpg'

export function DeuiPage() {
    const [dark, setDark] = React.useState(true)

    return (
        <ProjectPage projectName="deui">
            <Layout rootCss={layoutCss}>
                <Section css={[defaultCss, heroCss]}>
                    <ProjectHeroContent>
                        <Container>
                            <ProjectImage src={Cup} srcSet={`${Cup2x} 2x`} />
                            <ProjectName />
                        </Container>
                    </ProjectHeroContent>
                    <ScrollIndicator />
                </Section>
                <ScrollIndicatorTarget />
                <Topic title="A responsive replacement for the DE1 app">
                    <Section spacerProps={{ head: true, tail: true }} css={defaultCss}>
                        <SectionHeader no={1} />
                        <Container>
                            <p>
                                Deui is a replacement for the app that ships with Decent Espresso
                                coffee machines. I followed Decent for years as I loved their aim of
                                making great software-controlled espresso, and bought one when I
                                could finally afford it. Unfortunately, what I discovered was poorly
                                written, hobbyist-level software with little care or understanding
                                of typography, interaction design or modern web standards. And it
                                only ran on Android tablets.
                            </p>
                            <p>
                                So I teamed up with Mariusz to make a replacement, mainly because I
                                couldn&amp;t stand to use such unhappy software on such a generally
                                nice espresso machine.
                            </p>
                            <p>
                                Our goals were for something responsive and multi-client, so I could
                                have an iPad mini on the machine but also use my iPhone to warm up
                                the machine from bed on lazy mornings. Simplified features were ok,
                                no need for charts but I did want easy to read metrics, easy to
                                select profiles, and a water level gauge. And also dark & light
                                modes, to match the black or white only options that the machines
                                come in.
                            </p>
                        </Container>
                    </Section>
                </Topic>
                <Section
                    spacerProps={{ head: true, tail: true }}
                    css={[defaultCss, themeCss, dark ? darkCss : lightCss]}
                >
                    <UiScreenshots>
                        <ScreenshotWrap>
                            <UiScreenshot>
                                <ImageDark
                                    src={Controller}
                                    srcSet={`${Controller2x} 2x`}
                                    alt="Controller"
                                />
                                <ImageLight
                                    src={ControllerLight}
                                    srcSet={`${ControllerLight2x} 2x`}
                                    alt="Controller"
                                />
                            </UiScreenshot>
                        </ScreenshotWrap>
                        <UiScreenshotNarrow>
                            <ScreenshotWrap>
                                <ImageDark
                                    src={Settings}
                                    srcSet={`${Settings2x} 2x`}
                                    alt="Settings"
                                />
                                <ImageLight
                                    src={SettingsLight}
                                    srcSet={`${SettingsLight2x} 2x`}
                                    alt="Settings"
                                />
                            </ScreenshotWrap>
                            <ScreenshotWrap>
                                <ImageDark src={Shot} srcSet={`${Shot2x} 2x`} alt="Shot" />
                                <ImageLight
                                    src={ShotLight}
                                    srcSet={`${ShotLight2x} 2x`}
                                    alt="Shot"
                                />
                            </ScreenshotWrap>
                            <ScreenshotWrap>
                                <ImageDark
                                    src={Profiles}
                                    srcSet={`${Profiles2x} 2x`}
                                    alt="Profiles"
                                />
                                <ImageLight
                                    src={ProfilesLight}
                                    srcSet={`${ProfilesLight2x} 2x`}
                                    alt="Profiles"
                                />
                            </ScreenshotWrap>
                        </UiScreenshotNarrow>
                    </UiScreenshots>
                    <ThemeToggle
                        dark={dark}
                        type="button"
                        onClick={() => {
                            setDark((c) => !c)
                        }}
                    />
                </Section>
                <Section css={[defaultCss]}>
                    <Machine />
                </Section>
                <Topic title="Try it out yourself">
                    <Section spacerProps={{ head: true, tail: true }} css={defaultCss}>
                        <SectionHeader no={2} />
                        <Container>
                            <p>
                                The app is still a work in progress. We aim to get the server
                                component running on Raspberry Pi so I can just put it in a cupboard
                                & forget about it, but at the moment it is still a Node app on my
                                MacBook. So making coffee requires some NPM terminal commands 🤓💥
                            </p>
                            <p>
                                Bluetooth scale connection for stop at weight, and a few more
                                control options will be nice, but for now it works reliably every
                                day, runs on my iPad mini + phone and does everything I need. If you
                                want to try it out, grab it from our Github repo below.
                            </p>
                            <p>
                                <RepoLink
                                    href="https://github.com/deui-coffee/deui"
                                    rel="noopener noreferrer"
                                >
                                    <div>→ Get Deui on Github</div>
                                </RepoLink>
                            </p>
                        </Container>
                    </Section>
                </Topic>
            </Layout>
        </ProjectPage>
    )
}

const RepoLink = styled.a`
    ${font('lab grotesque')}

    display: block;
    width: max-content;
    font-weight: 700;
    font-size: 1.875rem;
    text-decoration: none;
    padding: 1rem 0;

    && {
        color: var(--SectionHeader_Color) !important;
    }
`

const UiImage = styled.img`
    transition: 200ms ease-in-out;
    transition-property: visibility, opacity;
`

const ImageLight = styled(UiImage)`
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
`

const ImageDark = styled(UiImage)`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
    transition-delay: 200ms, 0s;
`

const UiScreenshot = styled.div`
    img {
        border-radius: 1rem;
        display: block;
    }
`

const UiScreenshotNarrow = styled(UiScreenshot)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 40px;
    margin-top: 40px;
`

const ScreenshotWrap = styled.div`
    position: relative;
`

const UiScreenshots = styled.div`
    width: 968px;
    max-width: 100%;
    margin: 0 auto;
`

const Machine = styled.div`
    background-image: url(${MachinePicture});
    background-size: cover;
    background-position: center;
    height: 70vw;
    max-height: 69rem;
    max-width: 1600px;
    margin: 0 auto;
    transition: 200ms ease-in-out margin;

    @media (min-width: 1600px) {
        border-radius: clamp(0rem, calc(100vw - 1600px), 1rem);
        margin: 15rem auto 0;
    }
`

const layoutCss = css`
    --Layout_Background: #101010;
`

const defaultCss = css`
    --Section_Background: #171717;
    --Section_Color: #9ea39e;
    --SectionHeader_BorderColor: #cdd1cd;
    --SectionHeader_Color: #ffffff;
    --SectionHeader_NumberColor: var(--SectionHeader_BorderColor);
    --ProjectName_Color: var(--SectionHeader_Color);
`

const heroCss = css`
    --MenuToggle_GradientHighBackgroundColor: var(--Section_Background);
`

const darkCss = css`
    --Section_Background: #0b0b0b;

    ${ImageLight} {
        opacity: 0;
        visibility: hidden;
        transition-delay: 200ms, 0s;
    }

    ${ImageDark} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }
`

const lightCss = css`
    --Section_Background: #ebebeb;
`

const themeCss = css`
    transition: 200ms ease-in-out background-color;
`
