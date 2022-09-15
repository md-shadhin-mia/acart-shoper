import { useState } from "react";
import { useParams } from "react-router-dom";
import GameinfoForm from "../componets/gameInfoForm";
import PrementMethod from "../componets/prementMethod";
import SelectPakage from "../componets/selectPakage";

function Topup(){
    const params = useParams();
    const [step, setStep] = useState(1);

    const formStep= (step)=>{
        switch (step) {
            case 1:
                return <GameinfoForm />
                break;
            case 2:
                return <SelectPakage />
                break;
            case 3:
                return <PrementMethod />
            default:
                break;
        }
    }

    return (
        <div className = "topup w-full">
            <div>this simple text</div>
            <h1 className="text-3xl">{params.id}</h1>
            <div className="max-w-3xl mx-auto mt-4">
                <div className="card p-5 w-full">
                    <h1 className="text-3xl mb-1 text-center">
                        Information of Games
                    </h1>
                    <div className="form-progress">
                        <progress className="form-progress-bar" min="0" max="100" value={(step-1)*33} step="33" aria-labelledby="form-progress-completion"></progress>
                        <div className={"form-progress-indicator one"+(step > 0? " active":"")}></div>
                        <div className={"form-progress-indicator two"+(step > 1? " active":"")}></div>
                        <div className={"form-progress-indicator three"+(step > 2? " active":"")}></div>
                        <div className={"form-progress-indicator four"+(step > 3? " active":"")}></div>
                        <p id="form-progress-completion" className="js-form-progress-completion sr-only" aria-live="polite">99% complete</p>
                    </div>

                    {formStep(step)}
                    
                    <div className="actions py-2 border-t-2 flex">
                        {step > 1 && (<button className="btn bg-gray-500" onClick={()=>{setStep(step-1)}}>Back</button>)}
                        <button className="btn btn-success ml-auto" onClick={()=>{setStep(step+1)}}>Continie</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topup;