import axios from 'axios';

export const loginUser=async (email:string, password:string)=>{
    const res = await axios.post('http://localhost:3000/api/v1/user/signin',{email,password});
    if(res.status !== 200){
        throw new Error('Unable to Login')
    }
    const data = await res.data;
    return data;
}

export const signUpUser=async (name:string, email:string, password:string)=>{
    const res = await axios.post('http://localhost:3000/api/v1/user/signup',{name,email,password});
    if(res.status !== 201){
        throw new Error('Unable to SignUp')
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

export const deleteUserChat=async ()=>{
    const res = await axios.delete('http://localhost:3000/api/v1/chat/delete');
    if(res.status !== 200){
        throw new Error('Unable to Authenticate')
    }
    const data = await res.data;
    return data;
}


export const logoutUser=async ()=>{
    const res = await axios.get('http://localhost:3000/api/v1/user/logout');
    if(res.status !== 200){
        throw new Error('Unable to Authenticate')
    }
    const data = await res.data;
    return data;
}