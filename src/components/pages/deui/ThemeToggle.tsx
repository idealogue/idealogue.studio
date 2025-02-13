import * as React from 'react'
import styled, { css } from 'styled-components'
import { TABLET } from '~/utils/css'

interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    dark?: boolean
}

export function ThemeToggle({ dark, ...props }: ThemeToggleProps) {
    return (
        <ThemeToggleRoot {...props} $dark={dark}>
            <ThemeToggleSlider>
                <Sun />
                <Moon />
            </ThemeToggleSlider>
        </ThemeToggleRoot>
    )
}

const Icon = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: 200ms ease-in-out;
    transition-property: visibility, opacity;
    width: 2rem;
    height: 2rem;

    @media ${TABLET} {
        width: auto;
        height: auto;
    }
`

const SunRoot = styled(Icon)`
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
`

const MoonRoot = styled(Icon)`
    opacity: 0;
    visibility: hidden;
    transition-delay: 200ms, 0s;
`

const ThemeToggleSlider = styled.div`
    position: relative;
    width: var(--ThemeToggle_SliderSize, 6rem);
    height: var(--ThemeToggle_SliderSize, 6rem);
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.08);
    transition: 200ms ease-in-out;
    transition-property: background-color, box-shadow, transform;
`

const ThemeToggleRoot = styled.button<{ $dark?: boolean }>`
    --ThemeToggle_SliderSize: 4rem;
    --ThemeToggle_Width: 7rem;
    --ThemeToggle_Height: 4.75rem;
    --ThemeToggle_BorderRadius: 3.375rem; /* 0.5 of --ThemeToggle_Height */
    --ThemeToggle_Padding: 0.375rem;
    --ThemeToggle_MarginTop: 5rem;
    --ThemeToggle_SlideDistance: 2.25rem;

    appearance: none;
    border: 0;
    background-color: #f8f8f8;
    width: var(--ThemeToggle_Width);
    height: var(--ThemeToggle_Height);
    border-radius: var(--ThemeToggle_BorderRadius);
    box-sizing: border-box;
    padding: var(--ThemeToggle_Padding);
    margin: var(--ThemeToggle_MarginTop) auto 0;
    display: block;
    transition: 200ms ease-in-out background-color;

    @media ${TABLET} {
        --ThemeToggle_SliderSize: 6rem;
        --ThemeToggle_Width: 10.5rem;
        --ThemeToggle_Height: 6.75rem;
        --ThemeToggle_BorderRadius: 3.375rem; /* 0.5 of --ThemeToggle_Height */
        --ThemeToggle_Padding: 0.375rem;
        --ThemeToggle_MarginTop: 10rem;
        --ThemeToggle_SlideDistance: 3.75rem;
    }

    ${({ $dark = false }) =>
        $dark &&
        css`
            background: #000000;

            ${ThemeToggleSlider} {
                background-color: #272727;
                box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.08);
                transform: translateX(var(--ThemeToggle_SlideDistance));
            }

            ${SunRoot} {
                opacity: 0;
                visibility: hidden;
                transition-delay: 200ms, 0s;
            }

            ${MoonRoot} {
                opacity: 1;
                visibility: visible;
                transition-delay: 0s;
            }
        `}
`

function Sun() {
    return (
        <SunRoot
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M27 13.5V4.5"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.4538 17.4543L11.0898 11.0903"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.5 27H4.5"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.4538 36.5457L11.0898 42.9097"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M27 40.5V49.5"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M36.5449 36.5457L42.9089 42.9097"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M40.5 27H49.5"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M36.5449 17.4543L42.9089 11.0903"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M27 40.5C34.4558 40.5 40.5 34.4558 40.5 27C40.5 19.5442 34.4558 13.5 27 13.5C19.5442 13.5 13.5 19.5442 13.5 27C13.5 34.4558 19.5442 40.5 27 40.5Z"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M34.4982 32.9997C32.2908 32.9991 30.1171 32.4573 28.1676 31.4218C26.218 30.3863 24.5521 28.8887 23.3155 27.0601C22.079 25.2314 21.3096 23.1275 21.0748 20.9326C20.8399 18.7377 21.1467 16.5186 21.9682 14.4697C19.896 15.3016 18.0624 16.6343 16.6317 18.3487C15.201 20.0631 14.2178 22.1056 13.7702 24.2932C13.3225 26.4808 13.4245 28.7453 14.0668 30.8839C14.7091 33.0224 15.8718 34.9683 17.4507 36.5472C19.0297 38.1262 20.9755 39.2889 23.1141 39.9312C25.2527 40.5735 27.5172 40.6754 29.7048 40.2278C31.8924 39.7802 33.9349 38.797 35.6492 37.3662C37.3636 35.9355 38.6964 34.102 39.5282 32.0297C37.9293 32.6728 36.2216 33.0021 34.4982 32.9997V32.9997Z"
                stroke="black"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SunRoot>
    )
}

function Moon() {
    return (
        <MoonRoot
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_3164_72)">
                <path
                    d="M40.5595 11.5454C38.3978 9.40475 35.7866 7.77367 32.9197 6.77317C34.2416 10.399 34.508 14.3159 33.6878 18.0663C32.8676 21.8167 30.9946 25.2456 28.2878 27.9524C25.581 30.6593 22.152 32.5322 18.4016 33.3524C14.6513 34.1726 10.7343 33.9062 7.10853 32.5843C8.14343 35.4686 9.81207 38.0892 11.9907 40.252C14.1694 42.4148 16.8021 44.0641 19.6937 45.0777C22.5853 46.0913 25.6615 46.4432 28.6943 46.1073C31.727 45.7714 34.6385 44.7562 37.2128 43.1372C39.787 41.5181 41.958 39.3366 43.5647 36.7546C45.1714 34.1725 46.1726 31.2561 46.4941 28.2217C46.8155 25.1872 46.449 22.1125 45.4217 19.2256C44.3943 16.3388 42.7325 13.7138 40.5595 11.5454V11.5454Z"
                    stroke="white"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_3164_72">
                    <rect width="54" height="54" fill="white" />
                </clipPath>
            </defs>
        </MoonRoot>
    )
}
