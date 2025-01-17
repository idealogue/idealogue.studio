import { CaptionedContainer } from '$shared/CaptionedContainer'
import React, { Fragment } from 'react'

interface AteneumProps {
    className?: string
}

export function Ateneum(props: AteneumProps) {
    return (
        <CaptionedContainer
            {...props}
            caption={
                <Fragment>
                    Click above to play a 360 tour of the Helsinki Ateneum. Read
                    more about it{' '}
                    <a
                        href="https://medium.com/updates-from-vizor/prototyping-a-360-museum-tour-with-react-vr-1c9b1d3d89bb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .
                </Fragment>
            }
        >
            <div
                css={`
                    position: relative;
                `}
            >
                <svg viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg" />
                <iframe
                    title="The Helsinki Ateneum"
                    src="https://vizor-proto-04.herokuapp.com/"
                    css={`
                        border: 0;
                        display: block;
                        height: 100%;
                        left: 0;
                        position: absolute;
                        top: 0;
                        width: 100%;
                    `}
                />
            </div>
        </CaptionedContainer>
    )
}
