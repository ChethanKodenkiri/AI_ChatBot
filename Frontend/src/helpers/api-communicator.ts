import axios from 'axios';

export const loginUser=async (email:string, password:string)=>{
    const res = await axios.post('http://localhost:3000/api/v1/user/signin',{email,password});
    if(res.status !== 200){
        throw new Error('Unable to Login')
    }
    const data = await res.data;
    return data;
}