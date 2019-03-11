<template>
    <div class="home">
        <keep-alive>
                <Banner class="boxBanner" ></Banner>            
            </keep-alive>
        <Tuijian class="homeTj" ></Tuijian>
    </div>
</template>

<script>
import Banner from '@/components/banner'
import Tuijian from '@/components/indexTuijian'
export default {
    name:'home',
    props:['isUp'],
    data(){
        return{

        }
    },
    mounted(){
        console.log(this.isUp,'option')
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

