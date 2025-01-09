import Image from '$hux/Image'
import * as React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

const MilkshakesTheme = {
    width: 180,
    height: 197,
    rowHeight: 197,
}

const ChipsTheme = {
    width: 140,
    height: 155,
    rowHeight: 197,
}

const IcecreamTheme = {
    width: 140,
    height: 154,
    rowHeight: 197,
}

const Img = styled.img`
    display: block;
    margin: 0 auto;
    position: relative;
`

const Illustration = styled(Img)`
    z-index: 1;

    ${({ theme }) => css`
        height: ${theme.height}px;
        top: ${theme.rowHeight - theme.height}px;
        width: ${theme.width}px;
    `}
`

const Shadow = styled(Img)`
    height: auto;
    left: 0;
    opacity: 0.2;
    top: ${({ theme }) =>
        Math.floor(theme.rowHeight - theme.height - 0.99 * 34)}px;
    transform: translateX(15%);
    width: 90px;
`

const Cup = styled.div`
    height: 197px;
`

export const Milkshake = (props) => (
    <Cup {...props}>
        <ThemeProvider theme={MilkshakesTheme}>
            <Illustration src={Image.MILKSHAKES} alt="" />
            <Shadow src={Image.SHADOW_MILKSHAKES} alt="" />
        </ThemeProvider>
    </Cup>
)

export const Icecream = (props) => (
    <Cup {...props}>
        <ThemeProvider theme={IcecreamTheme}>
            <Illustration src={Image.ICE_CREAM} alt="" />
            <Shadow src={Image.SHADOW_ICE_CREAM} alt="" />
        </ThemeProvider>
    </Cup>
)

export const Chips = (props) => (
    <Cup {...props}>
        <ThemeProvider theme={ChipsTheme}>
            <Illustration src={Image.CHIPS} alt="" />
            <Shadow src={Image.SHADOW_CHIPS} alt="" />
        </ThemeProvider>
    </Cup>
)

export default Cup
