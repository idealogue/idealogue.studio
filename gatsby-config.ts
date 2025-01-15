import { type GatsbyConfig } from 'gatsby'

const siteUrl = 'https://idealogue.studio'

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'idealogue.studio',
        siteUrl,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    placeholder: 'none',
                    quality: 100,
                    formats: ['auto'],
                },
                failOn: 'error',
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-alias-imports',
            options: {
                alias: {
                    '~': 'src',
                    $hooks: 'src/hooks',
                    $shared: 'src/components/shared',
                    $utils: 'src/utils',
                    $cobalt: 'src/components/pages/cobalt',
                    $golem: 'src/components/pages/golem',
                    $hive: 'src/components/pages/hive',
                    $hux: 'src/components/pages/huxtaburger',
                    $streamr: 'src/components/pages/streamr',
                    $vizor: 'src/components/pages/vizor',
                    $deui: 'src/components/pages/deui',
                    $octant: 'src/components/pages/octant',
                    $cargo: 'src/components/pages/cargo',
                    $team: 'src/components/pages/team',
                },
                extensions: ['js', 'jsx', 'ts', 'tsx'],
            },
        },
        'gatsby-plugin-cname',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl,
            },
        },
    ],
}

export default config
