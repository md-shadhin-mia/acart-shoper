import { FaChartBar, FaCog, FaDashcube, FaDatabase, FaMap, FaTable } from "react-icons/fa"
import { Link, Navigate, NavLink, Outlet} from "react-router-dom"
import NavBar from "../admin-componet/navBar"
import Sidebar from "../admin-componet/sidebar"
import {ReactComponent as Logo} from "../logo.svg"
export default function AdminPage(){
    if(sessionStorage.getItem("isAdmin")==null){
        return <Navigate to="/" />
    }
    return (
        <div className="bg-[#f1f5f9] min-h-screen">
            <Sidebar />
            <div className="dashboard-main pl-0 md:pl-64">
                <NavBar />
                <Outlet />
            </div>
        </div>
        )
}