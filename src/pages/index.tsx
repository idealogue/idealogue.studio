import { LG, MD } from '$utils/css'
import { Link as GatsbyLink } from 'gatsby'
import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Container } from '~/components/shared/Container'
import { Display } from '~/components/shared/Display'
import { Layout } from '~/components/shared/Layout'
import { Link } from '~/components/shared/Link'
import { LinkList } from '~/components/shared/Menu'
import { getProjectManifest, lineup } from '~/utils/project'
import { Seo } from '../components/Seo'

const Root = styled.div`
    color: #06042a;
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
    padding-top: 122px;

    h1 {
        font-family: 'Publico Text';
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -0.014px;
        line-height: 1em;
        margin: 0 0 108px;
    }

    h2 {
        border-bottom: 1px solid #06042a7f;
        font-size: 20px;
        line-height: 1em;
        margin: 118px 0 40px;
        padding: 0 0 16px;
    }

    p {
        margin: 0;
    }

    p a {
        text-decoration: none !important;
    }

    footer {
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        margin-top: 118px;
        padding-bottom: 40px;
    }

    footer p + p {
        margin-top: 44px;
    }

    @media (min-width: ${MD}px) {
        h1 {
            font-size: 40px;
            letter-spacing: -0.2px;
            margin-bottom: 68px;
        }

        h2 {
            margin: 108px 0 40px;
        }

        footer {
            display: flex;
            justify-content: space-between;
            margin-top: 168px;
            padding-bottom: 108px;
            padding: 0 0 32px;
        }

        footer p + p {
            margin: 0;
        }
    }

    @media (min-width: ${LG}px) {
        font-size: 50px;
        line-height: 72px;
        padding-top: 208px;

        h1 {
            font-size: 45px;
            margin-bottom: 168px;
        }

        h2 {
            font-size: 30px;
            margin: 256px 0 64px;
        }

        footer {
            font-size: 16px;
            margin-top: 256px;
            padding: 96px;
            padding-left: 0;
        }
    }
`

const LayoutTheme = {
    backgroundColor: '#fcfcfc',
}

const Theme = {
    color: '#06042a',
}

const Separator = styled.li`
    display: block !important;
`

export default function IndexPage() {
    return (
        <Layout theme={LayoutTheme}>
            <ThemeProvider theme={Theme}>
                <Root>
                    <Container>
                        <h1>Idealogue</h1>
                        <p>
                            We work with startups to create great&nbsp;digital
                            products we believe in.
                        </p>
                        <h2>Projects</h2>
                        <LinkList $inline>
                            {lineup.map((name, index) => (
                                <Fragment key={name}>
                                    <li>
                                        <Link
                                            as={GatsbyLink}
                                            to={getProjectManifest(name).url}
                                        >
                                            {
                                                getProjectManifest(name)
                                                    .displayName
                                            }
                                        </Link>
                                    </li>
                                    {(index + 1) % 3 === 0 && <Separator />}
                                </Fragment>
                            ))}
                        </LinkList>
                        <h2>Team</h2>
                        <LinkList>
                            <li>
                                <Link as={GatsbyLink} to="/team/">
                                    About us
                                </Link>
                            </li>
                        </LinkList>
                        <footer>
                            <p>
                                Level 1, 34 Breese St
                                <br />
                                Brunswick 3056
                                <br />
                                Melbourne Australia
                            </p>
                            <Display as="p" xs="none" md>
                                Build by{' '}
                                <Link
                                    href="https://www.mariusz.io"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Mariusz
                                </Link>
                                <br />
                                <Link
                                    href="https://lettersfromsweden.se/font/lab-grotesque/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Lab Grotesque
                                </Link>{' '}
                                by Letters from Sweden
                                <br />
                                <Link
                                    href="https://commercialtype.com/catalog/publico"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Publico
                                </Link>{' '}
                                by Commercial Type
                            </Display>
                            <Display as="p" xs="none" md>
                                <Link as="a" href="mailto:matt@idealogue.io">
                                    Email us
                                </Link>
                                <br />
                                <Link
                                    href="https://twitter.com/idealogue"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Twitter
                                </Link>
                                <br />
                                That&apos;s all{' '}
                                <span role="img" aria-label="Cheers!">
                                    &#x270c;&#xfe0f;{/* ✌ */}
                                </span>
                            </Display>
                            <Display
                                as="p"
                                md="none"
                                css={`
                                    font-size: 1.25em;
                                `}
                            >
                                <Link as="a" href="mailto:matt@idealogue.io">
                                    &rarr; Send us an email
                                </Link>
                            </Display>
                            <Display as="p" md="none">
                                That&apos;s all{' '}
                                <span role="img" aria-label="Cheers!">
                                    &#x270c;&#xfe0f;{/* ✌ */}
                                </span>
                            </Display>
                        </footer>
                    </Container>
                </Root>
            </ThemeProvider>
        </Layout>
    )
}

export const Head = () => {
    return <Seo />
}
