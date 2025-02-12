import { font, LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'
import { MenuToggle } from '~/components/shared/MenuToggle'
import { Spacer, SpacerProps } from './Spacer'

const ToggleWrapper = styled.div`
    clip: rect(0, auto, auto, 0);
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 140px;
`

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    actConsecutive?: boolean
    children?: React.ReactNode
    spacerProps?: SpacerProps
    className?: string
}

export function Section({ actConsecutive, children, spacerProps = {}, ...props }: SectionProps) {
    return (
        <SectionRoot {...props} {...spacerProps} $actConsecutive={actConsecutive}>
            {children}
            <ToggleWrapper>
                <MenuToggle />
            </ToggleWrapper>
        </SectionRoot>
    )
}

const SectionRoot = styled(Spacer)<{
    $actConsecutive?: boolean
}>`
    background: var(--Section_Background, none);
    color: var(--Section_Color, inherit);
    overflow: hidden;
    position: relative;

    p {
        ${font('publico text')};

        font-size: 16px;
        line-height: 1.875em;
        margin: 0;

        @media (min-width: ${SM}px) {
            font-size: 18px;
        }

        @media (min-width: ${MD}px) {
            font-size: 21px;
        }

        @media (min-width: ${LG}px) {
            font-size: 25px;
        }
    }

    p + p {
        margin-top: 40px;
    }

    p a {
        color: inherit !important;
    }

    hr {
        background: var(--SectionHeader_BorderColor, currentColor);
        border: 0;
        height: 1px;
    }

    ${({ $actConsecutive = false }) =>
        !$actConsecutive &&
        css`
            &:first-child {
                height: 100%;
                max-height: 1440px;
                min-height: 640px;
            }
        `}
`
