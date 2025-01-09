import { SM } from '$utils/css'
import styled from 'styled-components'
import { Parent } from '~/components/pages/huxtaburger/BurgerComponent'

const Badge = styled.div`
    background: #ee4734;
    border-radius: 50%;
    font-family: 'Lab Grotesque';
    font-weight: bold;
    height: 4em;
    line-height: 4em;
    opacity: 1;
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
    transform: scale(1);
    transition: 120ms ease-in-out;
    transition-delay: 0.2s;
    transition-property: opacity, transform;

    ${Parent}.open & {
        @media (max-width: ${SM - 1}px) {
            opacity: 0;
            transform: scale(0.9);
            transition-delay: 0s;
        }
    }

    @media (min-width: ${SM}px) {
        opacity: 0;
        transform: scale(0.9);
        transition-delay: 0s;
    }
`

export const StoreBadge = styled(Badge)`
    top: -2%;
    right: 11%;
`
