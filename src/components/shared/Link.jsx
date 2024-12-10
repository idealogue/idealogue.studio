import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const UnstyledLink = ({ nodecor, ...props }) => <Link {...props} />

export default styled(UnstyledLink)`
    color: inherit;

    &,
    :active,
    :focus,
    :hover,
    :visited {
        text-decoration: none;
    }

    p &,
    p &:active,
    p &:focus,
    p &:hover,
    p &:visited {
        text-decoration: underline;
    }

    ${({ nodecor }) =>
        !nodecor &&
        css`
            position: relative;

            :after {
                background-color: ${({ theme }) => theme.color || '#000000'};
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

            :hover:after,
            :focus:after {
                left: 0;
                opacity: 1;
                width: 100%;
            }
        `}
`
