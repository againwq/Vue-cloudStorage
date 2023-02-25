<script>
import { NButton, NIcon } from 'naive-ui'
import { CloseCircleOutline as closeIcon, PlaySharp as stopIcon, PauseOutline as continueIcon } from '@vicons/ionicons5'
import { h, ref } from 'vue';
export default {
    props: {
        options: Array
    },
    components: {
        NButton, NIcon, stopIcon, closeIcon, continueIcon
    },
    setup(props) {
        const isUpload = ref(false)
        return {
            props,
            isUpload,
            renderCloseIcon: () => h(closeIcon),
            renderStopIcon: () => h(stopIcon),
            continueUplaodIcon: () => h(continueIcon),
            stopUpload(){
                isUpload.value = false
            },
            startUplaod(){
                isUpload.value = true
            }
        }
    }
}
</script>

<template>
    <div class="item" v-for="(value, index) in props.options" :key="index">
        <div class="info" style="position: relative;" >
            <div class="filename"><span>{{ value.fileName }}</span></div>
            <div class="progress">
                0 {{ value.fileSize.replace(/[0-9]+/g,"").replace('.', '') }} / {{ value.fileSize }}
            </div>
        </div>

        <div class="handleUpload">
            <div class="continue" v-show="isUpload">
                <n-button size="small" @click="stopUpload" quaternary circle :render-icon="continueUplaodIcon"></n-button>
            </div>
            <div class="stop" v-show="!isUpload">
                <n-button size="small" @click="startUplaod" quaternary circle :render-icon="renderStopIcon"></n-button>
            </div>
            <div class="delete">
                <n-button size="small" quaternary circle :render-icon="renderCloseIcon" @click="value.close(value)"></n-button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.item {
    width: 90%;
    height: 40px;
    background: rgba(46, 51, 56, 0.09);
    margin: 0px auto;
    display: flex;
    align-items: center;
    position: relative;
}

.filename {
    line-height: 100%;
    font-size: medium;
    font-weight: 700;
    margin-left: 5px;
    max-width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.progress {
    font-size: 5px;
    margin: 2px 0px 0px 5px
}
.handleUpload {
    position: absolute;
    right: 5px;
    display: flex;
    align-items: center;
}

</style>