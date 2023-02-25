<script>
/*登录页的登录组件 */
import { NInput, NButton,NTabs, NTabPane, useMessage } from 'naive-ui'
import { ref } from 'vue';
import Panada from './Panada.vue';
import { login } from '../control/login.js'
import { store } from '../store/index.js'
const needUp = ref(false)
const account = ref('')
const password = ref('')
//密码框聚焦事件
function focusInput(){
    needUp.value = true
}
//密码框失焦事件
function removeFocus(){
    needUp.value = false
}
/*获取到用户名 */
async function getUsername(account, password){
    const username = await login(account, password)
    if(username){
        store.setUsername(username)
    }
}
export default{
    components:{
        NInput, NButton, Panada, NTabs, NTabPane
    },
    setup(){
        window.$message = useMessage()
        return{
            needUp,
            account,
            password,
            focusInput,
            removeFocus,
            getUsername
        }
    }
}
</script>

<template>
    <Panada></Panada>
    <div class="loginForm" :class="{up: needUp}">
        <div class="hand left"></div>
        <div class="hand right"></div>
        <h1>用户登录</h1>
        <div class="input">
        <n-input placeholder="用户名" size="small" v-model:value="account"></n-input>
        <n-input @focus="focusInput" @blur="removeFocus" placeholder="密码" size="small" type="password"
            show-password-on="mousedown" v-model:value="password"></n-input>
        </div>
        <n-button @click="getUsername(account, password)" size="small" type="success">登录</n-button>
    </div>
</template>

<style scoped>
.loginForm {
    width: 400px;
    height: 300px;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -110px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    border-radius: 3px;
    flex-direction: column;
    /* 设置过渡 */
    transition: 0.3s;
}

h1{
    color: #1dc797;
    font-weight: normal;
}
.input{
    width: 70%;
    margin-top: 20px;
    margin-bottom: 5px;
}
.n-input{
    width: 100%;
    margin-bottom: 15px;
}
.n-button{
    width: 30%;
}
/* 手 */
.hand,
.hand::before,
.hand::after{
    width: 40px;
    height: 30px;
    background-color: #000;
    border-radius: 50px;
    position: absolute;
    top: 70px;
    left: -20px;
}
.hand::before{
    content: "";
    top: 16px;
    left: 0px;
}
.hand::after{
    content: "";
    top: 32px;
    left: 0px;
}
.hand.right{
    right: -20px;
    left: auto;
}
.up{
    transform: translate(-50%,-180px);
}
</style>
