import { MEDIUM, PLEX_MONO } from '$utils/css'
import styled from 'styled-components'

export const Icon = styled.div`
    padding-top: 4px;
    width: 24px;
`

export const Name = styled.div`
    font-family: ${PLEX_MONO};
    font-weight: ${MEDIUM};
    line-height: 1rem;
    white-space: nowrap;
`

export const Port = styled.div`
    display: flex;
    font-size: 10px;
`