import { ref } from 'vue'
import { store } from '../store/index.js'
import { uploadPromiseAll, verifyMD5 } from '../axios/fileHandle.js'
import { EventBus, EventType } from '../EventBus'
import {computeFileMD5} from '../utils/computeMD5.js'

export const files = ref([]) //存储用户选择上传的文件

/**
 * 
 * @param {File} file 
 * @param {string} dirPath 
 * @param {Function} handleNewFile 
 * @param {Function} handleQuickFinish 
 * @param {Function} handleIsUploadFile 
 */
async function invaildMD5(file, dirPath = '/default', handleNewFile, handleQuickFinish, handleIsUploadFile){
    const MD5 = await computeFileMD5(file)
    const type = file.name.split('.')[file.name.split().length - 1]
    const result = await verifyMD5({ username: store.username, name: file.name, size: file.size, type, MD5, dirPath})
    if(result && result.isNew){
        handleNewFile(file)
    }
    else if(result && result.quickFinish){
        handleQuickFinish(file)
    }
    else if(result && result.isUpload){
        const chunkCount = result.chunkCount
        handleIsUploadFile(file, chunkCount)
    }
}

/**
 * 挂在input的change属性上的方法
 * @param {Event} e 
 */
export async function getFiles(e) {
    const filesName = files.value.map(file => file.name)
    for (let file of e.target.files) {
        if(filesName.includes(file.name)){
           window.$message.error(`${file.name}文件重复了`)
        }else{
            files.value.push(file)
        }
    }
}

/**
 * 
 */
export async function uploadFiles(){
    const verifyMD5AsyncTask = []
    files.value.forEach((file) => {
        const aTask = invaildMD5()
    })
    /* await uploadPromiseAll(files.value)
    EventBus.emit(EventType.userFilesHandle, 'addFile')
    files.value = [] */
}