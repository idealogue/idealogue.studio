import 'normalize.css/normalize.css'
import '../../styles/fonts.css'

import React, { useCallback, useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { useProject } from '$shared/Project'
import Menu from '$shared/Menu'
import ScrollDirectionProvider from '$shared/ScrollDirectionProvider'

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

    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = useCallback(() => {
        setMenuOpen(false)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [name])

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
            <ScrollDirectionProvider>
                {children}
            </ScrollDirectionProvider>
            {!!menuOpen && (
                <Menu onClose={closeMenu} />
            )}
        </>
    )
}

export default Layout
