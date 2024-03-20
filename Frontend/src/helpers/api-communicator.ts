import axios from 'axios';

export const loginUser=async (email:string, password:string)=>{
    const res = await axios.post('http://localhost:3000/api/v1/user/signin',{email,password});
    if(res.status !== 200){
        throw new Error('Unable to Login')
    }
    const data = await res.data;
    return data;
}

export const verifyUser=async ()=>{
    const res = await axios.get('http://localhost:3000/api/v1/user/auth-status');
    if(res.status !== 200){
        throw new Error('Unable to Authenticate')
    }
    const data = await res.data;
    return data;
}

export const sendChatMessage  = async(message:string)=>{
    const res = await axios.post('http://localhost:3000/api/v1/chat/new',{message});
    if(res.status !== 200){
        throw new Error('Unable to Send Chat')
    }
    const data = await res.data;
    return data;
}



export const getAllUserChat=async ()=>{
    const res = await axios.get('http://localhost:3000/api/v1/chat/all-chat');
    if(res.status !== 200){
        throw new Error('Unable to Authenticate')
    }
    const data = await res.data;
    return data;
}