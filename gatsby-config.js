const siteUrl = 'https://idealogue.studio'

module.exports = {
    siteMetadata: {
        siteUrl,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         name: 'images',
        //         path: `${__dirname}/src/images`,
        //     },
        // },
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    placeholder: 'none',
                    quality: 100,
                    formats: ['auto'],
                },
                failOnError: true,
                stripMetadata: true,
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/components`,
            },
        },
        // {
        //   resolve: `gatsby-plugin-manifest`,
        //   options: {
        //     name: `gatsby-starter-default`,
        //     short_name: `starter`,
        //     start_url: `/`,
        //     background_color: `#663399`,
        //     theme_color: `#663399`,
        //     display: `minimal-ui`,
        //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //   },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {
                displayName: true,
            },
        },
        'gatsby-plugin-cname',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-react-helmet-canonical-urls',
            options: {
                siteUrl,
            },
        },
    ],
}
