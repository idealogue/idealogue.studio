import React from 'react'
import Layout from '$shared/Layout'
import Section from '$shared/Section'
import FluidImage from '$shared/FluidImage'
import Image from '$team/Image'
import Person, { Collection } from '$team/Person'

const LayoutTheme = {
    backgroundColor: '#ffffff',
}

export default function TeamPage() {
    return (
        <Layout theme={LayoutTheme}>
            <Section theme={LayoutTheme} actConsecutive head tail menuToggleColor="#06042a">
                <Collection>
                    <Person
                        img={(
                            <FluidImage
                                src={Image.MATT}
                                srcSet={`${Image.MATT_2X} 2x`}
                                alt="Matt"
                            />
                        )}
                        name="Matt Innes"
                        role="Designer / Creative Director"
                    >
                        Matt has worked as a designer and creative director in Australia and Japan
                        for more than 10 years. He holds a degree in Communication Design from
                        Swinburne School of Design, Melbourne. He has led design for Web3 projects
                        including Hive Wallet, Counterparty, Golem and Streamr. When not hiking,
                        he’ll usually be backcountry snowboarding in Japan.
                    </Person>
                    <Person
                        img={(
                            <FluidImage
                                src={Image.SAORI}
                                srcSet={`${Image.SAORI_2X} 2x`}
                                alt="Saori"
                            />
                        )}
                        name="Saori Kajiwara"
                        role="UI/UX Designer"
                    >
                        A native of Shizuoka, Japan, Saori holds a&nbsp;degree in Communication
                        Design from Swinburne Design School, Melbourne. She&nbsp;has worked as an
                        illustrator and designer in Melbourne and Tokyo. She is most comfortable
                        building animations and&nbsp;prototypes with her toolkit of Sketch, Figma, Invision and After Effects.
                    </Person>
                </Collection>
            </Section>
        </Layout>
    )
}
