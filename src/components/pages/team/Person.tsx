import { BOLD, LAB, LG, PUBLICO, REGULAR } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

interface PersonProps {
    name: string
    role: string
    img: React.ReactNode
    children: React.ReactNode
}

export function Person({ name, role, img, children }: PersonProps) {
    return (
        <PersonRoot>
            {img}
            <h2>{name}</h2>
            <h4>{role}</h4>
            <p>{children}</p>
        </PersonRoot>
    )
}

const PersonRoot = styled.div`
    max-width: 100%;
    width: 312px;

    img {
        aspect-ratio: 13 / 8;
        background: #f0f0f0;
        display: block;
        margin-bottom: 28px;
        width: 100%;
    }

    h2 {
        font-family: ${LAB};
        font-size: 18px;
        font-weight: ${BOLD};
        line-height: normal;
        margin: 0;
    }

    h4 {
        font-family: ${LAB};
        font-size: 12px;
        font-weight: ${REGULAR};
        line-height: normal;
        margin: 0.5em 0 26px;
    }

    p {
        font-family: ${PUBLICO};
        font-size: 16px;
        line-height: 28px;
        margin: 0;
    }
`

export const Collection = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 100%;
    padding: 0 32px;
    width: 376px;

    ${PersonRoot} + ${PersonRoot} {
        margin-top: 112px;
    }

    @media (min-width: ${LG}px) {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 744px;

        ${PersonRoot} + ${PersonRoot} {
            margin-top: 0;
        }
    }
`
