import {ReactComponent as BkashIcon} from "../assets/bkash-prement.svg"
import {ReactComponent as RoketIcon} from "../assets/rocket-prement.svg"
import {ReactComponent as CardIcon} from "../assets/card-prement.svg"
import {ReactComponent as NogotIcon} from "../assets/nogot-prement.svg"
import { FaCheckCircle } from "react-icons/fa"
import { useEffect, useState } from "react"
function PrementMethod({variant, onSelectPrement, onOrderSubmit}){
    const [selectedMethod, setSelectMethod] = useState("");
    console.log("it form Prement method", variant);
    function getPrementMethodIcon(id){
        switch(id){
            case "bkash":
                return <BkashIcon className="h-12 w-18"/>
            case "roket":
                return <RoketIcon className="h-12 w-18"/>
            case "nogot":
                return <NogotIcon className="h-12 w-18"/>
            case "card":
                return <CardIcon className="h-12 w-18"/>
            default :
                return ""
        }
    }

    useEffect(()=>{
        if(selectedMethod != ""){
            onSelectPrement(selectedMethod);
        }
    }, [selectedMethod])
    return (
        <div>
            <div className="flex flex-col">
                <div 
                    className={"relative flex justify-center items-center p-1 m-1 rounded hover:bg-green-100"+ (selectedMethod==="bkash"?" bg-green-200":"")+ (variant.bkash==""?" opacity-50 pointer-events-none":"")} 
                    id="bkash"
                    onClick={()=>{setSelectMethod("bkash")}}
                    >
                    {
                        selectedMethod==="bkash"?<span className="absolute left-2"><FaCheckCircle className="text-green-600 "/></span>:""
                    }
                    {
                        getPrementMethodIcon("bkash")
                    }
                </div>
                <div 
                    className={"relative flex justify-center items-center p-1 m-1 rounded hover:bg-green-100"+ (selectedMethod==="nogot"?" bg-green-200":"")+ (variant.nogot==""?" opacity-50 pointer-events-none":"")} 
                    id="nogot"
                    onClick={()=>{setSelectMethod("nogot")}}
                    >
                    {
                        selectedMethod==="nogot"?<span className="absolute left-2"><FaCheckCircle className="text-green-600 "/></span>:""
                    }
                    {
                        getPrementMethodIcon("nogot")
                    }
                </div>
            </div>
            <div className="actions py-2 border-t-2 flex">
                <button className={"btn btn-success ml-auto"+(selectedMethod === ""? " bg-gray-600 opacity-50 pointer-events-none":"")} onClick={onOrderSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default PrementMethod;