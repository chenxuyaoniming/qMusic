<template>
    <div class="person">
        <div class="UserHeader">
            <div class="UserHeader-box">
                <router-link to='/login/login' v-show="!uuid">
                    <p class="UserLogin">请登录</p>
                </router-link>
                <div v-show="uuid" class="UserNameShow">
                    <img src="http://img4.imgtn.bdimg.com/it/u=2097954234,3414125822&fm=26&gp=0.jpg" alt="" class="UserNameImg">
                    <span class="UserNameText">{{uuid}}</span>
                </div>
            </div>
        </div>
        <div class="activeCenter">
            <div class="activeCenterBox">
                <div class="activeCenterLeft">
                    <div class="activeCenterLeftIcon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-caidan"></use>
                        </svg>
                    </div>
                    <div class="activeCenterLeftTxt">
                        <span class="active-txt1">活动中心</span>
                        <span class="active-txt2">签到立即领积分</span>
                    </div>
                </div>

                <div class="activeCenterLine">

                </div>
                <div class="activeCenterRight">
                    <div class="activeCenterLeftIcon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-ic-data"></use>
                        </svg>
                    </div>
                    <div class="activeCenterLeftTxt">
                        <span class="active-txt1">会员中心</span>
                        <span class="active-txt2">限时6.7折开通</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="UserSongList">  
            <div class="UserSongItem" v-for="(item,index) in allList" :key="index">
                <router-link :to="'/song/'+item.id">
                    <svg class="icon SongListIcon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                    <div class="UserSongName">
                        {{item.name}}
                    </div>
                    <span class="UserSongCount">
                        {{item.count}}
                    </span>
                </router-link>
            </div>
        </div>
        <div class="UserLove">
            <h3 class="UserLoveTxt">我的关注</h3>
            <List></List>
        </div>
    </div>
</template>

<script>

import '../assets/fonticon/iconfont.js'

export default {
    name:'person',
    data(){
        return{
            allList:[
                {name:"全部音乐",id:'',count:'20',icon:'#icon-caidan'},
                {name:"下载音乐",id:'',count:'20',icon:'#icon-kaishi'},
                {name:"最近播放",id:'',count:'20',icon:'#icon-menu-fold'},
                {name:"我喜欢",id:'',count:'20',icon:'#icon-ic-settings'},
                {name:"已购音乐",id:'',count:'20',icon:'#icon-ic-all'},
                {name:"跑步电台",id:'',count:'20',icon:'#icon-ic-data'}
            ]
        }
    },
    computed:{
        'uuid':function(){
            return this.$store.state.uuid
            // return 1
        }
    },
    components:{
        List:()=>import('../components/listComponent')
    }
}
</script>


<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 0.4rem;
  color: rgb(50, 175, 108);
}
.person{
    padding-top: 0.89rem;
    width: 100%;
}

.UserHeader{
    height: 1.4rem;
    width: 100%;
    padding: 0 0.18rem;
    box-sizing: border-box;
    // border: 1px solid red;
    position: relative;
    .UserHeader-box{
        width: 3.2rem;
        height: 0.68rem;
        position: absolute;
        // border: 1px solid #000;
        color: #000;
        top: 50%;
        left: 50%;
        margin-top: -0.34rem;
        margin-left: -1.6rem;
        .UserLogin{
            color: #5f5f5f;
            font-size: 0.50rem;
            text-align: center;
            line-height: 0.68rem;
        }
        .UserNameShow{
            text-align: left;
            padding: 0 0.5rem;
            .UserNameImg{
                width: 0.68rem;
                height: 0.68rem;
                border-radius: 50%;
                margin-right: 0.2rem;
                vertical-align: middle;
            }
            .UserNameText{
                color: #000;
                font-size: 0.34rem;
                height: 100%;
                display: inline-block;
                // line-height: 0.67rem;
                vertical-align: middle;
            }
        }
    }

}
.activeCenter{
    width: 100%;
    padding: 0 0.16rem;
    box-sizing: border-box;
    .activeCenterBox{
        height: 1.3rem;
        width: 100%;
        box-shadow: 0 0 0.1rem rgb(194, 194, 194);
        display: flex;
        justify-content: space-around;
        align-items: center;
        // color: #000;
        .activeCenterLeft,.activeCenterRight{
            color: #000;
            font-size: 0.34rem;
            width: 2.4rem;
            height: 0.68rem;
        }
        .activeCenterLine{
            height: 0.4rem;
            width: 0.03rem;
            background: rgb(153, 153, 153);
        }
        .active-txt1{
            color: #000;
            font-size: 0.34rem;
            display: inline-block;
            text-align: left;
            width: 1.8rem;
        }
        .active-txt2{
            color: rgb(68, 68, 68);
            font-size: 0.24rem;
            width: 1.8rem;
            display: inline-block;
            text-align: left
        }
        .activeCenterLeftIcon{
            float: left;
            width: 0.5rem;
            height: 0.5rem;
            color: #000;
            position: relative;
            top: 50%;
            margin-top: -0.2rem;

        }
        .activeCenterLeftTxt{
            width: 1.8rem;
            float: right;
        }
    }
}
.UserSongList{
    width: 100%;
    padding: 0 0.16rem;
    box-sizing: border-box;
    overflow: hidden;
    .UserSongItem{
        color: rebeccapurple;
        width: 33.3%;
        float: left;
        padding: 0.3rem 0 ;
        .SongListIcon{
            color: rgb(24, 168, 89);
            font-size: 1rem;
        }
        .UserSongName{
            color: #000;
            font-size: 0.32rem;
            margin: 0.16rem 0 ;
        }
    }
}
.UserLove{
    padding: 0 0.27rem;
    width: 100%;
    box-sizing: border-box;
    .UserLoveTxt{
        color: #000;
        text-align: left;
        height: 0.6rem;
        font-size: 0.28rem;
        line-height: 0.6rem;
    }
}
</style>





