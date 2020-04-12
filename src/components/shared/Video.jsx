import React from 'react'

const sources = {
    hive: [
        ['/videos/hive.mp4', 'video/mp4'],
        ['/videos/hive.webm', 'video/quicktime'],
        ['/videos/hive.mov', 'video/webm'],
    ],
    hux: [
        ['/videos/hux.mp4', 'video/mp4'],
        ['/videos/hux.webm', 'video/quicktime'],
        ['/videos/hux.mov', 'video/webm'],
    ],
    golemCharacter: [
        ['/videos/golem_character.mp4', 'video/mp4'],
        ['/videos/golem_character.webm', 'video/quicktime'],
        ['/videos/golem_character.mov', 'video/webm'],
    ],
    vizor: [
        ['/videos/vizor.mp4', 'video/mp4'],
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
