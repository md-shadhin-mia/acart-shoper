import axios from "axios";
import { useState } from "react";
import { FaCheck, FaCheckCircle, FaMoneyCheckAlt, FaSpinner } from "react-icons/fa";

function PayNow({orderData}){
    const [loaded, setloaded]=useState(null);
    function payHandle() {
        axios.put(window.apiBaseUrl+"/order-pay/"+orderData._id)
        .then(({data})=>{
            window.open("http://mdshadhinkn@gmail.com")
            setloaded(true);
        })
        .catch(err=>console.error(err));
        setloaded(false);

    }

    return orderData !== null?(
        <div className="flex flex-col items-center">
            <div className="w-full flex items-center justify-center pb-8">
                <span className="p-2"><FaCheck className="text-green-600" /></span><h1 className="text-sm font-bold">Your Order in Submited</h1>
            </div>
            <div className="text-center">
                <h1 className="text-xl">Bkash Payment</h1>
                <p className="text-sm font-bold">Your Have to use Reffer number for this order</p>
                <h1 className="text-6xl">{orderData.prement_info}</h1>
                {   loaded === null? (<button className="btn bg-green-600 hover:bg-green-700 m-4" onClick={payHandle} >Pay Now</button>):
                    loaded === false?(<FaSpinner className="text-2xl animate-spin" />):
                    (<FaCheckCircle className="text-6xl text-green-600" />)
                    }
            </div>
        </div>
    ):(
        <div className="w-full flex items-center justify-center pb-8">
            
            <span className="p-2"><FaSpinner className="animate-spin" /></span><h1 className="text-sm font-bold">Your Order in Submiting...</h1>
        </div>
    )
}

export default PayNow;