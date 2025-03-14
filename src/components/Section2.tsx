import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { MenuToggle } from '~/components/shared/MenuToggle'
import { font, LG, MD, SM } from '~/utils/css'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    x?: true | 't' | 'b'
    s?: true | 't' | 'b'
    m?: true | 't' | 'b'
    l?: true | 't' | 'b'
    noMenuToggle?: boolean
}

export function Section({
    x,
    s,
    m,
    l,
    className: classNameProp = '',
    children,
    noMenuToggle = false,
    ...props
}: SectionProps) {
    return (
        <SectionRoot
            {...props}
            className={`Section ${toClass(x, 'xs')} ${toClass(s, 'sm')} ${toClass(m, 'md')} ${toClass(l, 'lg')} ${classNameProp}`}
        >
            {children}
            {!noMenuToggle && (
                <ToggleWrapper>
                    <MenuToggle />
                </ToggleWrapper>
            )}
        </SectionRoot>
    )
}

const ToggleWrapper = styled.div`
    clip: rect(0, auto, auto, 0);
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 140px;
`

const SectionRoot = styled.div`
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
        margin-top: var(--Section_SpaceBetweenParagraphs, 40px);
    }

    p a {
        color: inherit !important;
    }

    hr {
        background: var(--SectionHeader_BorderColor, currentColor);
        border: 0;
        height: 1px;
    }
`

function toClass(value: undefined | true | 't' | 'b', id: 'xs' | 'sm' | 'md' | 'lg'): string {
    return value == null ? '' : value === true ? `pad-${id}-t pad-${id}-b` : `pad-${id}-${value}`
}

interface HeroSectionProps extends HTMLAttributes<HTMLDivElement> {}

export function HeroSection(props: HeroSectionProps) {
    return <HeroSectionRoot {...props} />
}

const HeroSectionRoot = styled(Section)`
    height: 100%;
    max-height: 90rem;
    min-height: 40rem;
`
