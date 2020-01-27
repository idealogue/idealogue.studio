import React from 'react'
import styled from 'styled-components'

const UnstyledSectionHeader = ({ no, children, ...props }) => (
    <div {...props}>
        <div className="no">
            {no < 10 ? `0${no}` : no}
        </div>
        {children}
    </div>
)

const SectionHeader = styled(UnstyledSectionHeader)`
    &,
    .no {
        border-bottom: 1px solid black;
        padding-bottom: 0.8em;
    }

    .no {
        margin-bottom: 0.8em;
    }
`

export default SectionHeader
