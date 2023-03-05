import { ref } from 'vue'
import { store } from '../store/index.js'
import { uploadChunkLine, verifyMD5 } from '../axios/fileHandle.js'
import { EventBus, EventType } from '../EventBus'
import {computeFileMD5} from '../utils/computeMD5.js'
import {BreakpointUpload} from '../utils/breakpointResume.js'

export const files = ref([]) //存储用户选择上传的文件
/**
 * 
 * @param {File} file 
 * @param {string} dirPath 
 */
async function invaildMD5AndUploadFile(file, dirPath = '/default'){
    const MD5 = await computeFileMD5(file)
    const type = file.name.split('.')[file.name.split().length - 1]
    const result = await verifyMD5({ username: store.username, name: file.name, size: file.size, type, MD5, dirPath})
    console.log(result)
    //如果是新的文件，处理方法
    if(result && result.isNew){
        const chunkList = await BreakpointUpload.run(file ,MD5)
        await uploadChunkLine(chunkList, store.username, MD5, dirPath)
    }
    //如果是已经有的文件，秒传
    else if(result && result.quickFinish){
        console.log('秒传')
    }
    //如果是已经上传了部分的文件，继续上传
    else if(result && result.isUpload){
        const chunkCount = result.chunkCount
        console.log(`${chunkCount}个切片已经上传`)
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
            await invaildMD5AndUploadFile(file)
        }
    }
}

/**
 * 
 */