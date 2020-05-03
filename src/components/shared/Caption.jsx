import styled from 'styled-components'

const Caption = styled.em`
    color: ${({ theme }) => theme.captionColor || '#ffffff7f'};
    display: block;
    font-family: 'Publico Text';
    font-size: 22px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.5em;
    padding: 0 1em;
    text-align: center;

    a {
        color: inherit !important;
    }
`

export default Caption
