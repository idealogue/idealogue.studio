import styled from 'styled-components'
import { font, TABLET } from '~/utils/css'

export const Blockquote = styled.blockquote`
    margin: 4.5rem 0 0;
    padding-left: 1.25rem;
    border-left: 0.0625rem solid var(--Blockquote_BorderColor, #9ea39e);

    cite {
        ${font('lab grotesque')}

        display: block;
        font-size: 0.75rem;
        line-height: 1.5em;
        margin-top: 0.25rem;
    }

    @media ${TABLET} {
        border-width: 0 0 0 0.125rem;
        margin-top: 6rem;
        padding-left: 3.625rem;

        cite {
            font-size: 1.15rem;
            line-height: 1.2em;
            margin-top: 0.75rem;
        }
    }
`

export const BlockquoteBody = styled.div`
    ${font('publico banner')};

    color: #171717;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    font-style: italic;
    transform: translateY(-5%);

    @media ${TABLET} {
        font-size: 1.75rem;
        line-height: 2.25rem;
    }
`
