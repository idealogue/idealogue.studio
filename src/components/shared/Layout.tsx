import 'reset-css'
import '../../styles/fonts.css'

import { MenuProvider } from '$hooks/useMenu'
import useScrollDirection from '$hooks/useScrollDirection'
import { Menu } from '$shared/Menu'
import { MenuToggleRoot } from '$shared/MenuToggle'
import * as React from 'react'
import { createGlobalStyle, css, RuleSet } from 'styled-components'
import { Arrow, Provider as ArrowProvider } from '~/components/shared/Cursor'
import { font } from '~/utils/css'

const GlobalStyle = createGlobalStyle<{
    $nav?: boolean
    $rootCss?: RuleSet
}>`
    :root {
        ${({ $rootCss }) => $rootCss};
    }

    html,
    body {
        background: var(--Layout_Background);
        color: var(--Layout_Color);
    }

    body {
        ${font('lab grotesque')}

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

export function Layout({ children, rootCss }: LayoutProps) {
    const direction = useScrollDirection()

    return (
        <>
            <GlobalStyle $nav={direction !== 'down'} $rootCss={rootCss} />
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
    rootCss?: RuleSet
    children?: React.ReactNode
}
