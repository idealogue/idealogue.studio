import { AutoPlayingVideo } from '$shared/AutoPlayingVideo'
import { PhoneFrame } from '$shared/PhoneFrame'
import { MD, SM } from '$utils/css'
import * as React from 'react'
import styled from 'styled-components'

export function NewWallet(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <NewWalletRoot {...props}>
            <AutoPlayingVideo loop playsInline muted>
                <source src="/videos/hive.mp4" type="video/mp4" />
                <source src="/videos/hive.webm" type="video/webm" />
                <source src="/videos/hive.mov" type="video/quicktime" />
            </AutoPlayingVideo>
        </NewWalletRoot>
    )
}

const NewWalletRoot = styled(PhoneFrame)`
    margin: 0 auto;
    width: 200px;

    @media (min-width: ${SM}px) {
        width: 240px;
    }

    @media (min-width: ${MD}px) {
        width: 300px;
    }
`
