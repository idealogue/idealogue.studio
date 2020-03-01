import 'normalize.css/normalize.css'
import '../../styles/fonts.css'

import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { useProject } from '$shared/Project'

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

const Layout = ({ children, theme }) => {
    const { name } = useProject() || {}

    return (
        <>
            <GlobalStyle
                backgroundColor={theme.backgroundColor}
            />
            {!!name ? (
                <Helmet title={`Idealogue – ${name}`} />
            ) : (
                <Helmet title={`Idealogue`} />
            )}
            {children}
        </>
    )
}

export default Layout
