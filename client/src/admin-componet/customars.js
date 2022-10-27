import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { FaEllipsisV } from "react-icons/fa";
import getEmptyAvater from "../getEmptyAvater";


export default function Customers(){
    const [customers, setCustomer]=useState([]);
    useEffect(()=>{
        axios.get(window.apiBaseUrl+"/users")
        .then(res=>{
            console.log(res.data);
            setCustomer(res.data);
        }).catch((err)=>{
            console.error(err);
        })
    }, [])
    return (
        <div id="customers" className="m-4">
            <div className="text-xl">Customers</div>
            <div className="p-4 bg-white overflow-x-auto">

                <table className="border-collapse w-full border border-slate-400 bg-white text-sm shadow-sm">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="border border-slate-300  font-semibold p-4 text-slate-900 text-left">Avar</th>
                            <th className="w-[40%] border border-slate-300  font-semibold p-4 text-slate-900 text-left">Name</th>
                            <th className="w-[40%] border border-slate-300  font-semibold p-4 text-slate-900  text-left">Email</th>
                            <th className="border border-slate-300  font-semibold p-4 text-slate-900  text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        customers.map(
                        (customer, index)=>{
                            return (
                                <tr key={index} id={customer._id}>
                                    <td className="border border-slate-300 p-4 text-slate-500">{<img src={getEmptyAvater(customer.username)} className="h-8 w-8 rounded-full"/>}</td>
                                    <td className="border border-slate-300  p-4 text-slate-500 ">{customer.fullname}</td>
                                    <td className="border border-slate-300 p-4 text-slate-500">{customer.username}</td>
                                    <td className="border border-slate-300  p-4 text-slate-500 ">
                                        <div className="relative">
                                            <button className="p-2 rounded-full hover:bg-gray-200"><FaEllipsisV /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })

                        }
                    </tbody>
                </table>
  
            </div>
        </div>
    )
}