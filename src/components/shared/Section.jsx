import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import MenuToggle from '$shared/MenuToggle'
import { MD, LG } from '$utils/css'

const ToggleWrapper = styled.div`
    clip: rect(0, auto, auto, 0);
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 140px;
`

const UnstyledSection = ({ theme, children, head, tail, ...props }) => (
    <ThemeProvider theme={theme}>
        <div {...props}>
            {children}
            <ToggleWrapper>
                <MenuToggle />
            </ToggleWrapper>
        </div>
    </ThemeProvider>
)

const Section = styled(UnstyledSection)`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    overflow: hidden;
    position: relative;

    ${({ head }) => !!head && css`
        padding-top: 48px;

        @media (min-width: ${MD}px) {
            padding-top: 104px;
        }

        @media (min-width: ${LG}px) {
            padding-top: 240px;
        }
    `}


    ${({ tail }) => !!tail && css`
        padding-bottom: 48px;

        @media (min-width: ${MD}px) {
            padding-bottom: 104px;
        }

        @media (min-width: ${LG}px) {
            padding-bottom: 240px;
        }
    `}

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
