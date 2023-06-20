import axios from "axios";
// axios.defaults.baseURL='http://172.16.0.155:5000/';
axios.defaults.baseURL='https://flamesbackend.onrender.com/'
const registerUrl='/user/';
export const  sendData=(name1,name2)=>{
    return axios.post(registerUrl,{
        firstName:name1,
        secondName:name2
    });
}

export const  updateData=(result,userId)=>{
    return axios.put(registerUrl,{
        value:result,
        id:userId
    });
}

