import { ReactNode, createContext, useEffect, useState } from "react";


type User={
    name :String,
    email:String
}
type UserAuth ={
    islogedIn : boolean,
    user:User|null,
    login:(email:String,password:String)=> Promise<void>,
    signUp:(name:String,email:String,password:String)=>Promise<void>,
    logout:()=>Promise<void>
}

const AuthContext =  createContext<UserAuth|null>(null);
const AuthProvider = ({children}:{children:ReactNode})=>{
    const [user,setUser] = useState<User|null>(null);
    const [isLoggedIn,setIsLoggedIn] =useState(false);

    useEffect(()=>{

    },[]);

    const login = async(email:String,password:String)=>{};
    const signUp = async(name:String,email:String,password:String)=>{};
    const logout = async()=>{}

    const value ={
        user,
        isLoggedIn,
        login,
        signUp,
        logout
    }
}