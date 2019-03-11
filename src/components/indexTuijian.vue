<template>
    <div id="tuijian">
        <div :class="[isUp ? 'TnavTransDown Tnav ' : ' TnavTransUp Tnav ']">
            <div class="tjButton">
                <span class="iconfont icon-user">
                    <b class="ButtonTxt">我的</b>

                </span>
            </div>
            <div class="tjButton">
                <span class="iconfont icon-ic-data">
                    <b class="ButtonTxt">排行</b>
                </span>
            </div>
            <div class="tjButton">
                <span class="iconfont icon-ic-all">
                    <b class="ButtonTxt">分类歌单</b>
                </span>
            </div>
            <div class="tjButton">
                <span class="iconfont icon-menu-fold
">
                    <b class="ButtonTxt">电台</b>
                </span>
            </div>
            <div class="tjButton">
                <span class="iconfont icon-ic-settings
">
                    <b class="ButtonTxt">视频</b>
                </span>
            </div>
        </div>
        <div id="vedio">
            <div class="vedioLeft">
                
            </div>
            <div class="shadow1"></div>
            <div class="shadow2"></div>
            <div class="vedioCenter">
                <div class="vedioCenterTop"></div>
                <div class="vedioCenterBotton"></div>
            </div>
        </div>
        <div id="forSong">
            <h3 class="forSongTit">
                <span class="forSongSpan">为你推荐歌单</span>
            </h3>
            <div class="forSongList">
                <div class="forSongListItem" v-for="(item,index) in songList" :key="index">
                    <img :src="item.imgUrl" alt="" srcset="" class="forSongListItemImg">
                    <div class="forSongListItemBox">
                        <p class="forSongListItemFont">
                            {{item.songName}}
                        </p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'tuijian',
    data(){
        return {
            songList:[]
        }
    },
    computed:{
        isUp(){
            return this.$store.state.isUp
        }
    },
    mounted(){
        let _  = this;
        this.$axios.get('/songList').then(res=>{
            // console.log(res.data,'list')
            _.songList = res.data.data
        })
    }
    
}
</script>

<style lang="scss" scoped>
@import url(../assets/fonticon/iconfont.css);
#tuijian{
    width: 100%;
    background: #ffffff;
    position: relative;
    .TnavTransDown{
        transform: translateY(0.1rem);
        box-shadow: none;
    }
    .TnavTransUp{
        transform: translateY(-0.1rem);
        box-shadow: 0 0.05rem 0.05rem #ddd;
    }
    .Tnav{
        height: 1.74rem;
        width: 7.2rem;
        background: #fff;
        position: relative;
        left: 50%;
        margin-left: -3.6rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        transition: 0.2s;
        .tjButton{
            .iconfont{
                color: rgb(41,199,122);
                .ButtonTxt{
                    margin-top: 0.2rem;
                    display: block;
                    font-size: 0.30rem;
                    height: 0.3rem;
                    color: #000;
                    font-weight: normal;
                }
            }
            
        }
    }
    
    #vedio{
        padding: 0 0.16rem;
        background: #fff;
        margin-top: 0.22rem;
        position: relative;
        overflow: hidden;
        .vedioLeft{
            width: 2.75rem;
            height: 2.77rem;
            background: rgb(101, 173, 41);   
            position: absolute;
            top: 0;
            left: 0.16rem;
            z-index: 2;    
            // display: inline-block; 
            // float: left;  
        }
        .shadow1{
                height: 2.6rem;
                width: 0.5rem;
                position: absolute;
                left:2.5rem;
                top: 0.08rem;
                background: rgb(182,183,178);
                z-index: 1
        }
        .shadow2{
                height: 2.4rem;
                width: 0.5rem;
                position: absolute;
                left:2.6rem;
                top: 0.18rem;
                background: rgb(228,228,228);
                z-index: 0
        }
        .vedioCenter{
            float: right;
            width: 3.6rem;
            .vedioCenterTop,.vedioCenterBotton{
                height: 1.28rem;
                width: 4rem;
                float: right;
                background: violet;
            }
            .vedioCenterBotton{
                margin-top: 0.2rem;

            }
            
        }
    }
    #forSong{
        margin-top: 0.2rem;
        .forSongTit{
            height: 1.2rem;
            width: 100%;
            font-size: 0.4rem;
            .forSongSpan{
                text-align: center;
                color: #000;
                line-height: 1.2rem;
                word-spacing: 0.1rem;
                letter-spacing: 0.2rem;
                font-weight: normal;
            }
        }
        .forSongList{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-content: center;
            flex-wrap: wrap;
            .forSongListItem{
                width: 2.3rem;
                height: 2.7rem;
                padding-bottom: 0.3rem;
                .forSongListItemImg{
                    width: 2.3rem;
                    height: 2.3rem;
                    display: block;
                }
                .forSongListItemBox{
                    width: 100%;
                    .forSongListItemFont{
                        color: #000;
                        height: 0.4rem;
                        font-size: 0.2rem;
                        line-height: 0.4rem;
                        text-align: left;
                        text-indent: 0.2rem;
                        
                    }
                }
            }
        }
    }
}
</style>


