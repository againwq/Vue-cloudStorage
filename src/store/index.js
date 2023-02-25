import { reactive } from 'vue'
//简单状态共享
export const store = reactive({
    username: 'xqc',
    setUsername(name){
        this.username = name
    },
})