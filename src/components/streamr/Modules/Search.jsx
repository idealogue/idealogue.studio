import React from 'react'
import styled from 'sc'
import Module, { Header as UnstyledHeader, Top, Bottom } from './Module'
import { MEDIUM } from '$utils/css'

const Cat = styled.div`
    color: #323232;
    font-size: 12px;
    font-weight: ${MEDIUM};
    letter-spacing: 1px;
    line-height: 32px;
    padding: 0 24px;
    text-transform: uppercase;
    white-space: nowrap;

    & + & {
        border-top: 1px solid #efefef;
    }
`

const Input = styled.div`
    border-bottom: 1px solid #efefef;
    color: #cdcdcd;
    font-size: 14px;
    padding: 0 24px;
    line-height: 48px;
    white-space: nowrap;
`

const Header = styled(UnstyledHeader)`
    background-color: #f8f8f8;
    color: #a3a3a3;

    > div {
        width: 10px;
    }

    svg {
        display: block;
    }
`

const Body = styled.div`
    padding-bottom: 12px;
    width: 100%;
`

const Search = ({ height, width, ...props }) => (
    <div {...props}>
        <Top>
            <Header>
                <div>
                    <svg viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M.756 1l4.245 4.245 4.243-4.242"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="currentColor" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                            <path d="M.757.757l8.486 8.486M9.243.757L.757 9.243" />
                        </g>
                    </svg>
                </div>
            </Header>
        </Top>
        <Bottom>
            <Body>
                <Input>Search or select a module</Input>
                <Cat>Time Series</Cat>
                <Cat>Text</Cat>
                <Cat>Time & Date</Cat>
                <Cat>Boolean</Cat>
                <Cat>Custom Modules</Cat>
                <Cat>Visualisations</Cat>
                <Cat>Utils</Cat>
                <Cat>Integrations</Cat>
                <Cat>Input</Cat>
                <Cat>Map</Cat>
                <Cat>List Streams</Cat>
            </Body>
        </Bottom>
    </div>
)

export default (props) => (
    <Module {...props} as={Search} />
)
