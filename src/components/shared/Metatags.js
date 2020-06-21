import React from 'react'
import { Helmet } from 'react-helmet'
import pkg from '~/../package'

const Metatags = () => (
    <Helmet>
        <meta property="og:type" content="website" />
        <meta name="description" content="We work with startups to create great digital products we believe in." />
        <meta name="version" content={pkg.version} />
        <link href="/images/favicon.ico" rel="icon" type="image/x-icon" />
        <link href="/images/touch-icon.png" rel="apple-touch-icon" />
        <link href="/images/touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="/images/touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/images/touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="/images/touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
    </Helmet>
)

export default Metatags
