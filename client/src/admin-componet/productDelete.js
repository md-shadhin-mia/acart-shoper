import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"

function ProductDelete(props) {
    const params = useParams();
    const [titleMain, setTitleMain] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(window.apiBaseUrl+"/product-details/"+params.id)
        .then((res)=>{
            // console.log(res.data);
            const {title, slug, cover, variants} = res.data;
            setTitleMain(title);
            console.log({title, slug, cover, variants});
        }).catch(err=>{
            console.error(err);
        })
    })
    function handleDelete(){
        axios.delete(window.apiBaseUrl+"/product-delete/"+params.id)
        .then((res)=>{
            console.log(res.data);
            navigate(-1);
        }).catch(err=>{
            console.error(err);
        })
    }
    return (
        <div className=" card flex items-center flex-col m-16 p-8">
            <span className="m-4 p-4 border border-red-600 rounded-full"><FaTrashAlt className="text-3xl text-red-600"/></span>
            <h1 className="text-2xl p-2 font-bold"> {titleMain} </h1>
            <h1 className="text-xl p-2"> Are you Sure to Delete product?</h1>
            <div className="flex">
                <button className="btn bg-gray-700 hover:bg-gray-600 w-full m-1" onClick={()=>navigate(-1)}>Cancle</button>
                <button className="btn bg-red-700 hover:bg-red-600 w-full  m-1" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default ProductDelete;