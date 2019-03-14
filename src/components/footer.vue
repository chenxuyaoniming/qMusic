<template>
    <div id="Footer">
        <audio id="msgAudio"></audio>

        <div class="FooterImg">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552468151075&di=cc7f957ca116316de80d99a08e8090da&imgtype=0&src=http%3A%2F%2Fimg.name2012.com%2Fuploads%2Fallimg%2F180315%2F212Z9C16-10.jpg" alt="" :class="[pl ? 'FooterImgUrl FooterImgMove' : 'FooterImgUrl FooterImgStop']">
        </div>
        <div class="FooterSongText">
            <p>{{song.name? song.name : '还未选择歌曲奥~'}}</p>
            <span>左右切换滑动可选择下一首</span>
        </div>
        <div class="FooterSongButton" @click="playMenu">
            <div class="FooterSongButtonS">
            </div>
        </div>
        <div class="FooterSongList">
            <span class="iconfont icon-menu-fold"></span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
            pl:false
        }
    },
    computed:{
        songList(){
            return this.$store.state.songList
        },
        song(){
            return this.$store.state.sing
        }
    },
    watch:{
        'song':function(a,b){
            console.log(a)
            if(a !== null){
                this.msg.pause();
                this.play(a.url)
            }
        }
    },
    mounted(){
        let msg = document.querySelector('#msgAudio');
        this.msg = msg;
    },
    methods:{
        play(song){
            let that = this;
            setTimeout(()=>{
                that.msg.src = song;
                that.pl = true;
                that.msg.play()
            },500)
        },
        playMenu(){
            if(this.pl){
                this.msg.pause();
                this.pl = false;
            }else{
                this.msg.play();
                this.pl = true;
            }
        }
    }

}
</script>

<style lang="scss" scoped>
    #Footer{
        width: 100%;
        // background: rgb(49, 195, 124);
        background: #fff;
        padding: 0.12rem 0.16rem;
        box-sizing: border-box;
        border-top:1px solid #e4fff1;
        box-shadow: 0 0 -0.04rem #e4fff1;
    }
    .FooterImg,.FooterSongText,.FooterSongButton,.FooterSongList{
        float: left;
    }
    .FooterImg{
        height: 0.8rem;
        width: 0.8rem;
        // background: red;
        margin-right: 0.2rem;
        .FooterImgUrl{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            background: red;
            display: block;
        }
        .FooterImgMove{
            animation: crcle 20s linear infinite;
        }
        .FooterImgStop{
            transform: rotate(0);
        }

    }
    .FooterSongText{
        width: 4.4rem;
        height: 0.8rem;
        padding: 0.1rem 0 ;
        box-sizing: border-box;
        // background: chartreuse;
        font-size: 0.3rem;
        >p{
            color: #000;
            text-align: left;
        }
        >span{
            color: rgb(110,165,142);
            display: block;
            text-align: left;
        }
    }
    .FooterSongButton{
        width: 0.7rem;
        height: 0.8rem;
        margin: 0 0.2rem;
        position: relative;
        .FooterSongButtonS{
            width: 0.7rem;
            height: 0.7rem;
            border: 0.05rem solid rgb(43,200,119);
            box-sizing: border-box;
            border-radius: 50%;
            position: absolute;
            top: 0.05rem;
        }
    }
    .FooterSongList{
        height: 0.8rem;
        width: 0.68rem;
        // background: aqua;
        position: relative;
        span{
            color: rgb(43,200,119);
            display: block;
            font-size: 0.7rem;
            position: absolute;
            top: 0.05rem;
        }
    }
    @keyframes crcle{
        0%{ -webkit-transform: rotate(0deg);}
        50%{ -webkit-transform: rotate(180deg);}
        100%{ -webkit-transform: rotate(360deg);}
    }
</style>
