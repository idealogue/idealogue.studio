import * as React from 'react'
import { css } from 'styled-components'
import { ALL as Image } from '~/components/pages/team/Image'
import { Collection, Person } from '~/components/pages/team/Person'
import { Section } from '~/components/Section'
import { FluidImage } from '~/components/shared/FluidImage'
import { Layout } from '~/components/shared/Layout'
import { Seo } from '../components/Seo'

export default function TeamPage() {
    return (
        <Layout rootCss={layoutCss}>
            <Section actConsecutive spacerProps={{ head: true, tail: true }} css={defaultCss}>
                <Collection>
                    <Person
                        img={
                            <FluidImage
                                src={Image.MATT}
                                srcSet={`${Image.MATT_2X} 2x`}
                                alt="Matt"
                            />
                        }
                        name="Matt Innes"
                        role="Designer / Creative Director"
                    >
                        Matt has worked as a designer and creative director in Australia and Japan
                        for more than 10 years. He holds a degree in Communication Design from
                        Swinburne School of Design, Melbourne. He has led design for Web3 projects
                        including Hive Wallet, Counterparty, Golem and Streamr. When not hiking,
                        he&apos;ll usually be backcountry snowboarding in Japan.
                    </Person>
                    <Person
                        img={
                            <FluidImage
                                src={Image.SAORI}
                                srcSet={`${Image.SAORI_2X} 2x`}
                                alt="Saori"
                            />
                        }
                        name="Saori Kajiwara"
                        role="UI/UX Designer"
                    >
                        A native of Shizuoka, Japan, Saori holds a&nbsp;degree in Communication
                        Design from Swinburne Design School, Melbourne. She&nbsp;has worked as an
                        illustrator and designer in Melbourne and Tokyo. She is most comfortable
                        building animations and&nbsp;prototypes with her toolkit of Sketch, Figma,
                        Invision and After Effects.
                    </Person>
                </Collection>
            </Section>
        </Layout>
    )
}

export const Head = () => {
    return <Seo />
}

const layoutCss = css`
    --Layout_Background: #ffffff;
`

const defaultCss = css`
    --MenuToggle_Color: #06042a;
`
