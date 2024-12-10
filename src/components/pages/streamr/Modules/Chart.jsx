import React from 'react'
import styled from 'styled-components'
import Module, { Body as UnstyledBody } from './Module'
import { MEDIUM } from '$utils/css'

const Body = styled(UnstyledBody)`
    color: #adadad;
    font-size: 10px;

    svg {
        display: block;
        overflow: visible;
    }
`

const ChartOuter = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    min-height: 50px;
    padding: 5px 48px;

    svg {
        height: 100%;
    }
`

const ChartInner = styled.div`
    flex-grow: 1;
    position: relative;
`

const ChartLine = styled.svg`
    color: #ff5c00;
    left: 0;
    position: absolute;
    width: 100%;
    top: 0;
`

const Tooltips = styled.div`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

const TooltipsInner = styled.div``

const Tooltip = styled.div`
    background-color: white;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    color: #323232;
    left: 68%;
    line-height: 16px;
    padding: 8px 12px;
    padding-right: 16px;
    position: absolute;
    top: 43%;
    transform: translate(-50%, 16px);
    white-space: nowrap;

    strong {
        font-weight: ${MEDIUM};
    }

    ::before {
        background-color: #ff5c00;
        border: 4px solid white;
        border-radius: 50%;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
        content: '';
        height: 8px;
        left: 50%;
        position: absolute;
        top: -24px;
        width: 8px;
        transform: translateX(-8px);
    }
`

const Footer = styled.div`
    flex-grow: 0;
`

const Inner = styled.div`
    padding: 0 48px;
`

const XAxis = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: 40px;
`

const Navigator = styled.div`
    border: solid #efefef;
    border-width: 1px 0;
    height: 40px;
    position: relative;

    svg {
        display: block;
        height: 24px;
        position: absolute;
        top: 8px;
        width: 100%;
    }
`

const Track = styled.div`
    color: #ff5c00;
    opacity: 0.3;
`

const HandleWrapper = styled.div`
    height: 40px;
    left: 50%;
    position: absolute;
    top: 0;
    width: 12.5%;
`

const Ranger = styled.div`
    background-color: #adadad;
    height: 40px;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: 1;

    ::before {
        background-color: #adadad;
        border-radius: 2px;
        content: '';
        height: 16px;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
    }
`

const RangeStart = styled(Ranger)`
    left: 0;
`

const RangeEnd = styled(Ranger)`
    right: 0;
`

const RangeSelector = styled.div`
    align-items: center;
    color: #323232;
    display: flex;
    flex-grow: 0;
    justify-content: flex-end;
    padding: 0 24px 24px 0;

    svg {
        display: block;
        margin-left: 8px;
        width: 6px;
    }
`

const Handle = styled.div`
    background-color: #e4e4e4;
    color: #ff5c00;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;

    svg {
        left: -400%;
        width: 800%;
    }
`

const Stops = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    text-align: center;

    > div {
        box-sizing: border-box;
        height: 40px;
        line-height: 24px;
        padding: 16px 0 0;
        position: relative;
        width: 25%;
    }

    > div::before {
        background-color: #efefef;
        content: '';
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        width: 1px;
    }
`

const Chart = ({ title, ...props }) => (
    <Module {...props} title={title || 'Chart'} ins={[['in1']]}>
        <Body>
            <RangeSelector>
                <span>15 minutes</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 6">
                    <path
                        d="M9.488 1.243L5.243 5.488 1 1.245"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </RangeSelector>
            <ChartOuter>
                <ChartInner>
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#EFEFEF">
                            <rect x="0" y="0" width="100%" height="1" />
                            <rect x="0" y="25%" width="100%" height="1" />
                            <rect x="0" y="50%" width="100%" height="1" />
                            <rect x="0" y="75%" width="100%" height="1" />
                            <rect x="0" y="100%" width="100%" height="1" />
                            <rect x="68%" y="0" width="1" height="100%" />
                        </g>
                        <g transform="translate(0 -5)" fill="white">
                            <rect x="100%" y="0" width="48" height="10" />
                            <rect x="100%" y="25%" width="48" height="10" />
                            <rect x="100%" y="50%" width="48" height="10" />
                            <rect x="100%" y="75%" width="48" height="10" />
                            <rect x="100%" y="100%" width="48" height="10" />
                        </g>
                        <g
                            fill="#ADADAD"
                            fontSize="10"
                            transform="translate(8 4)"
                        >
                            <text x="100%" y="0">
                                15k
                            </text>
                            <text x="100%" y="25%">
                                10k
                            </text>
                            <text x="100%" y="50%">
                                5k
                            </text>
                            <text x="100%" y="75%">
                                0
                            </text>
                            <text x="100%" y="100%">
                                -5k
                            </text>
                        </g>
                    </svg>
                    <ChartLine
                        viewBox="0 0 457 172"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            // eslint-disable-next-line max-len
                            d="M2 149.086L16.32 138l19 8 36-24 16 16 16 24 7-8h25l17-8 15 16 8 8 16-16 24-48 8 16 16 24h15l18-8 9 8 15-32 17-48 14-64 8 16h9l15 40 8-16 9 16 7 40h17l15-24 16-16 8 8 8 8h8"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                        />
                    </ChartLine>
                    <Tooltips>
                        <TooltipsInner>
                            <Tooltip>
                                Wednesday, Oct 3, 06:50:20
                                <br />
                                <strong>RateLimit.out </strong>
                                6,088.73
                            </Tooltip>
                        </TooltipsInner>
                    </Tooltips>
                </ChartInner>
            </ChartOuter>
            <Footer>
                <Inner>
                    <XAxis>
                        <span>06:46</span>
                        <span>06:48</span>
                        <span>06:50</span>
                        <span>06:52</span>
                        <span>06:54</span>
                        <span>06:56</span>
                        <span>06:58</span>
                        <span>07:00</span>
                    </XAxis>
                </Inner>
                <Navigator>
                    <Track>
                        <svg
                            viewBox="0 0 561 22"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path
                                // eslint-disable-next-line max-len
                                d="M0 14.5L10 10l21.553-4L61 14.5 77 10l3-4 5 4 6 4.5 7-4.25 8-.25 2-4 8.5 1.5L125 6l14.5 4L152 7l16 6.5 16 7.5 5.5-.5L192 18h8l8-8 16 4 11.5 1 10-5 10.5 3.5 10.5.5 5.5-4 12-4 7 1.5h5l8-5.5 6.5 5 9.5 6.5 8 4.5 2.82-1.234.18-.266 8-4.5 5 3.5L351 0l2.322 5.359c.561 1.295.73.607 1.178 1.641 1.776 4.098 3 8 3 8l8 .5 4-5.5 9.5 4.5L396 6l6.77-.98L411.5 1l10 2.5 7 3 7.5 5 7-2.5 5.5 5.5L459 20l5.5-3 16 3.5 8-3.5 11 3 9-3 12-8 5-3.5 7 3.5 4-3 8 3h8l8 8"
                                fill="none"
                                stroke="currentColor"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </Track>
                    <HandleWrapper>
                        <RangeStart />
                        <RangeEnd />
                        <Handle>
                            <svg
                                viewBox="0 0 561 22"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    // eslint-disable-next-line max-len
                                    d="M0 14.5L10 10l21.553-4L61 14.5 77 10l3-4 5 4 6 4.5 7-4.25 8-.25 2-4 8.5 1.5L125 6l14.5 4L152 7l16 6.5 16 7.5 5.5-.5L192 18h8l8-8 16 4 11.5 1 10-5 10.5 3.5 10.5.5 5.5-4 12-4 7 1.5h5l8-5.5 6.5 5 9.5 6.5 8 4.5 2.82-1.234.18-.266 8-4.5 5 3.5L351 0l2.322 5.359c.561 1.295.73.607 1.178 1.641 1.776 4.098 3 8 3 8l8 .5 4-5.5 9.5 4.5L396 6l6.77-.98L411.5 1l10 2.5 7 3 7.5 5 7-2.5 5.5 5.5L459 20l5.5-3 16 3.5 8-3.5 11 3 9-3 12-8 5-3.5 7 3.5 4-3 8 3h8l8 8"
                                    fill="none"
                                    stroke="currentColor"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </Handle>
                    </HandleWrapper>
                    <Stops>
                        <div>06:00</div>
                        <div>06:30</div>
                        <div>07:00</div>
                        <div>07:30</div>
                    </Stops>
                </Navigator>
            </Footer>
        </Body>
    </Module>
)

export default Chart
