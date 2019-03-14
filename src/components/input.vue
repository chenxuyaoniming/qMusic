<template>
    <div class="headerIpt">
        <input type="text" id="headerIpt1" placeholder="搜索" v-model="val">
    </div>
</template>

<script>
import http from '../fn/http'
import Vue from 'vue';

import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);

export default {
    name:'Ipt',
    data(){
        return{
            val:''
        }
    },
    mounted(){
        let that = this;
        window.addEventListener('keydown',function(e){
            if(e.key.toLowerCase() === 'enter'){
                http.searchSong(that.val).then(res=>{
                    that.$router.push({name:'detail',query:{data:res.data}})
                }).catch(err=>{

                })
            }
        })
    },
    methods:{

    },
    
}
</script>


<style lang="scss" scoped>
.headerIpt{
    width: 100%;
    height: 0.9rem;
    padding: 0.16rem;
    box-sizing: border-box;
    background: rgb(49, 195, 124);
    #headerIpt1{
        float: left;
        font-size: 0.32rem;
        background: rgb(42,170,109);
        border: none;
        color: rgb(2, 49, 22);
        text-align: left;
        width: 100%;
        height:0.62rem;
        text-indent: 0.2rem;
        outline: none;
        &::placeholder{
            color: rgb(149,194,165);
            text-align: center;
            line-height: 0.62rem;
        }
    }
}
</style>


