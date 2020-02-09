import React from 'react'

const sources = {
    hive: [
        ['/videos/hive.mp4', 'video/mp4'],
        ['/videos/hive.webm', 'video/quicktime'],
        ['/videos/hive.mov', 'video/webm'],
    ],
}

const Video = ({ id, ...props }) => (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video {...props}>
        {sources[id].map(([src, type]) => (
            <source key={type} src={src} type={type} />
        ))}
    </video>
)

export default Video
