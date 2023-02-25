<script>
/*登录页面*/
import PandaLogin from '../components/PandaLogin.vue';
export default{
    components:{
        PandaLogin
    },
    setup(){
    }
}
</script>

<template>
    <div class="login">
        <PandaLogin></PandaLogin>
    </div>

</template>
<style scoped>
.login{
    height: 100%;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg, #37e2b2, #2fa080);
}
</style>