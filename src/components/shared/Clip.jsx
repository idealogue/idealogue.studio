import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;

    img {
        transform: translate(${({ dx, dy }) => `${-dx * 100}%, ${-dy * 100}%`});
    }
`

const UnstyledClip = ({
    width,
    height,
    // `rect`, `dx` and `dy` have to be estimated by eye, best in browser's inspector tool. It's
    // about what makes it look good. Values are between 0 & 1 which translates to percentage
    // of `width` and `height`.
    rect = [1, 1],
    dx = 0,
    dy = 0,
    children,
    ...props
}) => {
    const [w, h] = rect

    return (
        <Outer
            {...props}
            dx={dx}
            dy={dy}
            height={h * height}
            width={w * width}
        >
            {children}
        </Outer>
    )
}

const Clip = styled(UnstyledClip)`
    img {
        display: block;
        height: ${({ height }) => height}px;
        width: ${({ width }) => width}px;
    }
`

export default Clip
