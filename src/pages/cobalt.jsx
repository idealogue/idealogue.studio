import React from "react"
import { Link } from "gatsby"
import SectionHeader from '$shared/SectionHeader'
import NextProject from '$shared/NextProject'
import Layout from '$shared/Layout'

const LayoutTheme = {
    backgroundColor: '#207dbc',
}

const CobaltPage = () => (
    <Layout theme={LayoutTheme}>
        <h1>Cobalt</h1>
        <SectionHeader no={1}>
            Crowd Powered
        </SectionHeader>
        <SectionHeader no={2}>
            Aiming for Clarity
        </SectionHeader>
        <SectionHeader no={3}>
            Bugs Categorised
        </SectionHeader>
        <SectionHeader no={4}>
            Credits
        </SectionHeader>
        <NextProject>
            <Link to="/hive">Hive</Link>
        </NextProject>
    </Layout>
)

export default CobaltPage
