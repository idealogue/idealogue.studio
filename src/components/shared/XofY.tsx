import * as React from 'react'
import styled from 'styled-components'

interface XofYProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    x?: number
    y?: number
    bg?: string
    color?: string
}

export function XofY({
    x = 1,
    y = 3,
    bg,
    color = 'currentColor',
    ...props
}: XofYProps) {
    return (
        <XofYRoot {...props} type="button">
            <svg viewBox="0 0 982 982" xmlns="http://www.w3.org/2000/svg">
                <g fill={color || 'currentColor'} fillRule="nonzero">
                    {typeof bg === 'string' && (
                        <circle cx="491" cy="491" r="491" fill={bg} />
                    )}
                    {x === 1 && (
                        <polygon points="384 305 384 502 338 502 338 359 307 380 286 350 348 305"></polygon>
                    )}
                    {x === 2 && (
                        <path d="M288,462 L400,462 L400,500 L239,500 L239,482 C239,437 270,418 304,402 C332,387 355,380 355,361 C355,348 343,339 323,339 C305,339 289,346 266,364 L243,334 C268,311 298,300 325,300 C375,300 402,329 402,359 C402,400 371,411 330,432 L328.184297,433.041261 C309.864305,443.451901 292.840426,450.382979 288,462 Z"></path>
                    )}
                    {x === 3 && (
                        <path d="M409,441 C409,475 380,507 329,507 C304,507 277,502 245,480 L266,448 C293,462 311,466 329,466 C350,466 363,457 363,439 C363,421 345,412 321,412 C311,412 302,414 298,416 L279,389 L343,341 L255,341 L255,304 L398,304 L398,341 L343,382 C382,386 409,407 409,441 Z"></path>
                    )}
                    {x === 4 && (
                        <polygon points="414 423 414 459 388 459 388 502 343 502 343 459 248 459 248 418 323 305 371 305 295 423 343 423 343 386 388 386 388 423"></polygon>
                    )}
                    {y === 3 && (
                        <path d="M709,571 C709,605 680,637 629,637 C604,637 577,632 545,611 L566,579 C593,593 611,596 629,596 C650,596 663,587 663,570 C663,553 645,543 621,543 C611,543 602,545 598,546 L579,520 L643,471 L555,471 L555,434 L698,434 L698,471 L643,512 C682,516 709,539 709,571 Z"></path>
                    )}
                    {y === 4 && (
                        <polygon points="696 555 696 591 671 591 671 632 627 632 627 591 532 591 532 548 607 436 655 436 577 555 627 555 627 518 671 518 671 555"></polygon>
                    )}
                    <path d="M491,0 C762,0 982,220 982,491 C982,762 763,982 491,982 C220,982 0,762 0,491 C0,220 220,0 491,0 Z M491,36 C239,36 36,239 36,491 C36,743 239,946 491,946 C743,946 946,743 946,491 C946,239 743,36 491,36 Z M575,296 L613,320 L386,641 L350,618 L575,296 Z"></path>
                </g>
            </svg>
        </XofYRoot>
    )
}

export const XofYRoot = styled.button`
    appearance: none;
    background: none;
    border: 0;
    color: inherit;
    display: block;
    outline: 0 !important;
    padding: 0;

    svg {
        display: block;
        min-width: 32px;
    }
`
