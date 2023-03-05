<script>
/*文件上传的组件 */
import {  h } from 'vue';
import {  NButton, useDialog } from 'naive-ui';
import { CloudUploadOutline as uploadIcon, AddOutline as addDirIcon } from '@vicons/ionicons5'
import ShowSelectFile from './ShowSelectFile.vue'
export default {
    props: {
        width: Number,
        height: Number,
    },
    components: {
        NButton, uploadIcon, addDirIcon, ShowSelectFile
    },
    setup(props) {
        const dialog = useDialog()
        return {
            props,
            renderUpload: () => h(uploadIcon),
            renderAddDir: () => h(addDirIcon),
            showFilesInfo: () => {
                dialog.success({
                    title: '上传文件',
                    content: () => h(ShowSelectFile),
                    action: () => 'Action'
                })
            }
        }
    }
}
</script>

<template>
    <div class="main">
        <n-button type="primary" round :render-icon="renderUpload" @click="showFilesInfo" size="medium">
            上传文件
        </n-button>
        <n-button style="margin-left: 10px;" strong secondary round :render-icon="renderAddDir" type="primary">
            新建文件夹
        </n-button>
    </div>
</template>
<style scoped>
.main {
    position: relative;
    width: 50%;
    display: flex;
}

.fileHandle {
    display: flex;
}

.alterButton {
    position: relative;
    background-color: #18a058;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    font-weight: 500;
    font-size: small;
}

.alterButton:hover {
    background-color: #0ec764;
}

.input {
    display: none;
}
</style>