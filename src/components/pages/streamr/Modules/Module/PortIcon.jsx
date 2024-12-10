import styled, { css } from 'styled-components'

const PortIcon = styled.div`
    border: 1px solid #adadad;
    border-radius: 50%;
    height: 6px;
    margin: 0 auto;
    width: 6px;

    ${({ square }) =>
        !!square &&
        css`
            border-radius: 0;
        `}

    ${({ highlight }) =>
        !!highlight &&
        css`
            border-color: #0324ff;
            position: relative;
        `}
`

export default PortIcon
