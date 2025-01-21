import * as React from 'react'
import styled, { css } from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import UiAllocateDesktop from './assets/ui_allocate_desktop.jpg'
import UiAllocateDesktop2x from './assets/ui_allocate_desktop@2x.jpg'
import UiFundUsageDesktop from './assets/ui_fund_usage_desktop.jpg'
import UiFundUsageDesktop2x from './assets/ui_fund_usage_desktop@2x.jpg'
import UiPreciseSliderDesktop from './assets/ui_precise_slider_top_desktop.jpg'
import UiPreciseSliderDesktop2x from './assets/ui_precise_slider_top_desktop@2x.png'

export function Ui() {
    return (
        <UiRoot>
            <TopRow>
                <Cell
                    css={css`
                        align-items: center;
                        justify-content: center;
                        display: flex;
                        background: #ffffff;
                        border-radius: 16px;
                        overflow: hidden;
                    `}
                >
                    <AutoPlayingVideo
                        loop
                        playsInline
                        muted
                        css={css`
                            width: 192px;
                        `}
                    >
                        <source src="/videos/octant/ui_cart_desktop.mp4" />
                    </AutoPlayingVideo>
                </Cell>
                <Cell>
                    <PreciseSliderRoot>
                        <PreciseSliderTop>
                            <Image
                                src={UiPreciseSliderDesktop}
                                srcSet={`${UiPreciseSliderDesktop2x} 2x`}
                                alt=""
                            />
                        </PreciseSliderTop>
                        <PreciseSliderBottom>
                            <AutoPlayingVideo loop playsInline muted>
                                <source src="/videos/octant/ui_precise_slider_desktop.mp4" />
                            </AutoPlayingVideo>
                        </PreciseSliderBottom>
                    </PreciseSliderRoot>
                </Cell>
                <Cell>
                    <AllocationRoot>
                        <AutoPlayingVideo loop playsInline muted>
                            <source src="/videos/octant/ui_allocation_desktop.mp4" />
                        </AutoPlayingVideo>
                        <Image
                            src={UiAllocateDesktop}
                            srcSet={`${UiAllocateDesktop2x} 2x`}
                            alt=""
                        />
                    </AllocationRoot>
                </Cell>
            </TopRow>
            <BottomRow>
                <Cell>
                    <FundUsageRoot>
                        <AutoPlayingVideo loop playsInline muted>
                            <source src="/videos/octant/ui_fund_usage_desktop.mp4" />
                        </AutoPlayingVideo>
                        <Image
                            src={UiFundUsageDesktop}
                            srcSet={`${UiFundUsageDesktop2x} 2x`}
                            alt=""
                        />
                    </FundUsageRoot>
                </Cell>
                <Cell />
                <Cell />
            </BottomRow>
        </UiRoot>
    )
}

const FundUsageRoot = styled.div`
    --FundUsage_Width: 367px;
    --FundUsage_VideoScale: var(--FundUsage_Width) / 684;

    position: relative;
    width: var(--FundUsage_Width);

    video {
        position: absolute;
        width: calc(590 * var(--FundUsage_VideoScale));
        top: calc(112 * var(--FundUsage_VideoScale));
        left: calc(-41 * var(--FundUsage_VideoScale));
    }
`

const AllocationRoot = styled.div`
    --Allocation_Width: 367px;
    --Allocation_VideoScale: var(--Allocation_Width) / 684;

    position: relative;
    width: var(--Allocation_Width);

    video {
        position: absolute;
        width: calc(338 * var(--Allocation_VideoScale));
        top: calc(16 * var(--Allocation_VideoScale));
        left: calc(424 * var(--Allocation_VideoScale));
    }
`

const Image = styled.img`
    border-radius: 16px;
`

const PreciseSliderSegment = styled.div``

const PreciseSliderTop = styled(PreciseSliderSegment)``

const PreciseSliderBottom = styled(PreciseSliderSegment)`
    video {
        border-radius: 16px;
    }
`

const PreciseSliderRoot = styled.div`
    display: grid;
    gap: 14px;
`

const Cell = styled.div`
    background-color: rgba(255, 0, 0, 0.2);
    user-select: none;

    img,
    video {
        display: block;
        max-width: 100%;
    }
`

const Row = styled.div`
    display: grid;
    gap: 40px;
`

const TopRow = styled(Row)`
    grid-template-columns: 436fr 321fr 367fr;

    ${Cell} {
        height: 300px;
    }
`

const BottomRow = styled(Row)`
    grid-template-columns: 363fr 363fr 392fr;

    ${Cell} {
        height: 350px;
    }
`

const UiRoot = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    width: 1204px;
    margin: 0 auto;
`
