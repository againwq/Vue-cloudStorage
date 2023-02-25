<script>
import { computed } from 'vue';
import { NButton } from 'naive-ui'
import SelectFileStyle from './SelectFileStyle.vue';
import { files, getFiles } from '../control/selectFilesControl.js'
import { ref } from 'vue'
import { fileSizeOptimize } from '../utils/optimizeShow.js'
export default {
    components: {
        SelectFileStyle, NButton
    },
    setup() {
        const input = ref(null)
        const options = computed(() => {
            return files.value.map((file, index) => {
                return {
                    key: index,
                    fileSize: fileSizeOptimize(file.size),
                    fileName: file.name,
                    close: function (tag) {
                        files.value.splice(tag.key, 1)
                    }
                }
            })
        })
        return {
            options,
            files,
            input,
            getFiles
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="head">
            <n-button tertiary round type="success" @click="input.click()">
                选择文件
            </n-button>
            <input ref="input" @change="getFiles" type="file" multiple style="display: none">
            <n-button v-show="files.length != 0" class="uploadButton" tertiary round type="success">
                全部开始
            </n-button>
        </div>
        <div class="files">
            <SelectFileStyle :options="options" />
        </div>
    </div>
</template>

<style scoped>
.files {
    margin-top: 10px;
    max-height: 300px;
    overflow-y: scroll;
}
.head{
    display: flex;
    position: relative;
}
.uploadButton{
    position: absolute;
    right: 10px;
}
</style>