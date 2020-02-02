import React from 'react'
import SectionHeader from '$shared/SectionHeader'
import NextProject from '$shared/NextProject'
import Layout from '$shared/Layout'
import Project, { HIVE } from '$shared/Project'
import Hero from '$shared/Hero'

const LayoutTheme = {
    backgroundColor: '#ffffff',
}

const CobaltPage = () => (
    <Project id={HIVE}>
        <Layout theme={LayoutTheme}>
            <Hero />
            <NextProject />
        </Layout>
    </Project>
)

export default CobaltPage
