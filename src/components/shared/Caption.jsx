import styled from 'styled-components'
import { SM, MD, LG } from '$utils/css'

const Caption = styled.em`
    color: ${({ theme }) => theme.captionColor || '#ffffff7f'};
    display: block;
    font-family: 'Publico Text';
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.5em;
    padding: 0 1em;
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

export default Caption
