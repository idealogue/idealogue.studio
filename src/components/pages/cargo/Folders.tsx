import React from 'react'
import styled from 'styled-components'
import FoldersImg from './assets/folders.png'
import FoldersImg2x from './assets/folders@2x.png'

export function Folders() {
    return (
        <FoldersRoot>
            <img src={FoldersImg} srcSet={`${FoldersImg2x} 2x`} alt="Folders" />
        </FoldersRoot>
    )
}

const FoldersRoot = styled.div`
    margin: 0 auto;
    max-width: 100%;
    width: 58rem;
    padding: 0 2rem;
    box-sizing: border-box;

    img {
        max-width: 100%;
    }

    @media (min-width: 62rem) {
        padding: 0 4rem;
        width: 80.5rem;
    }
`
