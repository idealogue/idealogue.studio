import styled from 'sc'

export const Row = styled.div`
    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 96px;
    }
`

export const Cell = styled.div`
    width: 50%;
`

export const Header = styled.div`
    border-bottom: 2px solid white;
    font-size: 20px;
    line-height: 1em;
    margin-bottom: 2.5em;
    padding-bottom: 1em;
    width: 82%;
`

export const Fontface = styled.p`
    && {
        line-height: 1.35;
    }
`

export const Mark = styled.img`
    display: block;
`
