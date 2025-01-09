import { DESKTOP, TABLET } from '$utils/css'
import React, {
    Fragment,
    HTMLAttributes,
    MutableRefObject,
    useEffect,
    useRef,
} from 'react'
import styled from 'styled-components'
import player0 from './Image/player0.png'
import player02x from './Image/player0@2x.png'
import player1 from './Image/player1.png'
import player12x from './Image/player1@2x.png'
import player2 from './Image/player2.png'
import player22x from './Image/player2@2x.png'
import player3 from './Image/player3.png'
import player32x from './Image/player3@2x.png'
import player4 from './Image/player4.png'
import player42x from './Image/player4@2x.png'
import player5 from './Image/player5.png'
import player52x from './Image/player5@2x.png'
import player6 from './Image/player6.png'
import player62x from './Image/player6@2x.png'
import player7 from './Image/player7.png'
import player72x from './Image/player7@2x.png'
import player8 from './Image/player8.png'
import player82x from './Image/player8@2x.png'
import player9 from './Image/player9.png'
import player92x from './Image/player9@2x.png'

type RowArray = [src: string, src2x: string][]

interface RowProps extends HTMLAttributes<HTMLDivElement> {
    innerRef?: MutableRefObject<HTMLDivElement | null>
    items: RowArray
}

function Row({ innerRef, items, ...props }: RowProps) {
    return (
        <RowRoot {...props} ref={innerRef} $itemCount={items.length}>
            <div>
                {[0, 1, 2].map((i) => (
                    <Fragment key={i}>
                        {items.map(([src, src2x], index) => (
                            <img
                                src={src}
                                srcSet={`${src2x} 2x`}
                                alt=""
                                key={index}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>
        </RowRoot>
    )
}

const RowRoot = styled.div<{ $itemCount: number }>`
    > div {
        display: flex;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        width: ${({ $itemCount }) => (192 + 40) * $itemCount * 3 - 40}px;
    }

    & + & {
        margin-top: 40px;
    }

    img + img {
        margin-left: 40px;
    }

    img {
        display: block;
        width: 192px;
    }

    @media ${TABLET} {
        > div {
            width: ${({ $itemCount }) => (256 + 48) * $itemCount * 3 - 48}px;
        }

        & + & {
            margin-top: 48px;
        }

        img + img {
            margin-left: 48px;
        }

        img {
            width: 256px;
        }
    }

    @media ${DESKTOP} {
        > div {
            width: ${({ $itemCount }) => (451 + 104) * $itemCount * 3 - 104}px;
        }

        & + & {
            margin-top: 104px;
        }

        img + img {
            margin-left: 104px;
        }

        img {
            width: 451px;
        }
    }
`

const Row0: RowArray = [
    [player0, player02x],
    [player1, player12x],
    [player2, player22x],
]

const Row1: RowArray = [
    [player3, player32x],
    [player4, player42x],
    [player5, player52x],
    [player6, player62x],
]

const Row2: RowArray = [
    [player7, player72x],
    [player8, player82x],
    [player9, player92x],
]

export function PlayerPics() {
    const ref = useRef<HTMLDivElement>(null)

    const row1Ref = useRef<HTMLDivElement>(null)

    const row2Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window === 'undefined' || !ref.current) {
            return
        }

        function onScroll() {
            const { current: root } = ref

            const { current: row1 } = row1Ref

            const { current: row2 } = row2Ref

            if (!root || !row1 || !row2) {
                return
            }

            const wh = window.innerHeight

            const { top: t, height: h } = root.getBoundingClientRect()

            const ratio = (wh - t) / (wh + h)

            if (ratio > 1 || ratio < 0) {
                return
            }

            // Move row1 and row2 in oposite direction to make them more alive. row0 stays still.

            row1.style.transform = `translateX(${-32 * ratio}px)`

            row2.style.transform = `translateX(${32 * ratio}px)`
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <PlayerPicsRoot ref={ref}>
            <Row items={Row0} />
            <Row items={Row1} innerRef={row1Ref} />
            <Row items={Row2} innerRef={row2Ref} />
        </PlayerPicsRoot>
    )
}

const PlayerPicsRoot = styled.div`
    margin: 0 auto;
    max-width: 100%;
    width: 1440px;
`
