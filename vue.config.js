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
            },
            '/searchSong':{
                target:'http://mobilecdn.kugou.com/api/v3/search/song',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/searchSong':'http://mobilecdn.kugou.com/api/v3/search/song'
                }
            }
        }
    }
}