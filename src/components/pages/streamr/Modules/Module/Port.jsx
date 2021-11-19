import styled from 'styled-components'
import { PLEX_MONO, MEDIUM } from '$utils/css'

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

export default styled.div`
    display: flex;
    font-size: 10px;
`
