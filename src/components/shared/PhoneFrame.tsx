import { MD, SM } from '$utils/css'
import React, { HTMLAttributes, useReducer } from 'react'
import styled, { css } from 'styled-components'
import { XofY, XofYRoot } from './XofY'

const Content = styled.div`
    position: relative;
`

interface SlideProps extends HTMLAttributes<HTMLDivElement> {
    poster?: boolean
    current?: boolean
    previous?: boolean
}

function Slide({ poster, current, previous, ...props }: SlideProps) {
    return (
        <SlideRoot
            {...props}
            $poster={poster}
            $current={current}
            $previous={previous}
        />
    )
}

const SlideRoot = styled.div<{
    $poster?: boolean
    $current?: boolean
    $previous?: boolean
}>`
    ${({ $poster = false }) =>
        $poster &&
        css`
            display: none;

            @media (min-width: ${MD}px) {
                display: block;
            }
        `}

    ${({ $poster = false, $current = false, $previous = false }) =>
        !$poster &&
        css`
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            transition: 250ms;
            transition-property: visibility, opacity;
            transition-delay: 250ms, 250ms;
            visibility: hidden;
            width: 100%;
            z-index: ${$previous ? 2 : undefined};

            ${$current &&
            css`
                opacity: 1;
                position: relative;
                transition-delay: 0s;
                visibility: visible;
                z-index: 3;
            `}

            @media (min-width: ${MD}px) {
                display: none;
            }
        `}
`

export function PhoneFrame({
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const [slide, next] = useReducer(
        (x) => (x + 1) % React.Children.count(children),
        0
    )

    const n = React.Children.count(children)

    return (
        <PhoneFrameRoot {...props}>
            {n > 1 && (
                <XofY
                    x={slide + 1}
                    y={n}
                    bg="#ffffff"
                    color="#d5d5d5"
                    onClick={next}
                />
            )}
            <svg viewBox="0 0 320 77" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M320 77V44c0-24.535-17.674-44-41.87-44H43.864C19.335 0 0 19.465 0 44v33h320z"
                        fill="#D5D5D5"
                    />
                    <path
                        d="M195.23 43.41c0 2.418-2.123 2.714-4.1 2.729h-40.92c-2.023 0-4.128-.2-4.128-2.65 0-2.376 1.87-2.784 3.94-2.806h40.935c2.023 0 4.274.24 4.274 2.727zm-68.643-2.526c1.363 0 2.47 1.131 2.47 2.527 0 1.395-1.107 2.526-2.47 2.526-1.365 0-2.47-1.13-2.47-2.526s1.105-2.527 2.47-2.527z"
                        fill="#848484"
                    />
                    <path
                        d="M190.957 46.14H150.21c-2.024 0-4.129-.201-4.129-2.65 0-2.45 1.986-2.808 4.129-2.808h40.746c2.023 0 4.274.24 4.274 2.728 0 2.49-2.25 2.73-4.274 2.73m2.265-7.277c2.248 0 4.07 2.036 4.07 4.547 0 2.512-1.822 4.549-4.07 4.549h-45.276c-2.247 0-4.07-2.037-4.07-4.549 0-2.51 1.823-4.547 4.07-4.547zm-66.635 0c2.456 0 4.446 2.036 4.446 4.548 0 2.513-1.99 4.548-4.446 4.548-2.456 0-4.446-2.035-4.446-4.548 0-2.512 1.99-4.548 4.446-4.548zm2.47 4.548c0 1.395-1.107 2.526-2.47 2.526-1.365 0-2.47-1.13-2.47-2.526s1.105-2.527 2.47-2.527c1.363 0 2.47 1.131 2.47 2.527"
                        fill="#E0E0E0"
                    />
                </g>
            </svg>
            <Content>
                {n === 0 ? null : n === 1 ? (
                    children
                ) : (
                    <>
                        <Slide poster>
                            {React.Children.toArray(children)[0]}
                        </Slide>
                        {React.Children.map(children, (child, index) => (
                            <Slide
                                current={index === slide}
                                previous={index === (n + slide - 1) % n}
                                onMouseDown={next}
                            >
                                {child}
                            </Slide>
                        ))}
                    </>
                )}
            </Content>
            <svg viewBox="0 0 320 61" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M0 0v18c0 23.874 19.177 43 43 43h235c23.945 0 42-19.126 42-43V0H0z"
                        fill="#D5D5D5"
                    />
                    <circle stroke="#FFF" cx="160" cy="30.674" r="18.238" />
                </g>
            </svg>
        </PhoneFrameRoot>
    )
}

export const PhoneFrameRoot = styled.div`
    max-width: 70%;
    position: relative;
    width: 200px;

    svg,
    video {
        display: block;
        width: 100%;
    }

    ${XofYRoot} {
        left: 0;
        position: absolute;
        top: 0;
        transform: translate(-50%, -50%);
        max-width: 72px;
        width: 28%;
        z-index: 4;
    }

    @media (min-width: ${SM}px) {
        max-width: none;
        width: 320px;
    }

    @media (min-width: ${MD}px) {
        ${XofYRoot} {
            display: none;
        }
    }
`
