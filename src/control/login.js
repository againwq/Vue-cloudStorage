import router from '../router/index'
import { invaildUser } from '../axios/handleUser'

export async function login(account, password){
    console.log(account, password)
    const res = (await invaildUser(account, password)).data
    if(res.success){
        console.log(res.data)
        router.push('/home')
        window.$message.success(res.data.msg)
        return res.data.user
    }else{
        window.$message.error(res.data.msg)
        return null
    }
}