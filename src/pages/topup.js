import axios from "axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
import GameinfoForm from "../componets/gameInfoForm";
import PayNow from "../componets/payNow";
import PrementMethod from "../componets/prementMethod";
import SelectPakage from "../componets/selectPakage";

function Topup(){
    const params = useParams();
    const [step, setStep] = useState(1);
    const [product, setProduct] = useState(null);
    const actions = ["Information of Games", "Select Package", "Prement Mathod", "Finish"];
    const [variantSelect, setVariantSelect] = useState();
    //for post
    const [product_id, setProduct_id]= useState("");
    const [game_id, setGame_id]= useState("");
    const [variant_id, setVariant_id]= useState("");
    const [prement_method, setprement_method]= useState("");
    //for prement
    const [orderData, setOrderData] = useState(null);
    async function OrderSubmit(){
        // console.log({product_id, game_id, variant_id, prement_method})
        setStep(4);
        axios.post(window.apiBaseUrl+"/order", {product_id, game_id, variant_id, prement_method})
        .then(({data})=>{
            console.log(data);
            setOrderData(data.order);
        })
        .catch(err=>{
            console.error(err);
        })
    }
    const formStep = (step)=>{
        switch (step) {
            case 1:
                return <GameinfoForm onGameinform={(product)=>{setGame_id(product); setStep(2);}} />
            case 2:
                return <SelectPakage variant={product.variants} setVeriantSelect={setVariantSelect} onSelectVarient={()=>{setVariant_id(variantSelect._id); setStep(3);}}/>
            case 3:
                return <PrementMethod variant={variantSelect} onOrderSubmit={OrderSubmit}
                 onSelectPrement={(prement)=>{setprement_method(prement)}}/>
            case 4: 
                return <PayNow orderData={orderData}/>
            default:
                break;
        }
    }

    useEffect(()=>{
        axios.get(window.apiBaseUrl+"/slug/"+params.slug)
        .then(({data})=>{
            setProduct(data);
            console.log(data);
            setProduct_id(data._id);
        })
        .catch(err=>{
            console.error(err);
        })
    },[])

    return product == null?(<FaSpinner className="animate-spin text-8xl p-6"/>):(
        <div className = "topup w-full">
            <h1 className="text-3xl">{product.title}</h1>
            <div className="max-w-3xl mx-auto mt-4">
                <div className="card p-5 w-full">
                    <h1 className="text-3xl mb-1 text-center">
                        {actions[step-1]}
                    </h1>
                    <div className="form-progress relative h-4">
                        <div className="w-full h-1 bg-gray-500 absolute top-2 left-0">
                            <div className = "absolute top-0 bottom-0 left-0 bg-green-500 transition-all duration-500" style={{width:((step-1)*33.333)+"%"}}></div>
                        </div>
                        <div className={"form-progress-indicator one"+(step > 0? " active":"")}></div>
                        <div className={"form-progress-indicator two"+(step > 1? " active":"")}></div>
                        <div className={"form-progress-indicator three"+(step > 2? " active":"")}></div>
                        <div className={"form-progress-indicator four"+(step > 3? " active":"")}></div>
                        <p id="form-progress-completion" className="js-form-progress-completion sr-only" aria-live="polite">99% complete</p>
                    </div>
                    {formStep(step)}
                    {/* <div className="actions py-2 border-t-2 flex">
                        {(step > 1 && 4 > step) && (<button className="btn bg-gray-500" onClick={()=>{setStep(step-1)}}>Back</button>)}
                        <button className="btn btn-success ml-auto" onClick={()=>{setStep(step+1)}}>continue</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Topup;