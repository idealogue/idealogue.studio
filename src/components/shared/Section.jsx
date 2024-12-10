import MenuToggle from '$shared/MenuToggle'
import Spacer from '$shared/Spacer'
import { LG, MD, SM } from '$utils/css'
import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components'

const ToggleWrapper = styled.div`
    clip: rect(0, auto, auto, 0);
    color: ${({ toggleColor }) => toggleColor};
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 140px;
`

const UnstyledSection = ({
    theme = {},
    children,
    menuToggleColor = '#ffffff',
    menuToggleBackground,
    actConsecutive,
    ...props
}) => (
    <ThemeProvider theme={theme}>
        <Spacer {...props}>
            {children}
            <ToggleWrapper toggleColor={menuToggleColor}>
                <MenuToggle
                    backgroundColor={
                        menuToggleBackground ? theme.backgroundColor : undefined
                    }
                />
            </ToggleWrapper>
        </Spacer>
    </ThemeProvider>
)

const Section = styled(UnstyledSection)`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    overflow: hidden;
    position: relative;

    ${({ actConsecutive }) =>
        !actConsecutive &&
        css`
            &:first-child {
                height: 100%;
                max-height: 1440px;
                min-height: 640px;
            }
        `}

    p {
        font-family: 'Publico Text';
        font-size: 16px;
        line-height: 1.875em;
        margin: 0;

        @media (min-width: ${SM}px) {
            font-size: 18px;
        }

        @media (min-width: ${MD}px) {
            font-size: 21px;
        }

        @media (min-width: ${LG}px) {
            font-size: 25px;
        }
    }

    p + p {
        margin-top: 40px;
    }

    p a {
        color: inherit !important;
    }

    hr {
        background-color: ${({ theme }) => theme.color};
        border: 0;
        height: 1px;
    }
`

export default Section
