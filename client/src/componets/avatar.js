import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaSignOutAlt, FaUserAlt, FaUserCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import {ReactComponent as NogotIcon} from "../assets/nogot-prement.svg";
import getEmptyAvater from "../getEmptyAvater";
export default function Avatar(props){
    const [isOpened, setOpen] = useState(false);
    const [fullname , setFullname] = useState("");
    const [username , setUserName] = useState("");

    const {setAuth} = props;

    useEffect(()=>{
        axios.get(window.apiBaseUrl+"/user")
        .then(({data})=>{
            setFullname(data.user.fullname);
            setUserName(data.user.username);
        })
        .catch(err=>{
            console.error(err);
            setAuth(false);
        })
    }, [])

    function openHandle(event){
        function outclick(){
            setOpen(false);
        }
        setOpen(!isOpened);
        event.stopPropagation();
        if(!isOpened)
            window.addEventListener("click", outclick);
        else
            window.removeEventListener("click", outclick);
    }

return (
    <div className="relative">
        <button
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        type="button" aria-expanded="false"
        onClick={openHandle}>
        <div 
            className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-8 h-8 sm:w-9 sm:h-9 ring-1 ring-white">
            <img className="absolute inset-0 w-full h-full object-cover rounded-full"
                src={getEmptyAvater(username)} alt="John Doe" />
                <span
                className="wil-avatar__name">J</span></div>
        </button>
        {
            isOpened && (
                <div className="absolute right-0 pt-2 z-[1024]">
                    <div className="card p-4 border-opacity-60 border">
                        <div className="flex pb-4 border-b-2">
                            <div 
                                className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full overflow-hidden w-12 h-12 ring-1 ring-white">
                                <img className="absolute inset-0 w-full h-full object-cover rounded-full"
                                    src={getEmptyAvater(username)} alt="John Doe" />
                                    <span
                                    className="wil-avatar__name">J</span></div>
                            

                            <div className="flex-grow mx-4">
                                <div className="text-sm">{fullname}</div>
                                <div className="text-gray-400">{username}</div>
                            </div>
                        </div>

                        <Link to="account" className="flex relative items-center p-2 -mx-3 my-1 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <span><FaUserAlt /></span>
                            <div className="ml-4"><p className="text-sm">Account</p></div>
                        </Link>
                        <Link to="#" className="flex relative items-center p-2 -mx-3 my-1 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
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
                </div>
            )
        }
        
    </div>
    
    )
}