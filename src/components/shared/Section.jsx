import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import MenuToggle from '$shared/MenuToggle'
import Spacer from '$shared/Spacer'

const ToggleWrapper = styled.div`
    clip: rect(0, auto, auto, 0);
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 140px;
`

const UnstyledSection = ({ theme, children, ...props }) => (
    <ThemeProvider theme={theme}>
        <Spacer {...props}>
            {children}
            <ToggleWrapper>
                <MenuToggle />
            </ToggleWrapper>
        </Spacer>
    </ThemeProvider>
)

const Section = styled(UnstyledSection)`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    overflow: hidden;
    position: relative;

    :first-child {
        height: 100%;
        max-height: 1440px;
    }

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
