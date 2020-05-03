import 'normalize.css/normalize.css'
import '../../styles/fonts.css'

import React from 'react'
import { createGlobalStyle, css } from 'styled-components'
import { Helmet } from 'react-helmet'
import { useProject } from '$shared/Project'
import Menu from '$shared/Menu'
import { MenuProvider } from '$hooks/useMenu'
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
            transition-delay: 200ms;
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
                <Menu />
            </MenuProvider>
        </>
    )
}

export default Layout
