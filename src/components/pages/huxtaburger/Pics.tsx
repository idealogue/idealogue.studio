import { ALL as Image } from '$hux/Image'
import { Container } from '$shared/Container'
import { FluidImage } from '$shared/FluidImage'
import { MD } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

const SmallImage = styled.div<{ $src: string }>`
    background-image: url(${({ $src }) => $src});
    background-size: cover;
    background-position: center;
    float: left;
    height: 512px;
    width: 50%;
`

const SecondaryImages = styled.div`
    &::after {
        content: '';
        display: table;
        clear: both;
    }
`

export const Inner = styled.div`
    padding: 0 32px;

    @media (min-width: ${MD}px) {
        padding: 0 96px;
    }
`

export function Logo() {
    return (
        <Container>
            <Inner>
                <FluidImage src={Image.HUXTABURGER} alt="Huxtaburger" />
            </Inner>
        </Container>
    )
}

export function CollageA(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <SecondaryImages {...props}>
            <SmallImage $src={Image.COLLAGE_1} />
            <SmallImage $src={Image.COLLAGE_2} />
        </SecondaryImages>
    )
}

export function CollageB(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <SecondaryImages {...props}>
            <SmallImage $src={Image.COLLAGE_3} />
            <SmallImage $src={Image.COLLAGE_4} />
        </SecondaryImages>
    )
}

export function LargeSign({
    alt = '',
    ...props
}: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>) {
    return <LargeSignRoot {...props} src={Image.SIGN} alt={alt} />
}

const LargeSignRoot = styled.img`
    width: 100%;
`

export function Collage(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <CollageRoot {...props}>
            <img src={Image.COLLAGE_1} alt="" />
            <img src={Image.COLLAGE_2} alt="" />
            <img src={Image.COLLAGE_3} alt="" />
            <img src={Image.COLLAGE_4} alt="" />
        </CollageRoot>
    )
}

const CollageRoot = styled.div`
    img {
        display: block;
        width: 100%;
    }
`
