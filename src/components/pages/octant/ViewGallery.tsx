import * as React from 'react'
import styled, { css } from 'styled-components'
import { AutoPlayingVideo } from '~/components/shared/AutoPlayingVideo'
import { CaptionedContainer } from '~/components/shared/CaptionedContainer'
import { useArrowCursor } from '~/components/shared/Cursor'
import { TABLET } from '~/utils/css'
import HomepagePoster from './assets/view_homepage_desktop_poster.jpg'
import MetricsPoster from './assets/view_metrics_desktop_poster.jpg'
import ProjectsPoster from './assets/view_projects_desktop_poster.jpg'

export function ViewGallery() {
    const [dx, setDx] = React.useState(1)

    const { setDirection } = useArrowCursor()

    return (
        <ViewGalleryRoot>
            <CaptionedContainer caption="Main views of Octant.app">
                <Content
                    style={{
                        '--dx': `${dx}`,
                    }}
                >
                    <Slider>
                        <Slide
                            $active={dx === 0}
                            onClick={() => {
                                setDx((c) => (c > 0 ? c - 1 : c < 0 ? c + 1 : c))
                            }}
                            onMouseEnter={() => {
                                setDirection(dx > 0 ? 'left' : dx < 0 ? 'right' : undefined)
                            }}
                            onMouseLeave={() => {
                                setDirection(undefined)
                            }}
                        >
                            <Video
                                loop
                                playsInline
                                muted
                                disabled={dx !== 0}
                                poster={MetricsPoster}
                            >
                                <source src="/videos/octant/view_metrics_desktop.mp4" />
                            </Video>
                        </Slide>
                        <Slide
                            $active={dx === 1}
                            onClick={() => {
                                setDx((c) => (c > 1 ? c - 1 : c < 1 ? c + 1 : c))
                            }}
                            onMouseEnter={() => {
                                setDirection(dx > 1 ? 'left' : dx < 1 ? 'right' : undefined)
                            }}
                            onMouseLeave={() => {
                                setDirection(undefined)
                            }}
                        >
                            <Video
                                loop
                                playsInline
                                muted
                                disabled={dx !== 1}
                                poster={HomepagePoster}
                            >
                                <source src="/videos/octant/view_homepage_desktop.mp4" />
                            </Video>
                        </Slide>
                        <Slide
                            $active={dx === 2}
                            onClick={() => {
                                setDx((c) => (c > 2 ? c - 1 : c < 2 ? c + 1 : c))
                            }}
                            onMouseEnter={() => {
                                setDirection(dx > 2 ? 'left' : dx < 2 ? 'right' : undefined)
                            }}
                            onMouseLeave={() => {
                                setDirection(undefined)
                            }}
                        >
                            <Video
                                loop
                                playsInline
                                muted
                                disabled={dx !== 2}
                                poster={ProjectsPoster}
                            >
                                <source src="/videos/octant/view_projects_desktop.mp4" />
                            </Video>
                        </Slide>
                    </Slider>
                </Content>
            </CaptionedContainer>
        </ViewGalleryRoot>
    )
}

const Video = styled(AutoPlayingVideo)`
    display: block;
    border-radius: 16px;
    width: 100%;
`

const Slide = styled.button<{ $active?: boolean }>`
    appearance: none;
    background: none;
    border: 0;
    padding: 0;
    display: block;
    transition: 350ms ease-in-out opacity;
    width: calc(calc(100% - 2 * var(--gap)) / 3);
    cursor: inherit;

    ${({ $active = false }) =>
        !$active &&
        css`
            opacity: 0.2;
        `}
`

const Slider = styled.div`
    --gap: 64px;

    display: flex;
    align-items: center;
    gap: var(--gap);
    width: calc(100% * 3 + 2 * var(--gap));
    transform: translateX(calc(var(--dx) * (calc(100% - 2 * var(--gap)) / -3 - var(--gap))));
    transition: 350ms ease-in-out;
    transition-property: gap, transform;
`

const Content = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 128px;
    width: 1504px;
    max-width: 100%;
`

const ViewGalleryRoot = styled.div`
    display: none;

    @media ${TABLET} {
        display: block;
    }
`
