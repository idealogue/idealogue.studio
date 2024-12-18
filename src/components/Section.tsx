import { LG, MD, SM } from '$utils/css'
import * as React from 'react'
import styled, { css } from 'styled-components'
import MenuToggle from '~/components/shared/MenuToggle'
import { Spacer, SpacerProps } from './Spacer'

const ToggleWrapper = styled.div<{ $toggleColor?: string }>`
    clip: rect(0, auto, auto, 0);
    color: ${({ $toggleColor }) => $toggleColor};
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 140px;
`

interface SectionProps {
    actConsecutive?: boolean
    backgroundColor?: string
    captionColor?: string
    children?: React.ReactNode
    color?: string
    menuToggleBackground?: boolean
    menuToggleColor?: string
    spacerProps?: SpacerProps
}

export function Section({
    actConsecutive,
    backgroundColor,
    captionColor,
    color,
    menuToggleBackground = false,
    menuToggleColor,
    children,
    spacerProps = {},
}: SectionProps) {
    return (
        <SectionRoot
            {...spacerProps}
            $actConsecutive={actConsecutive}
            $backgroundColor={backgroundColor}
            $color={color}
            $captionColor={captionColor}
        >
            {children}
            <ToggleWrapper $toggleColor={menuToggleColor}>
                <MenuToggle
                    backgroundColor={
                        menuToggleBackground ? backgroundColor : undefined
                    }
                />
            </ToggleWrapper>
        </SectionRoot>
    )
}

const SectionRoot = styled(Spacer)<{
    $actConsecutive?: boolean
    $backgroundColor?: string
    $captionColor?: string
    $color?: string
}>`
    --captionColor: ${({ $captionColor = '#ffffff7f' }) => $captionColor};

    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${({ $color }) => $color};
    overflow: hidden;
    position: relative;

    p {
        font-family: 'Publico Text';
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
        background-color: ${({ $color }) => $color};
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
