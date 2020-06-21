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
                '$cobalt': path.join(__dirname, 'src/components/cobalt'),
                '$golem': path.join(__dirname, 'src/components/golem'),
                '$hive': path.join(__dirname, 'src/components/hive'),
                '$hux': path.join(__dirname, 'src/components/huxtaburger'),
                '$streamr': path.join(__dirname, 'src/components/streamr'),
                '$vizor': path.join(__dirname, 'src/components/vizor'),
                // We want both streamr-client and pub site to use the same
                // instance of `styled-components`.
                'styled-components': require.resolve('styled-components'),
                'sc': require.resolve('styled-components'),
                react: require.resolve('react'),
            },
        },
    })
}
