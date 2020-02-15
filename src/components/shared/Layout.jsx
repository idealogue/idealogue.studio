import 'normalize.css/normalize.css'
import '../../styles/fonts.css'

import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        background-color: ${({ backgroundColor }) => backgroundColor};
    }

    body {
        font-family: 'Lab Grotesque';
        font-size: 16px;
    }

    html,
    body,
    body > div,
    body > div > div {
        height: 100%;
    }
`

const Layout = ({ children, theme }) => (
    <>
        <GlobalStyle
            backgroundColor={theme.backgroundColor}
        />
        {children}
    </>
)

export default Layout
