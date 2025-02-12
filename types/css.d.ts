import 'csstype'
import { CSSProp } from 'styled-components'

declare module 'react' {
    interface Attributes {
        css?: CSSProp
    }
}

declare module 'csstype' {
    interface Properties {
        [index: `--${string}`]: string
    }
}
