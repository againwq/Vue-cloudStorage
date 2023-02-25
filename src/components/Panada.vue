<script>
/*熊猫登录页的熊猫组件 */
import { computed } from 'vue';
import { useMouse } from '../utils/useMouse'
export default{
    setup(){
        /*获取鼠标位置*/
        const pagePosition = useMouse()
        /*通过计算属性计算出眼球位置再绑定到style上*/
        const position = computed(() => {
            let dw = document.body.clientWidth / 10;
            let dh = document.body.clientHeight / 18;
            return {x: (pagePosition.x / dw).toFixed(2), y: (pagePosition.y / dh).toFixed(2)}
        })
        return{
            position
        }
    }
}
</script>

<template>
 <div class="panda">
            <div class="ear left"></div>
            <div class="ear right"></div>
            <div class="face">
                <div class="eye-shadow left"></div>
                <div class="eye-white left">
                    <div :style="{left: position.x + 'px', top: position.y + 'px'}" class="eye-ball"></div>
                </div>
                <div class="eye-shadow right"></div>
                <div class="eye-white right">
                    <div :style="{left: position.x + 'px', top: position.y + 'px'}" class="eye-ball"></div>
                </div>
                <div class="nose"></div>
                <div class="mouth"></div>
            </div>
            <div class="body"></div>
            <div class="foot left">
                <div class="sole"></div>
            </div>
            <div class="foot right">
                <div class="sole"></div>
            </div>
        </div>

</template>

<style scoped>
.panda{
    /* 相对定位 */
    position: relative;
    width: 200px;
}
/* 脸部 */
.face{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: #fff;
    /* 投影 */
    box-shadow: 0 10px 15px rgba(0,0,0,0.15);
    position: relative;
    z-index: 1;
}
/* 耳朵 */
.ear{
    width: 70px;
    height: 70px;
    background-color: #000;
    border-radius: 100%;
    /* 绝对定位 */
    position: absolute;
    top: -10px;
}
.ear.right{
    right: 0;
}
/* 黑眼圈 */
.eye-shadow{
    width: 50px;
    height: 80px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    top: 40px;
}
.eye-shadow.left{
    transform: rotate(45deg);
    left: 30px;
}
.eye-shadow.right{
    transform: rotate(-45deg);
    right: 30px;
}
/* 眼白 */
.eye-white{
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 100%;
    position: absolute;
    top: 68px;
}
.eye-white.left{
    left: 38px;
}
.eye-white.right{
    right: 38px;
}
/* 眼球 */
.eye-ball{
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 100%;
    position: absolute;
    left: 5px;
    top: 5px;
}
/* 鼻子 */
.nose{
    width: 35px;
    height: 20px;
    background-color: #000;
    border-radius: 42px 42px 60px 60px / 30px 30px 60px 60px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 65px;
}
/* 嘴巴 */
.mouth{
    width: 68px;
    height: 25px;
    border-bottom: 7px solid #000;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 35px;
}
/* 身体 */
.body{
    width: 250px;
    height: 280px;
    background-color: #fff;
    border-radius: 100px 100px 100px 100px / 126px 126px 96px 96px;
    position: relative;
    left: -25px;
    top: -10px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
}
/* 脚 */
.foot{
    width: 82px;
    height: 120px;
    background-color: #000;
    border-radius: 40px 40px 35px 40px / 26px 26px 63px 63px;
    position: absolute;
    bottom: 8px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.2);
    z-index: 3;
}
.foot.left{
    left: -80px;
}
.foot.right{
    right: -80px;
    transform: rotateY(180deg);
}
/* 脚掌-大椭圆 */
.foot::after{
    content: "";
    width: 55px;
    height: 65px;
    background-color: #222;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
/* 脚掌-三个小椭圆 */
.foot .sole,
.foot .sole::before,
.foot .sole::after{
    width: 20px;
    height: 30px;
    background-color: #222;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    margin: auto;
}
.foot .sole::before{
    content: "";
    left: -50px;
}
.foot .sole::after{
    content: "";
    left: 25px;
}
</style>