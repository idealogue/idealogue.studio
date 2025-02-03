import { font, LG, MD } from '$utils/css'
import { Link as GatsbyLink } from 'gatsby'
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Container } from '~/components/shared/Container'
import { Layout } from '~/components/shared/Layout'
import { Link } from '~/components/shared/Link'
import { LinkList } from '~/components/shared/Menu'
import { getProjectManifest, lineup } from '~/utils/project'
import { Seo } from '../components/Seo'

export default function IndexPage() {
    return (
        <Layout rootCss={layoutCss}>
            <Root>
                <Container>
                    <Logo>Idealogue</Logo>
                    <p>
                        We work with startups to create software with personality and digital
                        products we believe in.
                    </p>
                    <SectionLabel>Projects</SectionLabel>
                    <LinkList $inline>
                        {lineup.map((name, index) => (
                            <Fragment key={name}>
                                <li>
                                    <Link as={GatsbyLink} to={getProjectManifest(name).url}>
                                        {getProjectManifest(name).displayName}
                                    </Link>
                                </li>
                                {(index + 1) % 3 === 0 && <Separator />}
                            </Fragment>
                        ))}
                    </LinkList>
                    <SectionLabel>Team</SectionLabel>
                    <LinkList>
                        <li>
                            <Link as={GatsbyLink} to="/team/">
                                About us
                            </Link>
                        </li>
                    </LinkList>
                    <Footer>
                        <p>
                            Suite 113, 5 Ilhan Lane
                            <br />
                            Brunswick 3056
                            <br />
                            Naarm Australia
                        </p>
                        <p>
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
                        </p>
                        <p>
                            <Link as="a" href="mailto:matt@idealogue.io">
                                Email us
                            </Link>
                            <br />
                            <Link
                                href="#FigmaCommunityfiles"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Figma Community files
                            </Link>
                            <br />
                            That&apos;s all{' '}
                            <span role="img" aria-label="Cheers!">
                                &#x270c;&#xfe0f;{/* ✌ */}
                            </span>
                        </p>
                    </Footer>
                </Container>
            </Root>
        </Layout>
    )
}

export const Head = () => {
    return <Seo />
}

const Logo = styled.h1`
    ${font('publico banner')}

    font-size: 28px;
    font-weight: 700;
    line-height: normal;
    margin: 0 0 108px;

    @media (min-width: ${MD}px) {
        font-size: 40px;
        margin-bottom: 68px;
    }

    @media (min-width: ${LG}px) {
        font-size: 56px;
        margin-bottom: 168px;
    }
`

const SectionLabel = styled.h2`
    border-bottom: 1px solid rgba(235, 235, 235, 1);
    color: #9ea39e;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 118px 0 20px;
    padding: 0 0 16px;

    @media (min-width: ${MD}px) {
        font-size: 24px;
        margin: 108px 0 24px;
    }

    @media (min-width: ${LG}px) {
        font-size: 30px;
        margin: 256px 0 32px;
    }
`

const Footer = styled.footer`
    border-top: 1px solid rgba(235, 235, 235, 1);
    color: rgba(158, 163, 158, 1);
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    padding: 32px 0 72px;
    margin-top: 128px;

    p {
        font-weight: 500;
    }

    p + p {
        margin-top: 8px;
    }

    @media (min-width: ${MD}px) {
        display: flex;
        justify-content: space-between;
        padding: 56px 0 88px;
        margin-top: 128px;

        p + p {
            margin: 0;
        }
    }

    @media (min-width: ${LG}px) {
        font-size: 16px;
        margin-top: 256px;
    }
`

const Root = styled.div`
    color: #06042a;
    font-size: 28px;
    font-weight: bold;
    line-height: 50px;
    padding-top: 122px;

    p {
        margin: 0;
    }

    p a {
        text-decoration: none !important;
    }

    @media (min-width: ${LG}px) {
        font-size: 50px;
        line-height: 72px;
        padding-top: 208px;
    }
`

const Separator = styled.li`
    display: block !important;
`

const layoutCss = css`
    --Layout_Background: #fcfcfc;
    --Layout_Color: #06042a;
`
