import React from 'react'

const DangerousHtml = ({ tag: Tag, children: __html, dangerouslySetInnerHTML, ...props }) => (
    <Tag
        {...props}
        dangerouslySetInnerHTML={{
            __html,
        }}
    />
)

export default DangerousHtml
