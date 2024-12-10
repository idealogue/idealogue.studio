import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: `idealogue.studio`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
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
                    $team: 'src/components/pages/team',
                },
                extensions: ['js', 'jsx', 'ts', 'tsx'],
            },
        },
    ],
}

export default config
