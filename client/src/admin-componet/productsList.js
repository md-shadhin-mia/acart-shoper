
import axios from "axios"
import { useEffect, useState } from "react"
import { FaEdit, FaTrash, FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import tempData from "../tempData"
export default function ProductsList(){
    const [product, setProduct] = useState(null)
    useEffect(()=>{
        axios.get(window.apiBaseUrl+"/products-details")
        .then(res=>{
            setProduct(res.data);
            console.log(res.data);
        })
    }, [])
    return (
        <div className="p-4">
            <div className="flex pb-4 border-gray-400 border-b">
                <h1 className="text-3xl">Products</h1>
                <Link to="create-new" className="btn btn-primary ml-auto">
                    Create new
                </Link>
            </div>

            <div className="bg-white mt-4 p-4" id="products-list">
                {/* products loop */}
            {
                product !== null && product.map((value,index)=>
                    (
                        <div className="product flex p-4 border-b" key={index}>
                            <div className="h-36 w-36 bg-gray-400">
                                <img className="object-cover h-full" src={value.cover} />
                            </div>
                            <div className="flex-grow px-4 flex flex-col">
                                <h1 className="text-2xl font-semibold">{value.title}</h1>
                                <div className="flex mt-auto">
                                    <div className="text-center mx-4">
                                        <div className="text-sm text-gray-400">
                                            veriant
                                        </div>
                                        <div className="text-sm">
                                            {value.variants.length}
                                        </div>
                                    </div>
                                    <div className="text-center mx-4">
                                        <div className="text-sm text-gray-400">
                                            Sell
                                        </div>
                                        <div className="text-sm">
                                            {value.sell}
                                        </div>
                                    </div>
                                    <div className="text-center mx-4">
                                        <div className="text-sm text-gray-400">
                                            Total Sale
                                        </div>
                                        <div className="text-sm">
                                            ${value.total_sell}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Link to={"update/"+value._id} title="Edit" className="p-2 block hover:bg-gray-200 rounded-full">
                                    <FaEdit className="text-yellow-600"/>
                                </Link>
                                <Link to={"delete/"+value._id} title="Delete" className="p-2 block hover:bg-gray-200 rounded-full">
                                    <FaTrashAlt className="text-red-600 "/>
                                </Link>
                            </div>
                        </div>
                    )
                )
            }
            </div>
        </div>
    )
}