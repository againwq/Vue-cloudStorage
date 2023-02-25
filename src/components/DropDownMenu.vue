<script>
/*点击头像时的下拉菜单组件 */
import { NCard } from 'naive-ui'
function logout(){
    
}
export default{
    components:{
        NCard
    },
    setup(){
        return{
            logout
        }
    }
}
</script>

<template>
<n-card embedded hoverable content-style="padding: 0">
<div class="item theme">
    <span>Theme</span>
</div>
<div class="item logout" @click="logout">
    <span>Logout</span>
</div>
</n-card>
</template>

<style scoped>
.n-card{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 225px;
    height: 376px;
    z-index: 3;
    position: absolute;
    top: 50px;
    right: 20px;
    border-radius: 10px;
    box-shadow: 0, 0,8px, 30px, rgba(0, 0, 0, 0.12);
}
.item{
    height: 30px;
    width: 185px;
    padding: 5px 20px;
    margin: 10px 0px;
    font-size: large;
    cursor: pointer;
    color: #666;
}
.item:hover{
    background-color: #eaeaea;
    color: black;
}
span{
    line-height: 30px;
}
</style>