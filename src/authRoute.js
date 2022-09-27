import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute({auth}){

    if(auth){
        return <Outlet />
    }else{
        return <Navigate to="/signin" />
    }

    
}