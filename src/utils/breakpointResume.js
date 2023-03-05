export class BreakpointUpload {
    constructor() {
        this.file = null
        this.md5 = null
    }
    
    static async run(file, md5){
        this.file = file,
        this.md5 = md5
        return this.createChunck(await this.fileParse())
    }

    static fileParse() {
        const fileReader = new FileReader()
        return new Promise(resolve => {
            fileReader.readAsArrayBuffer(this.file)
            fileReader.addEventListener('load', (res) => {
                resolve(res.target.result)
            })
        })
    }
    static createChunck(fileBuffer){
        const totalSize = fileBuffer.byteLength
        const chunkSize = 5 * 1024 * 1024  // 5MB
        let chunkList = []
        let currentPos = 0
        for(let count = 0; count < Math.ceil(totalSize / chunkSize); count++){
            let chunkItem = new File([fileBuffer.slice(currentPos, currentPos + chunkSize)], count)
            currentPos += chunkSize
            chunkList.push(chunkItem)
        }
        return chunkList
    }
}

