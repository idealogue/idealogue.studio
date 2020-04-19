import 'normalize.css/normalize.css'
import '../../styles/fonts.css'

import React from 'react'
import { createGlobalStyle, css } from 'styled-components'
import { Helmet } from 'react-helmet'
import { useProject } from '$shared/Project'
import Menu, { MenuProvider } from '$shared/Menu'
import useScrollDirection from '$hooks/useScrollDirection'
import MenuToggle from '$shared/MenuToggle'

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

    ${({ nav }) => !nav && css`
        body ${MenuToggle} {
            transform: translateY(-100%);
        }
    `}
`

const Layout = ({ children, theme }) => {
    const { name } = useProject() || {}

    const direction = useScrollDirection()

    return (
        <>
            <GlobalStyle
                backgroundColor={theme.backgroundColor}
                nav={direction !== 'down'}
            />
            {!!name ? (
                <Helmet title={`Idealogue – ${name}`} />
            ) : (
                <Helmet title={`Idealogue`} />
            )}
            <MenuProvider>
                {children}
                <MenuToggle />
                <Menu />
            </MenuProvider>
        </>
    )
}

export default Layout
