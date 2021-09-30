import React from 'react'
import styled from 'styled-components'
import { BOLD, LAB, PUBLICO, REGULAR, LG } from '$utils/css'

const UnstyledPerson = ({ name, role, img, children, className }) => (
    <div className={className}>
        {img}
        <h2>
            {name}
        </h2>
        <h4>
            {role}
        </h4>
        <p>
            {children}
        </p>
    </div>
)

const Person = styled(UnstyledPerson)`
    max-width: 100%;
    width: 312px;

    img {
        display: block;
        margin-bottom: 28px;
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

export default Person

export const Collection = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 100%;
    padding: 0 32px;
    width: 376px;

    ${Person} + ${Person} {
        margin-top: 112px;
    }
    
    @media (min-width: ${LG}px) {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 744px;

        ${Person} + ${Person} {
            margin-top: 0;
        }
    }
`
