import * as React from 'react'
import styled from 'styled-components'

export function Bullet() {
    return <BulletRoot>&bullet;</BulletRoot>
}

const BulletRoot = styled.span`
    font-size: 0.5em;
    line-height: 1em;
    margin: 0 1.5em;
    vertical-align: middle;
`
