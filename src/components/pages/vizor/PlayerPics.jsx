import React, { Fragment, useEffect, useRef, forwardRef } from 'react'
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
import { TABLET, DESKTOP } from '$utils/css'

const UnstyledRow = forwardRef(({ className, items }, ref) => (
    <div className={className} ref={ref}>
        <div>
            {[0, 1, 2].map((i) => (
                <Fragment key={i}>
                    {items.map(([url, url2x], index) => (
                        <img src={url} srcSet={`${url2x} 2x`} alt="" key={index} />
                    ))}
                </Fragment>
            ))}
        </div>
    </div>
))

const Row = styled(UnstyledRow)`
    > div {
        display: flex;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        width: ${({ items }) => ((192 + 40) * items.length * 3) - 40}px;
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
            width: ${({ items }) => ((256 + 48) * items.length * 3) - 48}px;
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
            width: ${({ items }) => ((451 + 104) * items.length * 3) - 104}px;
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

const Row0 = [[player0, player02x], [player1, player12x], [player2, player22x]]

const Row1 = [[player3, player32x], [player4, player42x], [player5, player52x], [player6, player62x]]

const Row2 = [[player7, player72x], [player8, player82x], [player9, player92x]]

function UnstyledPlayerPics({ className }) {
    const ref = useRef(null)

    const row1Ref = useRef(null)

    const row2Ref = useRef(null)

    useEffect(() => {
        const { current: root } = ref

        if (typeof window === 'undefined' || !root) {
            return
        }

        function onScroll() {
            const { current: row1 } = row1Ref

            const { current: row2 } = row2Ref

            if (!row1 || !row2) {
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
        <div className={className} ref={ref}>
            <Row items={Row0} />
            <Row items={Row1} ref={row1Ref} />
            <Row items={Row2} ref={row2Ref} />
        </div>
    )
}

const PlayerPics = styled(UnstyledPlayerPics)`
    margin: 0 auto;
    max-width: 100%;
    width: 1440px;
`

export default PlayerPics
