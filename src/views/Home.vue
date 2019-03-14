<template>
    <div class="home">
        <keep-alive>
                <Banner class="boxBanner" :Ban='banner'></Banner>            
            </keep-alive>
        <Tuijian class="homeTj" :news='newSong'></Tuijian>
    </div>
</template>

<script>
import http from '../fn/http';
import Banner from '@/components/banner';
import Tuijian from '@/components/indexTuijian';
export default {
    name:'home',
    props:['isUp'],
    data(){
        return{
            banner:'',
            newSong:[]
        }
    },
    mounted(){
        let that = this;
        http.newsSong().then(res=>{
            that.banner = res.data.banner
            that.newSong = res.data.data
        })
    },
    components:{
        Banner,
        Tuijian
    }
}
</script>

<style lang="scss" scoped>
.boxBanner{
    margin-top:0.89rem; 
}
</style>

