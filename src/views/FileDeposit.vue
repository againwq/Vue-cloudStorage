<script>
/*网盘功能界面*/
import { NMenu, NButton } from 'naive-ui';
import UploadFileButton from '../components/UploadFile.vue';
import FilesShowLine from '../components/FilesShowLine.vue';
const menuOptions = [
    {
        label: '我的文件',
        key: 0,
    },
    {
        label: '我的共享',
        key: 1,
    },
    {
        label: '回收站',
        key: 2,
        children: [
            {
                label: 'children1',
                key: 'eewa'
            },
            {
                label: 'children2',
                key: 'test'
            }
        ]
    }
]
export default {
    components: {
        NMenu, NButton, UploadFileButton, FilesShowLine
    },
    setup() {
        return {
            menuOptions
        }
    }
}
</script>

<template>
    <div class="main">
        <n-menu :options="menuOptions"></n-menu>
        <div class="content">
            <div class="handleFile">
                <UploadFileButton text="文件上传" />
            </div>
            <div class="container">
                <FilesShowLine></FilesShowLine>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    height: 100%;
    width: 100%;
}

.n-menu {
    width: 200px;
    min-height: 600px;
}

.content {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    min-height: 600px;
    width: 80%;
}

.handleFile {
    width: 100%;
    height: 50px;
}

.n-button {
    width: 100px;
}

.container {
    width: 100%;
    min-height: 400px;
}</style>