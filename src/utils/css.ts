import { css, RuleSet } from 'styled-components'

export const SM = 544

export const MD = 768

export const LG = 992

export const XL = 1200

export const REGULAR = 400

export const MEDIUM = 500

export const SEMIBOLD = 600

export const BOLD = 700

export const TABLET = `(min-width: ${MD}px)`

export const DESKTOP = `(min-width: ${LG}px)`

export const XLDESKTOP = `(min-width: ${XL}px)`

type FontName = 'plex mono' | 'plex sans' | 'publico banner' | 'publico text' | 'lab grotesque'

export function font(name: FontName): RuleSet<Record<never, never>> {
    if (name === 'plex mono') {
        return css`
            font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
                Courier, monospace;
        `
    }

    if (name === 'plex sans') {
        return css`
            font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
        `
    }

    if (name === 'publico banner') {
        return css`
            font-family: 'Publico Banner';
        `
    }

    if (name === 'publico text') {
        return css`
            font-family: 'Publico Text';
        `
    }

    if (name === 'lab grotesque') {
        return css`
            font-family: 'Lab Grotesque', 'Helvetica Neue', Arial, sans-serif;
        `
    }

    throw new Error('Invalid font name')
}
