import {ReactComponent as BkashIcon} from "../assets/bkash-prement.svg"
import {ReactComponent as RoketIcon} from "../assets/rocket-prement.svg"
import {ReactComponent as CardIcon} from "../assets/card-prement.svg"
import { FaCheckCircle } from "react-icons/fa"
import { useState } from "react"
function PrementMethod(){
    const [selectedMethod, setSelectMethod] = useState("");
    function getPrementMethodIcon(id){
        switch(id){
            case "bkash":
                return <BkashIcon className="h-12 w-18"/>
            case "roket":
                return <RoketIcon className="h-12 w-18"/>
            case "card":
                return <CardIcon className="h-12 w-18"/>
            default :
                return ""
        }
    }

    return (
        <div>
            <div className="flex flex-col">{
                ["roket", "bkash", "card", "bkash"].map((id,index)=>{
                    const keyAndId = index+"-"+id;
                    return (
                        <div 
                            className={"relative flex justify-center items-center p-1 m-1 rounded hover:bg-green-100"+ (selectedMethod===keyAndId?" bg-green-200":"")} 
                            key={keyAndId}
                            id={keyAndId}
                            onClick={()=>{setSelectMethod(keyAndId)}}
                        >
                            {
                                selectedMethod===keyAndId?<span className="absolute left-2"><FaCheckCircle className="text-green-600 "/></span>:""
                            }
                            {
                                getPrementMethodIcon(id)
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default PrementMethod;