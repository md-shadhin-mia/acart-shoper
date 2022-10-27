import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
function SelectPakage({variant, setVeriantSelect, onSelectVarient}){
    const [selected, setSelect] = useState("")
    return(

        <div>
            <div className="m-2 flex flex-wrap">
                {
                    (variant).map((value, index)=>{
                        return (
                        <div className={"pakages"+(value._id === selected? " selected":"")} key={index} id={value._id} onClick={()=>{setSelect(value._id);setVeriantSelect(value);}}> 
                        {value._id === selected?<span className="inline-block m-1"><FaCheckCircle className="text-green-600"/></span>:""}
                        {value.title} <span className="text-green-700 ml-2">$ {value.price}</span></div>);
                    })
                }

                
            </div>
            <div className="actions py-2 border-t-2 flex">
                <button className={"btn btn-success ml-auto"+(selected === ""? " bg-gray-600 opacity-50 pointer-events-none":"")} onClick={()=>{onSelectVarient()}}>continue</button>
            </div>
        </div>
        
    )
}


export default SelectPakage;