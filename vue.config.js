module.exports = {
    // baseUrl:'./'
    publicPath:'./',
    devServer: {
        proxy: {
            '/newsSong': {
                target: 'http://m.kugou.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/newsSong': ''
                }
            }
        }
    }
}