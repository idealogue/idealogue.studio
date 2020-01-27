const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '$hooks': path.join(__dirname, 'src/hooks'),
                '$shared': path.join(__dirname, 'src/components/shared'),
                '$utils': path.join(__dirname, 'src/utils'),
                // We want both streamr-client and pub site to use the same
                // instance of `styled-components`.
                'styled-components': require.resolve('styled-components'),
                react: require.resolve('react'),
            },
        },
    })
}
