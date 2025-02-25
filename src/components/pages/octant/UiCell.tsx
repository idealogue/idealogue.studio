import React from 'react'
import styled, { css } from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import UiAllocateDesktop from './assets/ui_allocate_desktop.jpg'
import UiAllocateDesktop2x from './assets/ui_allocate_desktop@2x.jpg'
import UiAllocationMask from './assets/ui_allocation_mask.png'
import UiAllocationPoster from './assets/ui_allocation_poster.jpg'
import UiFundUsageDesktop from './assets/ui_fund_usage_desktop.jpg'
import UiFundUsageDesktop2x from './assets/ui_fund_usage_desktop@2x.jpg'
import UiFundUsageMask from './assets/ui_fund_usage_mask.png'
import UiFundUsagePoster from './assets/ui_fund_usage_poster.jpg'
import UiPreciseSliderDesktop from './assets/ui_precise_slider_top_desktop.jpg'
import UiPreciseSliderDesktop2x from './assets/ui_precise_slider_top_desktop@2x.png'
import UiRewardsDesktop from './assets/ui_rewards_desktop.jpg'
import UiRewardsDesktop2x from './assets/ui_rewards_desktop@2x.jpg'
import UiSliderMask from './assets/ui_slider_mask.png'
import UiSliderPoster from './assets/ui_slider_poster.jpg'

interface Props {
    autoHeight?: boolean
    loop?: boolean
    playing?: boolean
    onTimeUpdate?(src: string, currentTime: number, totalTime: number): void
    onPlaybackEnded?(src: string, currentTime: number, totalTime: number): void
}

const Content = styled.div<{ $autoHeight?: boolean }>`
    user-select: none;
    margin: 0 auto;

    ${({ $autoHeight = false }) =>
        $autoHeight &&
        css`
            height: 100%;
        `}

    svg,
    img,
    video {
        display: block;
        width: 100%;
    }

    video {
        transform: translateZ(0);
        mask-size: contain;
        -webkit-mask-size: contain;
    }
`

const VideoContent = styled(Content)`
    aspect-ratio: var(--Container_Width) / var(--Container_Height);
    position: relative;

    video {
        position: absolute;
        width: calc(100% * var(--Video_Width) / var(--Container_Width));
        transform: translateX(calc(100% * var(--Video_OffsetX) / var(--Video_Width)))
            translateY(calc(100% * var(--Video_OffsetY) / var(--Video_Height)));
    }
`

const Image = styled.img`
    border-radius: 1rem;
`

export function Cart({
    autoHeight,
    loop = true,
    playing = true,
    onPlaybackEnded,
    onTimeUpdate,
}: Props) {
    return (
        <CartRoot $autoHeight={autoHeight}>
            <AutoPlayingVideo
                loop={loop}
                disabled={!playing}
                playsInline
                muted
                preload="auto"
                onPlaybackEnded={onPlaybackEnded}
                onTimeUpdate={onTimeUpdate}
            >
                <source src="/videos/octant/ui_cart_desktop.mp4" />
            </AutoPlayingVideo>
        </CartRoot>
    )
}

export const CartRoot = styled(Content)`
    width: 100%;
    aspect-ratio: 109 / 75;
    align-items: center;
    justify-content: center;
    display: flex;
    background: #ffffff;
    border-radius: 1rem;
    overflow: hidden;

    video {
        width: 12rem;
        max-width: 50%;
    }
`

export function PreciseSlider({
    autoHeight,
    loop = true,
    playing = true,
    onPlaybackEnded,
    onTimeUpdate,
}: Props) {
    return (
        <PreciseSliderRoot $autoHeight={autoHeight}>
            <div>
                <Image
                    src={UiPreciseSliderDesktop}
                    srcSet={`${UiPreciseSliderDesktop2x} 2x`}
                    alt=""
                />
            </div>
            <div>
                <AutoPlayingVideo
                    loop={loop}
                    disabled={!playing}
                    playsInline
                    muted
                    preload="auto"
                    onPlaybackEnded={onPlaybackEnded}
                    onTimeUpdate={onTimeUpdate}
                >
                    <source src="/videos/octant/ui_precise_slider_desktop.mp4" />
                </AutoPlayingVideo>
            </div>
        </PreciseSliderRoot>
    )
}

const PreciseSliderRoot = styled(Content)`
    aspect-ratio: 321 / 301;
    display: grid;
    gap: 14px;

    video {
        border-radius: 16px;
    }
`

export function Allocation({
    autoHeight,
    loop = true,
    playing = true,
    onPlaybackEnded,
    onTimeUpdate,
}: Props) {
    return (
        <AllocationRoot $autoHeight={autoHeight}>
            <AutoPlayingVideo
                loop={loop}
                disabled={!playing}
                playsInline
                muted
                preload="auto"
                onPlaybackEnded={onPlaybackEnded}
                onTimeUpdate={onTimeUpdate}
                poster={UiAllocationPoster}
            >
                <source src="/videos/octant/ui_allocation_desktop.mp4" />
            </AutoPlayingVideo>
            <Image src={UiAllocateDesktop} srcSet={`${UiAllocateDesktop2x} 2x`} alt="" />
        </AllocationRoot>
    )
}

const AllocationRoot = styled(VideoContent)`
    --Container_Width: 684;
    --Container_Height: 560;
    --Video_Width: 338;
    --Video_Height: 180;
    --Video_OffsetX: 424;
    --Video_OffsetY: 16;

    video {
        mask-image: url(${UiAllocationMask});
        -webkit-mask-image: url(${UiAllocationMask});
    }
`

export function FundsUsage({
    autoHeight,
    loop = true,
    playing = true,
    onPlaybackEnded,
    onTimeUpdate,
}: Props) {
    return (
        <FundUsageRoot $autoHeight={autoHeight}>
            <AutoPlayingVideo
                loop={loop}
                disabled={!playing}
                playsInline
                muted
                preload="auto"
                onPlaybackEnded={onPlaybackEnded}
                onTimeUpdate={onTimeUpdate}
                poster={UiFundUsagePoster}
            >
                <source src="/videos/octant/ui_fund_usage_desktop.mp4" />
            </AutoPlayingVideo>
            <Image src={UiFundUsageDesktop} srcSet={`${UiFundUsageDesktop2x} 2x`} alt="" />
        </FundUsageRoot>
    )
}

const FundUsageRoot = styled(VideoContent)`
    --Container_Width: 684;
    --Container_Height: 656;
    --Video_Width: 590;
    --Video_Height: 384;
    --Video_OffsetX: -41;
    --Video_OffsetY: 112;

    video {
        mask-image: url(${UiFundUsageMask});
        -webkit-mask-image: url(${UiFundUsageMask});
    }
`

export function Rewards({
    autoHeight,
    loop = true,
    playing = true,
    onPlaybackEnded,
    onTimeUpdate,
}: Props) {
    return (
        <RewardsRoot $autoHeight={autoHeight}>
            <AutoPlayingVideo
                loop={loop}
                disabled={!playing}
                playsInline
                muted
                preload="auto"
                onPlaybackEnded={onPlaybackEnded}
                onTimeUpdate={onTimeUpdate}
            >
                <source src="/videos/octant/ui_rewards_desktop.mp4" />
            </AutoPlayingVideo>
            <Image src={UiRewardsDesktop} srcSet={`${UiRewardsDesktop2x} 2x`} alt="" />
        </RewardsRoot>
    )
}

const RewardsRoot = styled(VideoContent)`
    --Container_Width: 683;
    --Container_Height: 656;
    --Video_Width: 586;
    --Video_Height: 290;
    --Video_OffsetX: 48;
    --Video_OffsetY: 318;
`

export function Slider({
    autoHeight,
    loop = true,
    playing = true,
    onPlaybackEnded,
    onTimeUpdate,
}: Props) {
    return (
        <SliderRoot $autoHeight={autoHeight}>
            <AutoPlayingVideo
                loop={loop}
                disabled={!playing}
                playsInline
                muted
                preload="auto"
                poster={UiSliderPoster}
                onPlaybackEnded={onPlaybackEnded}
                onTimeUpdate={onTimeUpdate}
            >
                <source src="/videos/octant/ui_slider_desktop.mp4" />
            </AutoPlayingVideo>
        </SliderRoot>
    )
}

const SliderRoot = styled(Content)`
    aspect-ratio: 1072 / 958;

    video {
        mask-image: url(${UiSliderMask});
        -webkit-mask-image: url(${UiSliderMask});
    }
`
