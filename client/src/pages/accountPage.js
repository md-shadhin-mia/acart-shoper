import { useState, useEffect } from "react";
import axios from "axios";
import getEmptyAvater from "../getEmptyAvater";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaUserCog, FaUserAlt } from "react-icons/fa";

export default function AccountPage({setAuth}) {
    const [fullname, setFullname] = useState("")
    const [userName, setUserName] = useState("")
    const logout = setAuth;
    useEffect(()=>{
        axios.get(window.apiBaseUrl+"/user")
        .then(({data})=>{
            console.log(data.message);
            setFullname(data.user.fullname);
            setUserName(data.user.username);
        })
        .catch(err=>{
            console.error(err);
        })
    }, []);

    return (
    <div className="w-full">
       <div className="flex md:flex-row flex-col gap-2 w-full md:items-start">
            <div className="bg-white p-4 flex justify-center items-center flex-col">
                <div className="rounded-full border-2 border-gray-300 mx-4 my-2">
                    <img className="rounded-full h-32 w-32 object-cover" src={getEmptyAvater(userName)} alt="profile picture" />
                </div>
                <div className="text-xl font-bold">{fullname}</div>
                <div className="text-sm text-gray-600">{userName}</div>
                <Link to="#" className="flex w-full relative items-center p-2 -mx-3 my-1 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                    <span><FaUserCog /></span>
                    <div className="ml-4"><p className="text-sm">Accout Setting</p></div>
                </Link>
                <hr />
                <button className="flex w-full relative items-center p-2 -mx-3 my-1 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        onClick={()=>setAuth(false)}
                        >
                    <span><FaSignOutAlt /></span>
                    <div className="ml-4"><p className="text-sm">Sign out</p></div>
                </button>
            </div>
            <div className="p-4 flex-grow">
                <div className="text-2xl">Your Account</div>
            </div>
       </div>
    </div>
    );
}