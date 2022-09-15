import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
function SelectPakage(){
    const [selected, setSelect] = useState("")
    const select=(even)=>{
        setSelect(even.target.id)
    }
    return(
        <div className="m-2 flex flex-wrap">
            {
                (Array.from(Array(10).keys())).map((value, index)=>{
                    return (<div className={"pakages"+(String(value) === selected? " selected":"")} key={index} id={value} onClick={select}> 
                    {String(value) === selected?<span className="inline-block m-1"><FaCheckCircle className="text-green-600"/></span>:""}
                     {150*value}+{3*index} Dimon <span className="text-green-700 ml-2">$ {value}</span></div>);
                })
            }
        </div>
    )
}


export default SelectPakage;