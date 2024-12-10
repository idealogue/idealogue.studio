import UnstyledGlyph, { PLAY } from '$shared/Glyph'
import * as React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

const TABLET = 800

export const DefaultTheme = {
    backgroundColor: '#ffffff',
    glyphColor: '#0324ff',
    size: '56px',
    mobileSize: '56px',
}

export const DarkTheme = {
    backgroundColor: '#000000',
    glyphColor: '#ffffff',
    size: '80px',
    mobileSize: '56px',
}

const Wrapper = styled.button`
    appearance: none;
    background-color: transparent;
    border: 0;
    height: 100%;
    left: 0;
    margin: 0;
    outline: 0 !important;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

const Glyph = styled.div`
    display: block;
    position: relative;

    path {
        fill: ${({ theme }) => theme.glyphColor || DefaultTheme.glyphColor};
    }
`

const Inner = styled.div`
    height: ${({ theme }) => theme.mobileSize || DefaultTheme.mobileSize};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${({ theme }) => theme.mobileSize || DefaultTheme.mobileSize};

    ${({ monolith }) =>
        !monolith &&
        css`
            cursor: pointer;
        `}

    @media (min-width: ${TABLET}px) {
        height: ${({ theme }) => theme.size || DefaultTheme.size};
        width: ${({ theme }) => theme.size || DefaultTheme.size};
    }
`

const Pad = styled.div`
    padding: 30%;
`

const Background = styled.div`
    background-color: ${({ theme }) =>
        theme.backgroundColor || DefaultTheme.backgroundColor};
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0) scale(1);
    transition: 250ms ease-out transform;
    width: 100%;

    ${({ monolith }) => {
        const HoverSensitiveParent = monolith ? Wrapper : Inner

        return css`
            ${HoverSensitiveParent}:hover &,
            ${HoverSensitiveParent}:focus & {
                transform: translateZ(0) scale(1.05);
            }

            ${HoverSensitiveParent}:active & {
                transform: translateZ(0) scale(0.95);
            }
        `
    }}
`

const PlayButton = ({ monolith, theme = {}, ...props }) => (
    <ThemeProvider theme={theme}>
        <Wrapper {...props}>
            <Inner monolith={monolith}>
                <Pad>
                    <Background monolith={monolith} />
                    <Glyph as={UnstyledGlyph} source={PLAY} />
                </Pad>
            </Inner>
        </Wrapper>
    </ThemeProvider>
)

export default PlayButton
