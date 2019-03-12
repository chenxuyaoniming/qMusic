<template>
    <div class="listComponent">
        <img src="http://img4.imgtn.bdimg.com/it/u=2097954234,3414125822&fm=26&gp=0.jpg" alt="" class="listImg">
        <div class="listComBox">
            <span class="listComBoxS1">来看看歌手和音乐号的动态吧</span>
            <span class="listComBoxS2">bbbbbbbbbbbbbbb</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'listComp'
}
</script>

<style lang="scss" scoped>
.listComponent{
    // color: red;
    padding: 0.14rem 0 ;
    overflow: hidden;
    .listImg{
        width: 1.1rem;
        height: 1.1rem;
        display: block;
        float: left;
        margin-right: 0.24rem;
    }
    .listComBox{
        float: left;
        .listComBoxS1{
            display: block;
            color: #000;
            margin-top: 0.19rem;
            margin-bottom: 0.12rem;
            font-size: 0.32rem;
        }
        .listComBoxS2{
            font-size: 0.24rem;
            color: #000;
            display: block;
            text-align: left;
        }
    }
}
</style>


