import http from './index'

const invaildUser = async function(account, password){
    const res = await http.post('/user/userInvaild', {
        account,
        password,
    })
    return res
}

export{
    invaildUser
}