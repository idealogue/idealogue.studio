import { LG, MD, SM, XL } from '$utils/css'
import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 32px;

    @media (min-width: ${SM}px) {
        max-width: 510px;
    }

    @media (min-width: ${MD}px) {
        max-width: 690px;
    }

    @media (min-width: ${LG}px) {
        max-width: 835px;
    }

    @media (min-width: ${XL}px) {
        max-width: 870px;
    }
`
