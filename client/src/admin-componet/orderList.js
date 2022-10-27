import axios from "axios";
import moment from "moment/moment";
import { useEffect } from "react";
import { useState } from "react";
import { FaEllipsisV, FaGripVertical, FaSpinner } from "react-icons/fa";

export default function OrderList() {
    const tabs = ["All Orders", "Padding Orders", "Complited Orders", "Canceled Orders"];
    const [selectedTab, setTab] = useState(0);
    const [orders, setOrders]= useState(null);
    const [updatedOrder, setUpdatedOrder]= useState(null);
    const [actionIndex, setActionIndex]=useState(-1);

    useEffect(function (){
        console.log("feacing orders");
        setOrders(null);
        axios.get(window.apiBaseUrl+"/orders")
        .then(({data})=>{
            console.log("Orders array", data);
            setOrders(data);
        }).catch(err=>console.log(err));
    },[selectedTab,updatedOrder])
    function closeActions(){
        setActionIndex(-1);
    }
    useEffect(function (){
        if(actionIndex >= 0){
            window.addEventListener("click", closeActions);
        }else{
            window.removeEventListener("click", closeActions);
        }
    },[actionIndex])


    function complite(id){
        axios.put(window.apiBaseUrl+"/order-status/"+id, {status:"complete"})
        .then(({data})=>{
            console.log("Order ", data);
            setUpdatedOrder(orders)
        }).catch(err=>console.log(err));
    }
    
    function calcel(id){
        axios.put(window.apiBaseUrl+"/order-status/"+id, {status:"cancelled"})
        .then(({data})=>{
            console.log("Order ", data);
            setUpdatedOrder(orders)
        }).catch(err=>console.log(err));
    }

    function progress(id){
        axios.put(window.apiBaseUrl+"/order-status/"+id, {status:"progress"})
        .then(({data})=>{
            console.log("Order ", data);
            setUpdatedOrder(orders)
        }).catch(err=>console.log(err));
    }

    return (
        <div id="orderlist" className="p-2 md:p-4 m-2 md:m-4 bg-white">
            <h1 className="text-2xl my-2">Orders</h1>
            <ul className="flex my-4">
                {
                    tabs.map((tab, index)=>{
                        return <li key={index} className={"px-2 transition-colors border-b-2"+(index === selectedTab? " border-blue-600":"")}>
                            <button className="p-2" onClick={()=>{setTab(index)}}>{tab}</button>
                            </li>
                    })
                }
            </ul>
            <div className="overflow-x-auto pb-4">
                {
                    orders !== null?
                    (<table className="border-collapse table-auto text-sm  overflow-x-scroll w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 rounded-tl font-medium p-4 pl-4 pt-0 pb-3 bg-slate-200 text-black text-left">Action</th>
                            <th className="border border-gray-300 rounded-tl font-medium p-4 pl-4 pt-0 pb-3 bg-slate-200 text-black text-left">product</th>
                            <th className="border border-gray-300  font-medium p-4 pt-0 pb-3 bg-slate-200 text-black ">Variant</th>
                            <th className="border border-gray-300  font-medium p-4 pt-0 pb-3 bg-slate-200 text-black ">Price</th>
                            <th className="border border-gray-300 rounded-tr font-medium p-4 pr-4 pt-0 pb-3 bg-slate-200 text-black">customer</th>
                            <th className="border border-gray-300 rounded-tr font-medium p-4 pr-4 pt-0 pb-3 bg-slate-200 text-black">Game_id</th>
                            <th className="border border-gray-300 rounded-tr font-medium p-4 pr-4 pt-0 pb-3 bg-slate-200 text-black">Prement_method</th>
                            <th className="border border-gray-300 rounded-tr font-medium p-4 pr-4 pt-0 pb-3 bg-slate-200 text-black">Pay_info</th>
                            <th className="border border-gray-300 rounded-tr font-medium p-4 pr-4 pt-0 pb-3 bg-slate-200 text-black">is Pay</th>
                            <th className="border border-gray-300 rounded-tr font-medium p-4 pr-4 pt-0 pb-3 bg-slate-200 text-black">Status</th>
                            <th className="border border-gray-300 rounded-tr font-medium p-4 pr-4 pt-0 pb-3 bg-slate-200 text-black">Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white ">
                        {
                            orders.map((order, index)=>{
                                return (
                                    <tr key={index} className="bg-gray-100 hover:bg-green-50">
                                        <td className="border border-slate-100 p-4 pl-4 text-black">
                                            <div className="relative">
                                                <button className="p-2 rounded-full hover:bg-gray-200" onClick={(event)=>{setActionIndex(index);event.stopPropagation()}}><FaEllipsisV /></button>
                                                <div className={"absolute bg-white z-[1024] flex card top-0 left-full"+(actionIndex!==index?" hidden":"")} 
                                                onClick={()=>setActionIndex(-1)}>
                                                    <button className="bg-gray-100 m-1 hover:bg-green-100 rounded px-4 py-2" onClick={()=>{complite(order._id)}}>Complete</button>
                                                    <button className="bg-gray-100 m-1 hover:bg-green-100 rounded px-4 py-2" onClick={()=>{calcel(order._id)}}>Cancle</button>
                                                    <button className="bg-gray-100 m-1 hover:bg-green-100 rounded px-4 py-2" onClick={()=>{progress(order._id)}}>Progress</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.product_id.title}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.variant.title}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.variant.price}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.customer.fullname}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.game_id}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.prement_method}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.prement_info}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.payed? "True":"False"}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{order.status}</td>
                                        <td className="border border-slate-200 p-4 pl-4 text-black">{moment(order.createdAt).format('lll')}</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table> ):(
                    <div className="flex justify-center">
                        <span className="animate-spin"><FaSpinner className="text-3xl"/></span>
                    </div>
                )
                }               
            </div>
            
        </div>

    )
}