import { Navigate } from "react-router-dom";

export default function Protected({isLogin,children}){
    if(!isLogin){
        return <Navigate to='/' replace/>
    }
    return children
}