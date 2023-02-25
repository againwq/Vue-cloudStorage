import SparkMD5 from 'spark-md5';

/**
 * 计算文件Md5
 * 将文件分片逐步计算最终合并得出整个文件md5, 提升计算速度
 * @param {*} file
 */
 export function computeFileMD5(file) { 
   return new Promise((resolve, reject) => {
      let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
      let chunkSize = 2097152;  // 按照一片 2MB 分片
      let chunks = Math.ceil(file.size / chunkSize); // 片数
      let currentChunk = 0;
      let spark = new SparkMD5.ArrayBuffer();
      let fileReader = new FileReader();
      
      fileReader.onload = function (e) {
        console.log('read chunk nr', currentChunk + 1, 'of', chunks);
        spark.append(e.target.result);
        currentChunk++;

        if (currentChunk < chunks) {
          loadNext();
        } else {
          console.log('finished loading');
          let md5 = spark.end(); //最终md5值
          spark.destroy(); //释放缓存
          resolve(md5);
        }
      };
      
      fileReader.onerror = function (e) {
        console.warn('oops, something went wrong.');
        reject(e);
      };
      
      function loadNext() {
        let start = currentChunk * chunkSize;
        let end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      }
      loadNext();
   }) 
 }


