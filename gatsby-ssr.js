import React from 'react'

export function onPreRenderHTML({ pathname, getHeadComponents, replaceHeadComponents }) {
    const headComponents = getHeadComponents()

    const ref = [...headComponents]

    headComponents.sort((a, b) => {
        switch (true) {
            case a.type === 'meta' && b.type !== 'meta':
                return -1
            case a.type !== 'meta' && b.type === 'meta':
                return 1
            default:
                return ref.indexOf(a) - ref.indexOf(b)
        }
    })

    replaceHeadComponents(headComponents)
}

export function onRenderBody({ setPostBodyComponents }) {
    setPostBodyComponents([
        <div id="__front" key="__front" />
    ])
}
