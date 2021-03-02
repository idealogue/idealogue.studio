import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'
import { useTopic } from '$shared/Topic'
import { SM, MD, LG } from '$utils/css'

const Body = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color};
    padding-bottom: 0.8em;
`

const No = styled(Body)`
    margin-bottom: 0.8em;
`

const UnstyledSectionHeader = ({ no, children, ...props }) => {
    const { title, hash } = useTopic()

    return (
        <div {...props}>
            <Container>
                <No>
                    {no < 10 ? `0${no}` : no}
                </No>
                <Body>
                    {hash ? (
                        <>
                            <a href={`#${hash}`}>
                                {title}
                            </a>
                            {children}
                        </>
                    ) : (
                        children
                    )}
                </Body>
            </Container>
        </div>
    )
}

const SectionHeader = styled(UnstyledSectionHeader)`
    font-size: 20px;
    font-weight: 700;
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

export default SectionHeader
