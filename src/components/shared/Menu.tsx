import { LG, MD, SM } from '$utils/css'
import React, { HTMLAttributes, useEffect } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import { Front } from '~/components/shared/Front'
import { Link } from '~/components/shared/Link'
import { CloseButton as UnstyledCloseButton } from '~/components/shared/MenuToggle'
import { useMenu } from '~/hooks/useMenu'
import { ProjectManifest } from '~/types'
import { getProjectManifest, lineup, useProjectManifest } from '~/utils/project'

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

export const LinkList = styled.ul<{ $inline?: boolean }>`
    font-weight: 700;
    list-style: none;
    margin: 0;
    padding: 0;

    ${({ $inline = false }) =>
        $inline &&
        css`
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

type MenuProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>

export function Menu(props: MenuProps) {
    const { isOpen, close } = useMenu()

    let project: ProjectManifest | undefined = undefined

    try {
        project = useProjectManifest()
    } catch (_) {
        // We don't care.
    }

    useEffect(() => {
        const onClose = ({ key }) => {
            if (isOpen && key === 'Escape') {
                close()
            }
        }

        window.addEventListener('keydown', onClose)

        return () => {
            window.removeEventListener('keydown', onClose)
        }
    }, [isOpen, close])

    return (
        <Front>
            <ThemeProvider theme={DefaultTheme}>
                <MenuRoot {...props} $visible={isOpen}>
                    <CloseButton onClick={close} />
                    <Inner>
                        <Wrapper>
                            <LinkList>
                                {lineup.map((name) => (
                                    <li key={name}>
                                        <Link
                                            to={getProjectManifest(name).url}
                                            onClick={(e) => {
                                                if (project?.name === name) {
                                                    close()
                                                    e.preventDefault()
                                                }
                                            }}
                                        >
                                            {
                                                getProjectManifest(name)
                                                    .displayName
                                            }
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
                </MenuRoot>
            </ThemeProvider>
        </Front>
    )
}

const MenuRoot = styled.div<{ $visible: boolean }>`
    opacity: 0;
    pointer-events: none;
    transition: 0.35s;
    transition-delay: 0.35s, 0s;
    transition-property: visibility, opacity;
    visibility: hidden;
    background-color: #fcfcfc;
    color: #06042a;
    height: 100%;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;

    ${({ $visible = false }) =>
        $visible &&
        css`
            opacity: 1;
            pointer-events: all;
            transition-delay: 0s;
            transition-duration: 0.1s;
            visibility: visible;
        `}

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
