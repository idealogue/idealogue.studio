import React, { Fragment } from 'react'
import CaptionedContainer from '$shared/CaptionedContainer'
import styled from 'sc'

const Ateneum = (props) => (
    <CaptionedContainer
        {...props}
        caption={(
            <Fragment>
                Click above to play a 360 tour of the Helsinki Ateneum. Read more about it
                {' '}
                <a href="https://ateneum.fi/?lang=en" target="_blank" rel="noopener noreferrer">here</a>
                .
            </Fragment>
        )}
    >
        <div
            css={`
                position: relative;
            `}
        >
            <svg viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg" />
            <iframe
                src="http://vizor-proto-04.herokuapp.com/"
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

export default Ateneum
