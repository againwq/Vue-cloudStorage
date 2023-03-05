import http from './index.js'
//并发上传（好几次请求同时发出）
export async function uploadPromiseAll(files) {
    const asyncTask = []
    files.forEach(file => {
        const fileData = new FormData()
        fileData.append(file.name, file)
        const aTask = http.post('/file/uploadFile', fileData, { params: { username: 'xqc' } })
        asyncTask.push(aTask)
    })
    const reses = await Promise.allSettled(asyncTask)
    reses.forEach((res) => {
        if (res.status === 'fulfilled') {
            const resData = res.value.data
            if (resData.success) {
                window.$message.success(resData.data.msg)
            } else {
                window.$message.error(resData.data.msg)
            }
        } else {
            window.$message.error(`网络请求错误！！！`)
        }
    })
}
/**
 * 序列化上传chunk
 * @param {Array} chunkList 
 * @param {String} username 
 * @param {String} md5 
 * @param {String} path 
 */
export async function uploadChunkLine(chunkList, username, md5, path) {
    let reses = []
    let count = 0
    for( const chunk of chunkList){
        const formData = new FormData()
        formData.append(chunk.name, chunk)
        const res = await http.post('/file/uploadChunk', formData, { params: { username, md5, path, finish: 0 } })
        console.log(res)
        reses.push(res)
    }
    if(reses.length === chunkList.length){
        const endRes = await http.post('/file/uploadChunk', null, { params: { username, md5, path, finish: 1, total: chunkList.length }})
        console.log(endRes)
    }
 }


/*获取用户所拥有的文件信息 */
export async function getFilesInfo(username) {
    const res = await http.get('/file/getFilesInfo', { params: { username } })
    const resData = res.data
    if (resData.success) {
        return resData.data.files
    } else {
        return null
    }
}

export async function verifyMD5(fileInfo) {
    const res = await http.post('/file/verifyFileMD5', null, { params: fileInfo })
    if (res.data && res.data.success) {
        return res.data.data
    } else {
        console.log(res)
        return null
    }
}

export async function deleteFile(filename, username) {
    const res = await http.delete('/file/delete', { params: { username, filename } })
    console.log(res)
}

export async function getFileBody(filename, username) {
    const res = await http.get('/file/download', { params: { username, filename } })
    console.log(res)
}

