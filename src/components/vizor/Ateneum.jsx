import React, { Fragment } from 'react'
import styled from 'sc'
import CaptionedContainer from '$shared/CaptionedContainer'

const Inner = styled.div`
    background-color: gray;
    padding: 64px;
`

const UnstyledAteneum = (props) => (
    <div {...props}>
        <CaptionedContainer caption={(
            <Fragment>
                Click above to play a 360 tour of the Helsinki Atheneum. Read more about it
                {' '}
                <a href="#">here</a>
                .
            </Fragment>
        )}>
            <Inner>
                Atheneum
            </Inner>
        </CaptionedContainer>
    </div>
)

const Ateneum = styled(UnstyledAteneum)`
`

export default Ateneum
