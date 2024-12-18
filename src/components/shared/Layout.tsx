import 'reset-css'
import '../../styles/fonts.css'

import { MenuProvider } from '$hooks/useMenu'
import useScrollDirection from '$hooks/useScrollDirection'
import { Menu } from '$shared/Menu'
import { MenuToggleRoot } from '$shared/MenuToggle'
import * as React from 'react'
import { createGlobalStyle, css } from 'styled-components'
import { Arrow, Provider as ArrowProvider } from '~/components/shared/Cursor'

const GlobalStyle = createGlobalStyle<{
    $backgroundColor?: string
    $nav?: boolean
}>`
    html,
    body {
        background-color: ${({ $backgroundColor }) => $backgroundColor};
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

    ${({ $nav = false }) =>
        !$nav &&
        css`
            body ${MenuToggleRoot} {
                transform: translateY(-100%);
                transition-delay: 200ms;
            }
        `}
`

export function Layout({ children, theme }: LayoutProps) {
    const direction = useScrollDirection()

    return (
        <>
            <GlobalStyle
                $backgroundColor={theme.backgroundColor}
                $nav={direction !== 'down'}
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

interface LayoutProps {
    children?: React.ReactNode
    theme: {
        backgroundColor?: string
    }
}
