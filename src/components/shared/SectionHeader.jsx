import React from 'react'
import styled from 'styled-components'
import Container from '$shared/Container'

const UnstyledSectionHeader = ({ no, children, ...props }) => (
    <div {...props}>
        <Container>
            <div className="no">
                {no < 10 ? `0${no}` : no}
            </div>
            <div className="body">
                {children}
            </div>
        </Container>
    </div>
)

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
`

export default SectionHeader
