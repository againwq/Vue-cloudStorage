<script>
/*静态网站托管页面 */
import { NInput, NButton } from 'naive-ui'
import FileShowGrid from '../components/ProjectShowGrid.vue'
import { ref } from 'vue'
import buttonGrid from '../static/buttonGrid.svg'
import buttonLine from '../static/buttonLine.svg'
import addIcon from '../static/add.svg'
export default {
    components: {
        NInput, NButton, FileShowGrid, addIcon, buttonGrid, buttonLine
    },
    setup() {
        const loading = ref(false)
        const searchValue = ref('')
        return {
            loading,
            searchValue,
        }
    }
}
</script>
<template>
    <!--搜索框-->
    <div class="handleShow">
        <n-input round v-model:value="searchValue" type="text" placeholder="Search..." :loading="loading"></n-input>
        <!--切换显示方式-->
        <div class="switchModel">
            <n-button quaternary>
                <buttonGrid />
            </n-button>
            <n-button quaternary>
                <buttonLine />
            </n-button>
        </div>
        <!--添加新项目-->
        <n-button size="large" strong secondary class="add">
            Add New
            <addIcon />
        </n-button>
    </div>
    <!--内容区域-->
    <div class="content">
        <FileShowGrid></FileShowGrid>
        <FileShowGrid></FileShowGrid>
        <FileShowGrid></FileShowGrid>
        <FileShowGrid></FileShowGrid>
        <FileShowGrid></FileShowGrid>
        <FileShowGrid></FileShowGrid>
    </div>
</template>

<style scoped>
.content {
    height: 100%;
    width: 80%;
    display: grid;
    margin: 20px auto;
    /*  声明行间距和列间距  */
    grid-gap: 24px;
    /*  声明行的高度  */
    grid-template-rows: 212px;
    /*  声明列的宽度  */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.handleShow {
    margin-top: 10px;
    width: 100%;
    display: flex;
    height: 45px;
}

.n-input {
    width: 50%;
    margin-left: 10%;
    height: 40px;
}

.switchModel {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #eaeaea;
    margin-left: 20px;
    height: 40px;
    padding: 0px 3px;
}

.add {
    margin-left: 18px;
    height: 45px;
}</style>