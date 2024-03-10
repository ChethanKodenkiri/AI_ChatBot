import { ReactNode, createContext } from "react";


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

}