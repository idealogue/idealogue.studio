import React, { useEffect } from 'react'
import styled, { css, ThemeProvider, createGlobalStyle } from 'sc'
import Link from '$shared/Link'
import { lineup, projects } from '$shared/Project'
import { CloseButton as UnstyledCloseButton } from '$shared/MenuToggle'
import ScrollSuppressor from '$shared/ScrollSuppressor'
import useMenu from '$hooks/useMenu'

const Logo = styled.h1`
    font-family: 'Publico Text';
    font-size: inherit;
    font-weight: 600;
    line-height: 40px;
    margin: 0;
`

const Wrapper = styled.div`
    display: flex;
    font-size: 30px;
    margin: 0 auto;
    width: 672px;
`

const Column = styled.div`
    flex-basis: 100%;
    line-height: 40px;
    padding: ${({ right }) => right ? '0 0 0 64px' : '0 64px 0 0'};
    width: 272px;
`

export const LinkList = styled.ul`
    font-weight: 700;
    list-style: none;
    margin: 0;
    padding: 0;

    & + & {
        border-top: 1px solid #ffffff7f;
        margin-top: 48px;
        padding-top: 48px;
    }

    ${({ inline }) => !!inline && css`
        li {
            display: inline;
        }

        li::after {
            content: ' ';
        }
    `}
`

const Inner = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    min-height: 700px;
`

const DefaultTheme = {
    color: '#ffffff',
}

const CloseButton = styled(UnstyledCloseButton)`
    position: fixed;
    right: 0;
    top: 0;
`

const UnstyledMenu = (props) => {
    const { isOpen, close } = useMenu()

    useEffect(() => {
        const onClose = ({ keyCode }) => {
            if (isOpen && keyCode === 27) {
                close()
            }
        }

        window.addEventListener('keydown', onClose)

        return () => {
            window.removeEventListener('keydown', onClose)
        }
    }, [isOpen, close])

    return !!isOpen && (
        <ThemeProvider theme={DefaultTheme}>
            <div {...props}>
                <ScrollSuppressor />
                <CloseButton onClick={close} />
                <Inner>
                    <Wrapper>
                        <Column>
                            <Logo>
                                Idealogue
                            </Logo>
                        </Column>
                        <Column right>
                            <LinkList>
                                <li>
                                    <Link to="/">Top page</Link>
                                </li>
                            </LinkList>
                            <LinkList inline>
                                {lineup.map((id, index) => (
                                    <li key={id}>
                                        <Link to={projects[id].href}>
                                            {projects[id].name}
                                        </Link>
                                    </li>
                                ))}
                            </LinkList>
                            <LinkList>
                                <li>
                                    <Link to="/team/matt">Matt Innes</Link>
                                </li>
                                <li>
                                    <Link to="/team/saori">Saori Kajiwara</Link>
                                </li>
                            </LinkList>
                        </Column>
                    </Wrapper>
                </Inner>
            </div>
        </ThemeProvider>
    )
}

const Menu = styled(UnstyledMenu)`
    background-color: #06042a;
    color: white;
    height: 100%;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`

export default Menu
