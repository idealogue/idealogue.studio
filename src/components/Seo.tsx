import * as React from 'react'
import pkg from '../../package.json'

interface SeoProps {
    children?: React.ReactNode
}

export function Seo({ children }: SeoProps) {
    const {
        desc = 'We work with startups to create great digital products we believe in.',
        socialPosterUrl = 'https://idealogue.studio/images/Idealogue-share.png',
        title = 'Idealogue',
    } = {}

    return (
        <>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="idealogue.studio" />
            <meta property="og:description" name="description" content={desc} />
            <meta name="version" content={pkg.version} />
            <link href="/images/favicon.ico" rel="icon" type="image/x-icon" />
            <link href="/images/touch-icon.png" rel="apple-touch-icon" />
            <link
                href="/images/touch-icon-76x76.png"
                rel="apple-touch-icon"
                sizes="76x76"
            />
            <link
                href="/images/touch-icon-120x120.png"
                rel="apple-touch-icon"
                sizes="120x120"
            />
            <link
                href="/images/touch-icon-152x152.png"
                rel="apple-touch-icon"
                sizes="152x152"
            />
            <link
                href="/images/touch-icon-180x180.png"
                rel="apple-touch-icon"
                sizes="180x180"
            />
            {socialPosterUrl && (
                <>
                    <meta property="og:image:height" content="600" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image" content={socialPosterUrl} />
                    <meta name="twitter:card" content="summary_large_image" />
                </>
            )}
            {children}
        </>
    )
}
