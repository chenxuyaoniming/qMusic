var Mock = require('mockjs');
var Random = Mock.Random;


let mock1 = new Mock.mock('/banner',{
    "img": [Random.dataImage(),Random.dataImage(),Random.dataImage(),Random.dataImage()]
})


let mock2 = new Mock.mock('/songList',{
    'data':[
        {
            'imgUrl':Random.dataImage(),
            'songName':Random.cword( 3, 6 )
        },
        {
            'imgUrl':Random.dataImage(),
            'songName':Random.cword( 3, 6 )
        },
        {
            'imgUrl':Random.dataImage(),
            'songName':Random.cword( 3, 6 )
        },
        {
            'imgUrl':Random.dataImage(),
            'songName':Random.cword( 3, 6 )
        },
        {
            'imgUrl':Random.dataImage(),
            'songName':Random.cword( 3, 6 )
        },
        {
            'imgUrl':Random.dataImage(),
            'songName':Random.cword( 3, 6 )
        }

    ]
})


export default {
    mock1,
    mock2
}