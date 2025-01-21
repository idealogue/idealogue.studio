import styled from 'styled-components'
import { font } from '~/utils/css'

export const Blockquote = styled.blockquote`
    margin: 6rem 0 0;
    padding-left: 58px;
    border-left: 2px solid var(--Blockquote_BorderColor, #9ea39e);

    cite {
        ${font('lab grotesque')}

        display: block;
        font-size: 20px;
        line-height: 1.2;
        margin-top: 12px;
    }
`

export const BlockquoteBody = styled.div`
    ${font('publico banner')};

    color: #171717;
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
    font-style: italic;
    transform: translateY(-10%);
`
