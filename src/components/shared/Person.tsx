import { BOLD } from '$utils/css'
import * as React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import Glyph, { ARROW_LEFT, ARROW_RIGHT } from '~/components/shared/Glyph'
import { Link } from '~/components/shared/Link'

const Person = styled.div`
    flex: 0 0 654px;
`

const Head = styled.div`
    border-bottom: 1px solid #878787;
    padding: 0 0 72px;
    margin: 0 0 72px;
`

const Body = styled.div``

const Footer = styled.div<{ $empty?: boolean }>`
    border: solid #878787;
    border-width: 1px 0;
    font-size: 30px;
    font-weight: ${BOLD};
    line-height: 1em;
    margin-top: 72px;
    padding: 20px 0;

    ${({ $empty = false }) =>
        $empty &&
        css`
            visibility: hidden;
        `}
`

const Name = styled.h1`
    font-size: 50px;
    font-weight: ${BOLD};
    line-height: 1em;
    margin: 0 0 8px;
`

const Role = styled.div`
    font-size: 20px;
    line-height: 1em;
`

const Desc = styled.p``

const theme = {
    color: 'currentColor',
}

export function OtherLink({ children, opposite, to }: OtherLinkProps) {
    return (
        <OtherLinkRoot>
            <ThemeProvider theme={theme}>
                {!!opposite && (
                    <div>
                        <Link noDecor to={to}>
                            <Glyph source={ARROW_LEFT} />
                        </Link>
                    </div>
                )}
                <div>
                    <Link to={to}>{children}</Link>
                </div>
                {!opposite && (
                    <div>
                        <Link noDecor to={to}>
                            <Glyph source={ARROW_RIGHT} />
                        </Link>
                    </div>
                )}
            </ThemeProvider>
        </OtherLinkRoot>
    )
}

interface OtherLinkProps {
    children?: React.ReactNode
    opposite?: boolean
    to: string
}

const OtherLinkRoot = styled.div`
    align-items: center;
    border: solid transparent;
    border-width: 1px 0;
    color: #ffffff;
    display: flex;
    font-size: 30px;
    font-weight: ${BOLD};
    line-height: 1em;
    padding: 20px 0;

    svg {
        display: block;
        height: 24px;
        width: 24px;
    }

    > div + div {
        margin-left: 16px;
    }
`

Object.assign(Person, {
    Body,
    Desc,
    Footer,
    Head,
    Name,
    Role,
    OtherLink,
})

export default Person
