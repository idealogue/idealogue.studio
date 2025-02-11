import * as React from 'react'
import styled from 'styled-components'
import ModulesImg from './assets/modules_desktop.png'
import ModulesImg2x from './assets/modules_desktop@2x.png'

export function Modules() {
    return (
        <ModulesRoot>
            <img src={ModulesImg} srcSet={`${ModulesImg2x} 2x`} alt="Cargo modules" />
        </ModulesRoot>
    )
}

const ModulesRoot = styled.div`
    margin: 0;
    height: 92.75rem;

    img {
        left: 50%;
        position: absolute;
        top: 0;
        transform: translateX(-50%) translateY(2.5rem);
    }
`
