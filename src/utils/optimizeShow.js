export function fileSizeOptimize(size) {
    let count = 0
    while (size > 1024) {
        size = (size / 1024).toFixed(2)
        count++
    }
    switch (count) {
        case 0: return `${size} B`
        case 1: return `${size} KB`
        case 2: return `${size} MB`
        case 3: return `${size} G`
    }
}


