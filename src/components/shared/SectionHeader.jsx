import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'
import { useTopic } from '$shared/Topic'

const UnstyledSectionHeader = ({ no, children, ...props }) => {
    const { title, hash } = useTopic()

    return (
        <div {...props}>
            <Container>
                <div className="no">
                    {no < 10 ? `0${no}` : no}
                </div>
                <div className="body">
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
                </div>
            </Container>
        </div>
    )
}

const SectionHeader = styled(UnstyledSectionHeader)`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 72px;

    .body,
    .no {
        border-bottom: 1px solid ${({ theme }) => theme.color};
        padding-bottom: 0.8em;
    }

    .no {
        margin-bottom: 0.8em;
    }

    a {
        color: inherit !important;
        text-decoration: none !important;
    }
`

export default SectionHeader
