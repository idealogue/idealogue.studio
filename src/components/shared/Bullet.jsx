import React from 'react'
import styled from 'styled-components'
import DangerousHtml from '$shared/DangerousHtml'

const UnstyledBullet = ({ className }) => (
    <DangerousHtml tag="span" className={className}>
        &bullet;
    </DangerousHtml>
)

const Bullet = styled(UnstyledBullet)`
    font-size: 0.5em;
    line-height: 1em;
    margin: 0 1.5em;
    vertical-align: middle;
`

export default Bullet
