<template>
    <div class="detail">
        <ul class="detail-ul">
            <li v-for="(item,index) in list" class="detail-li" :key="index" @click="sing(item.hash)">
                <span class="li-left lispan">
                    {{item.filename}}
                </span>
                <span class="li-right lispan">
                    播放
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
import http from '../fn/http'
export default {
    name:'detail',
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        let id = this.$route.query.id;
        let data = this.$route.query.data;
        let that = this;
        if(id){
            http.songList(id).then(res=>{
                that.list = res.data.list.list.info

            })
        };
        if(data){
            this.list = data.data.info
        }

    },
    methods:{
        sing(id){
            let that = this;
            http.sing(id).then(res=>{
                var obj = {name:res.data.fileName,url:res.data.url}
                that.$store.commit('songUpdate',obj)

            })
        }
    }
}
</script>


<style lang="scss" scoped>
.detail{
    color: red;
    font-size: 0.3rem;
    margin-top: 0.89rem;
    .detail-ul{
        padding: 0 0.2rem;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        .detail-li{
            display: block;
            width: 100%;
            overflow: hidden;
            padding: 0.2rem 0;
            border-bottom: 1px solid rgb(172, 172, 172);
        }
    }
}
.lispan{
    display: inline-block;
    color: rgb(55, 175, 101);
    font-size: 0.35rem;
}
.li-left{
    float: left;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.li-right{
    float: right;
}
</style>


