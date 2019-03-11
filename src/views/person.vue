<template>
    <div class="person">
        <div class="personPic">
            <div class="personPicBox">
                <div class="personPicBoxImg">
                    <img src="https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg" alt="">
                </div>
                <p>
                    静静静静静静
                </p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'person'
}
</script>


<style lang="scss" scoped>
.person{
    padding-top: 0.89rem;
    width: 100%;
}
.personPic{
    width: 100%;
    // border-bottom: 0.04rem solid #000;
    .personPicBox{
        height: 3.5rem;
        width: 3rem;
        box-sizing: border-box;
        margin: auto;
        margin-top: 0.4rem;
        .personPicBoxImg{
            height: 3rem;
            width: 3rem;
            border-radius: 50%;
            box-sizing: border-box;
            border: 0.01rem solid green;
            overflow: hidden;
            >img{
                width: 100%;
                height: 100%;
                transition: 0.2s;
                cursor: pointer;
            }
        }
        >P{
            color: #000;
            height: 0.5rem;
            text-align: center;
            line-height: 0.5rem;
            font-size: 0.3rem;
        }
    }
}
</style>





