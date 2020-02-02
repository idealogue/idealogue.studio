import 'normalize.css/normalize.css'

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
