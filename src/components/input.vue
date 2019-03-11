<template>
    <div class="headerIpt">
        <input type="text" id="headerIpt1" placeholder="搜索">
    </div>
</template>

<script>
export default {
    name:'Ipt'
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
        color: rgb(149,194,165);
        background: rgb(42,170,109);
        border: none;
        width: 100%;
        height:0.62rem;
        text-align: center;
        outline: none;
    }
}
</style>


