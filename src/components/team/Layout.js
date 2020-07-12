import React from 'react'
import styled from 'sc'
import Layout from '$shared/Layout'
import Section from '$shared/Section'

const LayoutTheme = {
    backgroundColor: '#2a2a2a',
}

const DefaultTheme = {
    backgroundColor: '#d4d4d4',
    color: '#2f2f2f',
}

const Inner = styled.div`
    align-items: center;
    display: flex;
    min-height: 100vh;
`

const PersonWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    margin: 0 auto;
    max-width: 1320px;
    padding: 194px 0;
    width: 100%;
`

const Wedge = styled.div`
    flex-grow: 1;
`

const TeamPageLayout = ({ children, ...props }) => (
    <Layout {...props} theme={LayoutTheme}>
        <Section
            actConsecutive
            theme={DefaultTheme}
        >
            <Inner>
                <PersonWrapper>
                    {children}
                </PersonWrapper>
            </Inner>
        </Section>
    </Layout>
)

Object.assign(TeamPageLayout, {
    Wedge,
})

export default TeamPageLayout
