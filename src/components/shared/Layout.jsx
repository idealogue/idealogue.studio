import 'reset-css'
import '../../styles/fonts.css'

import { MenuProvider } from '$hooks/useMenu'
import useScrollDirection from '$hooks/useScrollDirection'
import { Arrow, Provider as ArrowProvider } from '$shared/Cursor'
import Menu from '$shared/Menu'
import MenuToggle from '$shared/MenuToggle'
import * as React from 'react'
import { createGlobalStyle, css } from 'styled-components'

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

    ${({ nav }) =>
        !nav &&
        css`
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
