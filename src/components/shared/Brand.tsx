import styled from 'styled-components'
import { MD, LG } from '$utils/css'

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
    font-size: 14px;
    line-height: 1em;
    margin-bottom: 2em;
    padding-bottom: 1em;
    width: 82%;

    @media (min-width: ${MD}px) {
        font-size: 16px;
        margin-bottom: 4em;
    }

    @media (min-width: ${LG}px) {
        font-size: 20px;
    }
`

export const Fontface = styled.p`
    && {
        line-height: 1.35;
    }
`

export const Mark = styled.img`
    display: block;
`
