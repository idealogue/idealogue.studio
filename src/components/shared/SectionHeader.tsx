import { Container } from '$shared/Container'
import { Display } from '$shared/Display'
import { useTopic } from '$shared/Topic'
import { LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

const Body = styled.div<{ $color?: string; $borderColor?: string }>`
    border-bottom: 1px solid var(--SectionHeader_BorderColor);
    color: var(--SectionHeader_Color);
    padding: 0.8em 0;
`

const No = styled(Body)`
    color: var(--SectionHeader_NumberColor, var(--SectionHeader_Color));
    font-size: 30px;

    @media (min-width: ${SM}px) {
        font-size: inherit;
    }
`

interface SectionHeaderProps {
    children?: React.ReactNode
    no: number
}

export function SectionHeader({ children, no }: SectionHeaderProps) {
    const { title, hash, mobileTitle } = useTopic()

    return (
        <SectionHeaderRoot>
            <Container>
                <No>{no < 10 ? `0${no}` : no}</No>
                <Body>
                    {hash ? (
                        <>
                            <a href={`#${hash}`}>
                                {title === mobileTitle ? (
                                    title
                                ) : (
                                    <>
                                        <Display as="span" md="none">
                                            {mobileTitle}
                                        </Display>
                                        <Display as="span" xs="none" md="inline">
                                            {title}
                                        </Display>
                                    </>
                                )}
                            </a>
                            {children}
                        </>
                    ) : (
                        children
                    )}
                </Body>
            </Container>
        </SectionHeaderRoot>
    )
}

const SectionHeaderRoot = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 1.15em;
    margin-bottom: 72px;

    a {
        color: inherit !important;
        text-decoration: none !important;
    }

    @media (min-width: ${SM}px) {
        font-size: 21px;
    }

    @media (min-width: ${MD}px) {
        font-size: 25px;
    }

    @media (min-width: ${LG}px) {
        font-size: 30px;
    }
`
