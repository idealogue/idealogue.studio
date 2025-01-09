import { CaptionedContainer } from '$shared/CaptionedContainer'
import { TABLET } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'
import MobileMockup from './mobileNE.jpg'
import MobileMockup2x from './mobileNE@2x.jpg'
import Mockup from './networkExplorer.jpg'
import Mockup2x from './networkExplorer@2x.jpg'
import { Overgrow } from './Overgrow'

interface NetworkExplorerMockProps
    extends React.HTMLAttributes<HTMLDivElement> {
    caption: React.ReactNode
}

export function NetworkExplorerMock({
    caption,
    ...props
}: NetworkExplorerMockProps) {
    return (
        <div {...props}>
            <CaptionedContainer caption={caption}>
                <Overgrow>
                    <Image
                        src={MobileMockup}
                        srcSet={`${MobileMockup2x} 2x`}
                        alt="Network Explorer"
                        $mobile
                    />
                    <Image
                        src={Mockup}
                        srcSet={`${Mockup2x} 2x`}
                        alt="Network Explorer"
                        $tablet
                    />
                </Overgrow>
            </CaptionedContainer>
        </div>
    )
}

const Image = styled.img<{ $mobile?: boolean; $tablet?: boolean }>`
    width: 100%;

    ${({ $mobile }) =>
        !!$mobile &&
        css`
            border-radius: 4px;
            display: block;

            @media ${TABLET} {
                display: none;
            }
        `}

    ${({ $tablet }) =>
        !!$tablet &&
        css`
            border-radius: 8px;
            display: none;

            @media ${TABLET} {
                display: block;
            }
        `}
`
