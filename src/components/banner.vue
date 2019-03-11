<template>
    <mt-swipe :auto="4000" style="height:3.36rem;width:100%;">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
            <img :src="item" :alt="index" class="bannerImg"/>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
import { mock1 } from '@/mock/mockTem.js'
import 'mint-ui/lib/style.css';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    name:'banner',
    data(){
        return{
            bannerList:[]
        }
    },
    mounted(){
        var _ = this;
        this.$axios.get('/banner').then(res=>{
            // console.log(res.data.img,'res')
            _.bannerList = res.data.img
        })
    }
}
</script>

<style lang="scss" scoped>
.bannerImg{
    height: 100%;
    width: 100%;
}
</style>


