import React from 'react'
import styled from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import UiAllocateDesktop from './assets/ui_allocate_desktop.jpg'
import UiAllocateDesktop2x from './assets/ui_allocate_desktop@2x.jpg'
import UiFundUsageDesktop from './assets/ui_fund_usage_desktop.jpg'
import UiFundUsageDesktop2x from './assets/ui_fund_usage_desktop@2x.jpg'
import UiPreciseSliderDesktop from './assets/ui_precise_slider_top_desktop.jpg'
import UiPreciseSliderDesktop2x from './assets/ui_precise_slider_top_desktop@2x.png'
import UiRewardsDesktop from './assets/ui_rewards_desktop.jpg'
import UiRewardsDesktop2x from './assets/ui_rewards_desktop@2x.jpg'
import UiSliderMask from './assets/ui_slider_mask.png'
import UiSliderPoster from './assets/ui_slider_poster.jpg'

const Content = styled.div`
    user-select: none;
    margin: 0 auto;

    svg,
    img,
    video {
        display: block;
        width: 100%;
    }
`

const VideoContent = styled(Content)`
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

export function Cart() {
    return (
        <CartRoot>
            <AutoPlayingVideo loop playsInline muted>
                <source src="/videos/octant/ui_cart_desktop.mp4" />
            </AutoPlayingVideo>
        </CartRoot>
    )
}

const CartRoot = styled(Content)`
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

export function PreciseSlider() {
    return (
        <PreciseSliderRoot>
            <div>
                <Image
                    src={UiPreciseSliderDesktop}
                    srcSet={`${UiPreciseSliderDesktop2x} 2x`}
                    alt=""
                />
            </div>
            <div>
                <AutoPlayingVideo loop playsInline muted>
                    <source src="/videos/octant/ui_precise_slider_desktop.mp4" />
                </AutoPlayingVideo>
            </div>
        </PreciseSliderRoot>
    )
}

const PreciseSliderRoot = styled(Content)`
    display: grid;
    gap: 14px;

    video {
        border-radius: 16px;
    }
`

export function Allocation() {
    return (
        <AllocationRoot>
            <AutoPlayingVideo loop playsInline muted>
                <source src="/videos/octant/ui_allocation_desktop.mp4" />
            </AutoPlayingVideo>
            <Image src={UiAllocateDesktop} srcSet={`${UiAllocateDesktop2x} 2x`} alt="" />
        </AllocationRoot>
    )
}

const AllocationRoot = styled(VideoContent)`
    --Container_Width: 684;
    --Video_Width: 338;
    --Video_Height: 180;
    --Video_OffsetX: 424;
    --Video_OffsetY: 16;
`

export function FundsUsage() {
    return (
        <FundUsageRoot>
            <AutoPlayingVideo loop playsInline muted>
                <source src="/videos/octant/ui_fund_usage_desktop.mp4" />
            </AutoPlayingVideo>
            <Image src={UiFundUsageDesktop} srcSet={`${UiFundUsageDesktop2x} 2x`} alt="" />
        </FundUsageRoot>
    )
}

const FundUsageRoot = styled(VideoContent)`
    --Container_Width: 684;
    --Video_Width: 590;
    --Video_Height: 384;
    --Video_OffsetX: -41;
    --Video_OffsetY: 112;
`

export function Rewards() {
    return (
        <RewardsRoot>
            <AutoPlayingVideo loop playsInline muted>
                <source src="/videos/octant/ui_rewards_desktop.mp4" />
            </AutoPlayingVideo>
            <Image src={UiRewardsDesktop} srcSet={`${UiRewardsDesktop2x} 2x`} alt="" />
        </RewardsRoot>
    )
}

const RewardsRoot = styled(VideoContent)`
    --Container_Width: 683;
    --Video_Width: 586;
    --Video_Height: 290;
    --Video_OffsetX: 48;
    --Video_OffsetY: 318;
`

export function Slider() {
    return (
        <SliderRoot>
            <AutoPlayingVideo loop playsInline muted poster={UiSliderPoster}>
                <source src="/videos/octant/ui_slider_desktop.mp4" />
            </AutoPlayingVideo>
        </SliderRoot>
    )
}

const SliderRoot = styled(Content)`
    aspect-ratio: 1073 / 958;

    video {
        mask-image: url(${UiSliderMask});
        mask-size: contain;
        -webkit-mask-image: url(${UiSliderMask});
        -webkit-mask-size: contain;
    }
`
