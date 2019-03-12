<template>
    <div class="login">
        <mt-header :title="isShow ? '注册' : '登录'" class="head">
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <div class="loginForm">
            <form >
                <div class="Pass loginBox" v-if="isShow">
                    <label for="UserNick" class="formLabel">昵称：</label>
                    <input type="text" id="UerNick" class='iptStyle' placeholder="请输入昵称"
                    v-model="nickName"/>
               </div>
                <div class="User loginBox">
                    <label for="UserName" class="formLabel">账号：</label>
                    <input type="text" id="UserName" class='iptStyle' placeholder="账号/邮箱/手机" v-model="username"/>
                </div>
               <div class="Pass loginBox">
                    <label for="UserPass" class="formLabel">密码：</label>
                    <input type="password" id="UserPass" class='iptStyle' placeholder="请输入密码"
                    v-model="password"/>
               </div>
               
               <button class="loginBtn" @click.stop="toReg" v-if="isShow">注册</button>
               <button class="loginBtn" @click.stop="toLogin" v-if="!isShow" >登录</button>

            </form>
        </div>
        <span class="loginP">忘记密码?</span>
        <span class="loginP" @click="toRegister">去注册</span>

    </div>
</template>

<script>

import Vue from 'vue';
import {Header , Button , Indicator ,Toast} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
import 'mint-ui/lib/style.css';

export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            nickName:'',
            isShow:false
        }
    },
    watch:{
        '$route':function(){
            if(this.$route.params.type === 'login'){
                this.isShow = false;
            }else{
                this.isShow = true;
            }
        }
    },
    mounted(){
        if(this.$route.params.type === 'login'){
            this.isShow = false;
        }else{
            this.isShow = true;
        }
    },
    computed:{
        uuid(){
            return this.$store.state.uuid
        }
    },
    methods:{
        toReg(){
            var data = {
                key:'00d91e8e0cca2b76f515926a36db68f5',
                phone:this.username,
                passwd:this.password,
                name:this.nickName
            }
            Indicator.open('Loading...');

            this.$axios.get('https://www.apiopen.top/createUser?',{
                params:data
            }).then(res=>{
                console.log(res,'res')
                Indicator.close();
                if(res.data.code !== 200){
                    let instance = Toast(`${res.data.msg}`);
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
                if(res.data.code === 200){
                    let instance = Toast(`${res.data.msg}`);
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
                
            }).catch(err=>{
                console.log(err,'err')
                Indicator.close();
            })
        },
        toRegister(){
            this.$router.push('/login/register')
        },
        toLogin(){
            let that = this;
            var data = {
                key:'00d91e8e0cca2b76f515926a36db68f5',
                phone:this.username,
                passwd:this.password
            }
            this.$axios.get('https://www.apiopen.top/login',{
                params:data
            }).then(res=>{
                console.log(res,'res')
                Indicator.close();
                if(res.data.code !== 200){
                    let instance = Toast(res.data.msg);
                    setTimeout(() => {
                        instance.close();
                    }, 1000);
                }
                if(res.data.code === 200){
                    let instance = Toast(res.data.msg);
                    console.log(res.data)
                    setTimeout(() => {
                        instance.close();
                        that.$router.push('/home');
                        that.$store.commit('getUid',res.data.data.name)
                    }, 2000);
                }
                
            }).catch(err=>{
                console.log(err,'err')
                Indicator.close();
            })
            
        }
    }
}
</script>


<style lang="scss" scoped>
.head{
    background: rgb(49, 195, 124);
    font-size: 0.32rem;
}
.loginForm{
    width: 100%;
    padding: 0.2rem;
    // border: 1px solid red;
    box-sizing: border-box;
    color: aquamarine;
    overflow: hidden;
}
.formLabel{
    // color: red;
    color: rgb(73, 160, 99);
    font-size: 0.4rem;
    vertical-align: middle;
}
.loginBox{
    // border: 1px solid red;
    margin-bottom: 0.5rem;
    margin-top: 0.3rem;
    width: 100%;
    float: left;
    border-bottom: 0.02rem solid rgb(29, 134, 61);
}
.iptStyle{
    height: 0.8rem;
    display: inline-block;
    // border: 1px solid red;
    font-size: 0.4rem;
    margin-left: 0.3rem;
    color: rgb(15, 165, 77);
    outline: none;
    border: none;
    background: none;
    &::placeholder{
        color: rgb(120, 197, 161);
    }
}
.loginBtn{
    height: 1rem;
    width: 4rem;
    // background: red;
    background: rgb(15, 165, 77);
    font-size: 0.5rem;
    color: #fff;
    cursor: pointer;
    outline: none;
    margin-bottom: 0.6rem;
}
.loginP{
    color: #000;
    font-size: 0.3rem;
    display: block;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 0.2rem;
    color: rgb(159, 161, 156);
    padding: 0.1rem 0 ;
    text-decoration: underline;
}
</style>

