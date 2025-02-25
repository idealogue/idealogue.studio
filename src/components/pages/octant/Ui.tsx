import * as React from 'react'
import styled, { css } from 'styled-components'
import {
    Allocation,
    Cart,
    FundsUsage,
    PreciseSlider,
    Rewards,
    Slider,
} from '~/components/pages/octant/UiCell'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import { TABLET } from '~/utils/css'

export function Ui() {
    return (
        <UiRoot>
            <CaptionedContainer caption="UI elements for adding projects, allocating funds and a metrics chart">
                <Content>
                    <Row
                        css={css`
                            grid-template-columns: 436fr 321fr 367fr;
                        `}
                    >
                        <Cart />
                        <PreciseSlider />
                        <Allocation />
                    </Row>
                    <Row
                        css={css`
                            grid-template-columns: 363fr 363fr 392fr;
                        `}
                    >
                        <FundsUsage />
                        <Rewards />
                        <Slider />
                    </Row>
                </Content>
            </CaptionedContainer>
        </UiRoot>
    )
}

const Row = styled.div`
    display: grid;
    gap: 2.5rem;
    min-width: 0;
`

const Content = styled.div`
    display: grid;
    gap: 2.5rem;
    width: 100%;
`

const UiRoot = styled.div`
    display: none;
    width: 79.25rem;
    margin: 0 auto;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0 2rem;

    @media ${TABLET} {
        display: block;
    }
`
