import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const UnstyledSection = ({ theme, ...props }) => (
    <ThemeProvider theme={theme}>
        <div {...props} />
    </ThemeProvider>
)

const Section = styled(UnstyledSection)`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};

    p {
        font-family: 'Publico Text';
        font-size: 24px;
        line-height: 40px;
        margin: 0;
    }

    p + p {
        margin-top: 40px;
    }

    hr {
        background-color: ${({ theme }) => theme.color};
        border: 0;
        height: 1px;
    }
`

export default Section
