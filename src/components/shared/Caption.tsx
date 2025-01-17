import { font, LG, MD, SM } from '$utils/css'
import styled from 'styled-components'

export const Caption = styled.em`
    ${font('publico text')};

    color: var(--Caption_Color);
    display: block;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.5em;
    padding: 0 2em;
    text-align: center;

    a {
        color: inherit !important;
    }

    @media (min-width: ${SM}px) {
        font-size: 16px;
    }

    @media (min-width: ${MD}px) {
        font-size: 18px;
    }

    @media (min-width: ${LG}px) {
        font-size: 22px;
    }
`
