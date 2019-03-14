
import axios from 'axios'

export default {
    
    newsSong(){
        return axios.get('/newsSong',{
            params:{
                json:true
            }
        })
    },
    songMenu(){
        return axios.get('/newsSong/plist/index',{
            params:{
                json:true
            }
        })
    },
    songList(id){
        return axios.get(`/newsSong/plist/list/${id}`,{
            params:{
                json:true
            }
        })
    },
    sing(id){
        return axios.get(`/newsSong/app/i/getSongInfo.php`,{
            params:{
                hash:id,
                cmd:'playInfo'
            }
        })
    },
    searchSong(txt){
        return axios.get('/searchSong',{
            params:{
                format:'json',
                keyword:txt,
                page:1,
                pagesize:20,
                showType:1
            }
        })
    }
        
    
}