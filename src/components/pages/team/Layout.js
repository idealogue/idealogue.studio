import Layout from '$shared/Layout'
import Section from '$shared/Section'
import * as React from 'react'
import styled from 'styled-components'

const LayoutTheme = {
    backgroundColor: '#2a2a2a',
}

const DefaultTheme = {
    backgroundColor: 'transparent',
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

const Cover = styled.div`
    background: #d4d4d4 url(${({ url }) => url}) bottom right no-repeat;
    background-size: cover;
`

const TeamPageLayout = ({ children, personImage, ...props }) => (
    <Layout {...props} theme={LayoutTheme}>
        <Cover url={personImage}>
            <Section actConsecutive theme={DefaultTheme}>
                <Inner>
                    <PersonWrapper>{children}</PersonWrapper>
                </Inner>
            </Section>
        </Cover>
    </Layout>
)

Object.assign(TeamPageLayout, {
    Cover,
    Wedge,
})

export default TeamPageLayout
