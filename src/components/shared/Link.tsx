import styled, { css } from 'styled-components'

export const Link = styled.a<{ $noDecor?: boolean }>`
    color: inherit;

    &,
    &:active,
    &:focus,
    &:hover,
    &:visited {
        text-decoration: none;
    }

    p &,
    p &:active,
    p &:focus,
    p &:hover,
    p &:visited {
        text-decoration: underline;
    }

    ${({ $noDecor = false }) =>
        !$noDecor &&
        css`
            position: relative;

            &::after {
                background-color: currentColor;
                bottom: 0;
                content: '';
                display: block;
                height: 1px;
                left: 40%;
                opacity: 0;
                position: absolute;
                transition: 200ms ease-in-out;
                transition-property: width opacity left;
                width: 20%;
            }

            &:hover::after,
            &:focus::after {
                left: 0;
                opacity: 1;
                width: 100%;
            }
        `}
`
