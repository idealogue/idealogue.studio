import React, { useEffect } from 'react'
import styled, { css, ThemeProvider, createGlobalStyle } from 'sc'
import Link from '$shared/Link'
import { lineup, projects } from '$shared/Project'
import { CloseButton as UnstyledCloseButton } from '$shared/MenuToggle'
import useMenu from '$hooks/useMenu'
import { SM, MD, LG } from '$utils/css'

const Wrapper = styled.div`
    display: flex;
    font-size: 30px;
    line-height: 56px;
    margin: 0 auto;
    max-width: 344px;
    padding: 0 32px;
    width: 100%;

    @media (min-width: ${MD}px) {
        font-size: 40px;
        line-height: 64px;
        max-width: none;
        padding: 0;
        width: 344px;
    }

    @media (min-width: ${LG}px) {
        font-size: 64px;
        line-height: 100px;
        width: 672px;
    }
`

export const LinkList = styled.ul`
    font-weight: 700;
    list-style: none;
    margin: 0;
    padding: 0;

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
    min-height: 540px;

    @media (min-width: ${SM}px) {
        min-height: 640px;
    }

    @media (min-width: ${MD}px) {
        min-height: 720px;
    }

    @media (min-width: ${LG}px) {
        min-height: 1000px;
    }
`

const DefaultTheme = {
    color: '#06042a',
}

const CloseButton = styled(UnstyledCloseButton)`
    position: fixed;
    right: 0;
    top: 0;
`

const ScrollSuppressor = createGlobalStyle`
    body {
        overflow: hidden;
    }
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
                        <LinkList>
                            {lineup.map((id, index) => (
                                <li key={id}>
                                    <Link to={projects[id].href}>
                                        {projects[id].name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/">
                                    &rarr; Back to the top page
                                </Link>
                            </li>
                        </LinkList>
                    </Wrapper>
                </Inner>
            </div>
        </ThemeProvider>
    )
}

const Menu = styled(UnstyledMenu)`
    background-color: #fcfcfc;
    color: #06042a;
    height: 100%;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;

    ${LinkList} li:last-child {
        font-size: 20px;
        font-weight: 500;
    }

    @media (min-width: ${LG}px) {
        ${LinkList} li:last-child {
            font-size: 30px;
        }
    }
`

export default Menu
