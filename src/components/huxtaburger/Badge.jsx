import styled from 'styled-components'
import { SM } from '$utils/css'

const Badge = styled.div`
    background: #ee4734;
    border-radius: 50%;
    font-family: 'Lab Grotesque';
    font-weight: bold;
    height: 4em;
    opacity: 1.0;
    padding-top: 1.1em;
    position: absolute;
    text-align: center;
    width: 4em;

    @media (min-width: ${SM}px) {
        display: none;
    }
`

export const BurgerBadge = styled(Badge)`
    right: -8%;
    top: -7%;
    transition: 300ms ease-in-out opacity;
`

export const StoreBadge = styled(Badge)`
    top: -2%;
    right: 11%;
`

export default Badge
