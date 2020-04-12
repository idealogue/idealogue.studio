import React from 'react'
import styled from 'sc'
import Module from './Module'
import Image from '$streamr/Image'
import { BOLD } from '$utils/css'

const Body = styled.div`
    background-color: #efefef;
    flex-grow: 1;
    min-height: 80px;
    overflow: hidden;
    position: relative;
`

const Zoom = styled.div`
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    font-weight: ${BOLD};
    left: 16px;
    line-height: 24px;
    position: absolute;
    text-align: center;
    top: 16px;
    width: 24px;
`

const ZoomIn = styled.div`
    border-bottom: 1px solid #dcdcdc;
`

const MapImage = styled.img`
    display: block;
    height: 463px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 575px;
`

const UnstyledMap = ({ title, ...props }) => (
    <Module
        {...props}
        title={title || 'Map'}
        ins={[
            ['ID'],
            ['Heading'],
            ['Latitude'],
            ['Longitude'],
        ]}
    >
        <Body>
            <MapImage src={Image.MAP} alt="Map" />
            <Zoom>
                <ZoomIn>+</ZoomIn>
                <div>-</div>
            </Zoom>
        </Body>
    </Module>
)

const Map = styled(UnstyledMap)`
    max-width: 575px;
`

export default Map
