import React from 'react'
import styled from 'styled-components'
import { Allocation } from '~/components/pages/octant/UiCell'
import { TABLET } from '~/utils/css'

export function UiMobile() {
    return (
        <UiMobileRoot>
            <Allocation />
        </UiMobileRoot>
    )
}

const UiMobileRoot = styled.div`
    @media ${TABLET} {
        display: none;
    }
`
