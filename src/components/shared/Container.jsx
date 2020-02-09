import styled from 'styled-components'
import { SM, MD, LG, XL } from '$utils/css'

const Container = styled.div`
    margin: 0 auto;
    padding: 0 32px;

    @media (min-width: ${SM}px) {
        max-width: 540px
    }

    @media (min-width: ${MD}px) {
        max-width: 720px;
    }

    @media (min-width: ${LG}px) {
        max-width: 865px;
    }

    @media (min-width: ${XL}px) {
        max-width: 900px;
    }
`

export default Container
