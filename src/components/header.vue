<template>
    <div id="Header">
        <div class="headerLeft">
            三
        </div>
        <div class="headerCenter">
            <router-link  v-for="(item,index) in list" :key="index"
                :to='url[index]'
            >
                <div :class="[
                isFat[index] ? 'headerCenterTitle headerTitle' :'headerCenterTitle']">
                    {{item}} 
            </div>
            </router-link>
            
        </div>
        <div class="headerRight">
            +
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            list:['我的','音乐馆','发现'],
            isFat:[0,0,0],
            url:['/person','/home','find']
        }
    },
    watch:{
        '$route':function(){
            let name = this.$route.name;
            this.fontSizeFat(name);
        }
    },
    mounted(){
        let name = this.$route.name;
        this.fontSizeFat(name);
    },
    methods:{
        fontSizeFat(str){
            console.log(this.isFat)
            var _ = this;
            switch (str) {
                case 'home':
                    _.isFat = [0,0,0];
                    _.isFat[1] = 1;
                    break;
                case 'person':
                    _.isFat = [0,0,0];
                    _.isFat[0] = 1;
                    break;
                case 'find':
                    _.isFat = [0,0,0];
                    _.isFat[2] = 1; 
                    break;
                default:
                    console.log('====未知路径====')
                    break;
            }
        }
    }
}
</script>


<style lang="scss" scoped>
#Header{
    height: 0.75rem;
    width: 100%;
    background: rgb(49, 195, 124);
    font-size: 0.38rem;
    padding: 0 0.18rem;
    box-sizing: border-box;
    // position: relative;
    .headerLeft,.headerCenter{
        float: left;
        line-height: 0.75rem;
    }
    .headerLeft,.headerRight{
        width: 0.6rem;
    }
    .headerRight{
        float: right;
        line-height: 0.75rem;
    }
    .headerCenter{
        width: 4rem;
        // border: 1px solid #ddd;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -2rem;
    }
    .headerCenterTitle{
        float: left;
        width: 33.3%;
    }
    .headerTitle{
        font-weight: bolder;
    }
}
</style>


