<template>
    <div id="index">
        <Header class="homeHeader"></Header>
        <Ipt :class="[ isShow ? 'homeSearch homeSearchTransform' : 'homeSearch']" ref="search"></Ipt>
        <section ref="box">
            <router-view></router-view>
        </section>
        <Footer class="homeFooter"></Footer>
    </div>
</template>

<script>
import Header from '@/components/header'
import Ipt from '@/components/input'
import Footer from '@/components/footer'
export default {
    name:'index',
    data(){
        return{
            isShow:false,
        }
    },
    components:{
        Header,
        Ipt,
        Footer
    },
    mounted(){
        let box = this.$refs.box;
        let _  = this;
        box.addEventListener('scroll',function(){
            if(this.scrollTop>150){
                if(_.isShow){
                    return
                }else{
                    _.isShow = true;
                    _.$store.commit('changeIsUp')
                } 
            }
            if(this.scrollTop<80){
                if(_.isShow){
                    _.isShow = false;
                    _.$store.commit('changeIsUp')
                }else{
                    return
                } 
            }
        })
    }
}
</script>

<style lang="scss" scoped>
#index{
    height: 100%;
    width: 100%;
    background: #ddd;
    display: flex;
    flex-direction: column;
}
.homeHeader{
    z-index: 3;
}
.homeSearch{
    position: absolute;
    top: 0.74rem;
    left: 0;
    display: block;
    z-index: 1;
    transition: 0.2s;
    transform: translateY(0);
}
.homeSearchTransform{
    display: none;
    // position: fixed;
    transform: translateY(-1rem);
}
section{
    overflow: auto;
    flex: 1;
    background: #fff;
}

.homeFooter{

}

</style>


