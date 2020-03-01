import React, { Fragment } from 'react'
import Link from '$shared/Link'
import styled, { ThemeProvider, css } from 'styled-components'
import Layout from '$shared/Layout'
import { lineup, projects } from '$shared/Project'
import Container from '$shared/Container'

const Root = styled.div`
    color: white;
    font-size: 50px;
    font-weight: bold;
    line-height: 72px;
    padding-top: 208px;

    h1 {
        font-size: 45px;
        font-weight: 700;
        line-height: 1em;
        margin: 0 0 168px;
    }

    h2 {
        font-size: 30px;
        line-height: 1em;
        border-bottom: 1px solid #ffffff7f;
        margin: 256px 0 64px;
        padding: 0 0 16px;
    }

    footer {
        display: flex;
        font-size: 16px;
        justify-content: space-between;
        line-height: 1.5em;
        margin-top: 256px;
        padding: 96px;
        padding-left: 0;
    }

    p {
        margin: 0;
    }
`

const LayoutTheme = {
    backgroundColor: '#06042a',
}

const Theme = {
    color: '#ffffff',
}

const LinkList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    ${({ inline }) => !!inline && css`
        li {
            display: inline;
        }

        li::after {
            content: ' ';
        }
    `}
`

const Separator = styled.li`
    display: block !important;
`

const IndexPage = () => (
    <Layout theme={LayoutTheme}>
        <ThemeProvider theme={Theme}>
            <Root>
                <Container>
                    <h1>Idealogue</h1>
                    <p>We work with startups to create great&nbsp;digital products we believe in.</p>
                    <h2>Projects</h2>
                    <LinkList inline>
                        {lineup.map((id, index) => (
                            <Fragment key={id}>
                                <li>
                                    <Link to={projects[id].href}>
                                        {projects[id].name}
                                    </Link>
                                </li>
                                {(index + 1) % 3 === 0 && (
                                    <Separator />
                                )}
                            </Fragment>
                        ))}
                    </LinkList>
                    <h2>Team</h2>
                    <LinkList>
                        <li>
                            <Link to="/team/matt">Matt Innes</Link>
                        </li>
                        <li>
                            <Link to="/team/saori">Saori Kajiwara</Link>
                        </li>
                    </LinkList>
                    <footer>
                        <p>
                            242 Victoria Street
                            <br />
                            Brunswick 3056
                            <br />
                            Melbourne Australia
                        </p>
                        <p>
                            Build by
                            {' '}
                            <Link
                                as="a"
                                href="http://mariusz.io"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Mariusz
                            </Link>
                            <br />
                            <Link
                                as="a"
                                href="https://lettersfromsweden.se/font/lab-grotesque/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Lab Grotesque
                            </Link>
                            {' '}
                            by Letters from Sweden
                            <br />
                            <Link
                                as="a"
                                href="https://commercialtype.com/catalog/publico"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Publico
                            </Link>
                            {' '}
                            by Commercial Type
                        </p>
                        <p>
                            <Link as="a" href="mailto:matt@idealogue.io">
                                Email us
                            </Link>
                            <br />
                            <Link
                                as="a"
                                href="https://twitter.com/idealogue"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Twitter
                            </Link>
                            <br />
                            That’s all ✌
                        </p>
                    </footer>
                </Container>
            </Root>
        </ThemeProvider>
    </Layout>
)

export default IndexPage
