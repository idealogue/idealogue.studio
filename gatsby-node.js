const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src'),
                '$hooks': path.join(__dirname, 'src/hooks'),
                '$shared': path.join(__dirname, 'src/components/shared'),
                '$utils': path.join(__dirname, 'src/utils'),
                // Let's have shortcuts to all the projects.
                '$cobalt': path.join(__dirname, 'src/components/pages/cobalt'),
                '$golem': path.join(__dirname, 'src/components/pages/golem'),
                '$hive': path.join(__dirname, 'src/components/pages/hive'),
                '$hux': path.join(__dirname, 'src/components/pages/huxtaburger'),
                '$streamr': path.join(__dirname, 'src/components/pages/streamr'),
                '$vizor': path.join(__dirname, 'src/components/pages/vizor'),
                '$team': path.join(__dirname, 'src/components/pages/team'),
                // We want both streamr-client and pub site to use the same
                // instance of `styled-components`.
                'styled-components': require.resolve('styled-components'),
                react: require.resolve('react'),
            },
        },
    })
}
