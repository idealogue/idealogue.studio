import React, { Fragment } from 'react'
import styled from 'sc'
import CaptionedContainer from '$shared/CaptionedContainer'
import Placeholder from '$shared/Placeholder'

const Ateneum = (props) => (
    <Placeholder
        {...props}
        caption={(
            <Fragment>
                Click above to play a 360 tour of the Helsinki Atheneum. Read more about it
                {' '}
                <a href="#x">here</a>
                .
            </Fragment>
        )}
    >
        Ateneum
    </Placeholder>
)

export default Ateneum
