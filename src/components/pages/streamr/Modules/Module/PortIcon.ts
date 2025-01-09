import styled, { css } from 'styled-components'

export const PortIcon = styled.div<{ $square?: boolean; $highlight?: boolean }>`
    border: 1px solid #adadad;
    border-radius: 50%;
    height: 6px;
    margin: 0 auto;
    width: 6px;

    ${({ $square = false }) =>
        $square &&
        css`
            border-radius: 0;
        `}

    ${({ $highlight = false }) =>
        $highlight &&
        css`
            border-color: #0324ff;
            position: relative;
        `}
`
