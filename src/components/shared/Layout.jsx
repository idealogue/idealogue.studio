import 'normalize.css/normalize.css'
import '../../styles/fonts.css'

import React from 'react'
import { createGlobalStyle, css } from 'styled-components'
import Menu from '$shared/Menu'
import { MenuProvider } from '$hooks/useMenu'
import useScrollDirection from '$hooks/useScrollDirection'
import MenuToggle from '$shared/MenuToggle'
import { Arrow, Provider as ArrowProvider } from '$shared/Cursor'
import Metatags from '$shared/Metatags'

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
    #___gatsby,
    #gatsby-focus-wrapper {
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
    const direction = useScrollDirection()

    return (
        <>
            <GlobalStyle
                backgroundColor={theme.backgroundColor}
                nav={direction !== 'down'}
            />
            <Metatags />
            <MenuProvider>
                <ArrowProvider>
                    {children}
                    <Arrow />
                </ArrowProvider>
                <Menu />
            </MenuProvider>
        </>
    )
}

export default Layout
