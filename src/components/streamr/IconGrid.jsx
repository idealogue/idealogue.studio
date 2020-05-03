import React from 'react'
import styled from 'sc'
import Image from '$streamr/Image'
import CaptionedContainer from '$shared/CaptionedContainer'
import FluidImage from '$shared/FluidImage'

const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;

    & + & {
        margin-top: 192px;
    }
`

const Cell = styled.div`
    width: 264px;
`

const Inner = styled.div`
    left: -5%;
    position: relative;
    width: 110%;
`

const ImageWrapper = styled.div`
    height: 188px;
    left: -98px;
    position: relative;
    top: -104px;
    width: 460px;
`

const UnstyledIconGrid = (props) => (
    <CaptionedContainer
        {...props}
        caption="A range of custom icons used across website, apps and social media"
    >
        <div {...props}>
            <Inner>
                {[0, 5, 10].map((i) => (
                    <Row key={i}>
                        {Image.MACHINE_2X.slice(i, i + 5).map((src) => (
                            <Cell key={src}>
                                <ImageWrapper>
                                    <FluidImage src={src} alt="" />
                                </ImageWrapper>
                            </Cell>
                        ))}
                    </Row>
                ))}
            </Inner>
        </div>
    </CaptionedContainer>
)

const IconGrid = styled(UnstyledIconGrid)`
    margin: 0 auto;
    width: 1440px;
`

export default IconGrid
