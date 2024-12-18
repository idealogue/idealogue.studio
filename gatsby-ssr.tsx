import { type GatsbySSR } from 'gatsby'
import * as React from 'react'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
    setPostBodyComponents,
}) => {
    setPostBodyComponents([<div id="__front" key="__front" />])
}

export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({
    getHeadComponents,
    replaceHeadComponents,
}) => {
    const replacement = [...getHeadComponents()].sort(
        (a, b) => getElementPrio(b) - getElementPrio(a)
    )

    replaceHeadComponents(replacement)
}

function getElementPrio(el: React.ReactNode) {
    if (el != null && typeof el === 'object' && 'type' in el) {
        switch (el.type) {
            case 'title':
                return 4
            case 'meta':
                return 3
            case 'link':
                if (el.props.rel === 'preload') {
                    return 2
                }

                return 1
            default:
                return 0
        }
    }

    return 0
}
