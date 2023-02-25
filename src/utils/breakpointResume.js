const fileParse = function(file){
    const fileReader = new FileReader()
    return new Promise( resolve => {
        fileReader.readAsArrayBuffer(file)
        fileReader.addEventListener('load', (res) => {
            resolve(res.target.result)
        })
    })
}

export{
    fileParse
}