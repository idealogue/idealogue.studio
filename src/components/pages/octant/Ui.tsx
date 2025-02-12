import * as React from 'react'
import styled, { css } from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import UiAllocateDesktop from './assets/ui_allocate_desktop.jpg'
import UiAllocateDesktop2x from './assets/ui_allocate_desktop@2x.jpg'
import UiFundUsageDesktop from './assets/ui_fund_usage_desktop.jpg'
import UiFundUsageDesktop2x from './assets/ui_fund_usage_desktop@2x.jpg'
import UiPreciseSliderDesktop from './assets/ui_precise_slider_top_desktop.jpg'
import UiPreciseSliderDesktop2x from './assets/ui_precise_slider_top_desktop@2x.png'
import UiRewardsDesktop from './assets/ui_rewards_desktop.jpg'
import UiRewardsDesktop2x from './assets/ui_rewards_desktop@2x.jpg'

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
                <Cell>
                    <RewardsRoot>
                        <AutoPlayingVideo loop playsInline muted>
                            <source src="/videos/octant/ui_rewards_desktop.mp4" />
                        </AutoPlayingVideo>
                        <Image src={UiRewardsDesktop} srcSet={`${UiRewardsDesktop2x} 2x`} alt="" />
                    </RewardsRoot>
                </Cell>
                <Cell>
                    <svg
                        width="0"
                        height="0"
                        viewBox="0 0 1073 958"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <clipPath id="clip-rects" clipPathUnits="objectBoundingBox">
                                <rect
                                    x="0"
                                    y="0"
                                    width="1"
                                    height="0.1356993737"
                                    rx="0.01670146138"
                                    fill="red"
                                />
                                <rect
                                    x="0"
                                    y="0.165970772442589"
                                    width="1"
                                    height="0.385177453"
                                    rx="0.01670146138"
                                />
                                <rect
                                    x="0"
                                    y="0.5814196242"
                                    width="1"
                                    height="0.1951983299"
                                    rx="0.01670146138"
                                />
                                <rect
                                    x="0"
                                    y="0.8048016701"
                                    width="1"
                                    height="0.1951983299"
                                    rx="0.01670146138"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <AutoPlayingVideo
                        loop
                        playsInline
                        muted
                        css={css`
                            clip-path: url('#clip-rects');
                        `}
                    >
                        <source src="/videos/octant/ui_slider_desktop.mp4" />
                    </AutoPlayingVideo>
                </Cell>
            </BottomRow>
        </UiRoot>
    )
}

const RewardsRoot = styled.div`
    --Rewards_Width: 364px;
    --Rewards_VideoScale: var(--Rewards_Width) / 683;

    position: relative;
    width: var(--Rewards_Width);

    video {
        position: absolute;
        width: calc(587 * var(--Rewards_VideoScale));
        top: calc(318 * var(--Rewards_VideoScale));
        left: calc(48 * var(--Rewards_VideoScale));
    }
`

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
    user-select: none;

    svg,
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
