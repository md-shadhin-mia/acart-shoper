import { useState } from "react";
import { FaLink, FaMarsStroke, FaStar, FaStarOfLife, FaTrashAlt } from "react-icons/fa";
import VariantAddForm from "./veriaentAdd";


export default function AddingVerient(props){
    const {variants, onChange} = props;
    const [editingMode, setEditionMode]=useState(false);
    function handleNewAdded(variant){

        onChange([...variants, variant])
        setEditionMode(false);
    }
    return editingMode?(<VariantAddForm  {...props } onNewAdded={handleNewAdded} />):(
        <div>
            <div className="flex items-center my-2">
                <h1 className="text-lg">Verients</h1>
                <button className="btn btn-primary ml-auto text-sm p-2" onClick={()=>{setEditionMode(true)}}>Add new</button>
            </div>
            {variants.length === 0 ? (
                <div className="text-2xl text-gray-500 text-center p-4">
                    There is No verient Created
                </div>
                ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Verients Title</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Status</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Price</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-sm divide-y divide-gray-100">
                            {
                            [...variants].map((value, index)=>{
                                return (
                                    <tr key={index}>
                                        <td className="p-2">
                                            <div className="font-medium text-gray-800">
                                                {value.title}
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left"><FaLink /></div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left font-medium text-green-500">
                                                {value.price}
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex justify-center">
                                                <button onClick={()=>onChange([...variants].filter((verient)=>verient.title !== value.title))}>
                                                    <FaTrashAlt className="w-6 h-6 hover:text-red-600 rounded-full hover:bg-gray-100 p-1 overflow-visible" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}