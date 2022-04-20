import React from 'react'

function getElementPrio(el) {
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

export function onPreRenderHTML({ getHeadComponents, replaceHeadComponents }) {
    const headComponents = getHeadComponents()

    const ref = [...headComponents]

    ref.sort((a, b) => (
        getElementPrio(b) - getElementPrio(a)
    ))

    replaceHeadComponents(ref)
}


export function onRenderBody({ setPostBodyComponents }) {
    setPostBodyComponents([
        <div id="__front" key="__front" />
    ])
}
