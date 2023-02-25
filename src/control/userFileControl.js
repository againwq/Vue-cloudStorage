import { ref } from 'vue'
import { getFilesInfo, deleteFile, getFileBody } from '../axios/fileHandle.js'
import { store } from '../store/index.js'
import { fileSizeOptimize } from '../utils/optimizeShow.js'
import { EventBus, EventType } from '../EventBus'

export const userFiles = ref([])

export async function getUserFilesInfo(){
    let filesInfo = await getFilesInfo(store.username)
    if(filesInfo && filesInfo.length){
        filesInfo = filesInfo.map(file => {
            file.filesize = fileSizeOptimize(file.filesize)
            return file
        })
        userFiles.value = filesInfo
    }
}

export async function removeFile(filename){
    await deleteFile(filename ,store.username)
    EventBus.emit(EventType.userFilesHandle, 'deleteFile')
    console.log('delete')
}

export async function dowloadFile(filename){
    await getFileBody(filename ,store.username)
    console.log('download')
}
