import { useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import GameinfoForm from "../componets/gameInfoForm";

function Topup(){
    const params = useParams();
    console.log(params)
    const [step, setStep] = useState(1);
    return (
        <div className = "topup">
            <div>this simple text</div>
            <h1 className="text-3xl">{params.id}</h1>
            <div className="grid lg:grid-cols-2 gap-5 mt-4">
                
                <div className="card p-5">
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

                    <GameinfoForm />
                    <div className="actions py-2 border-t-2">
                        <button className="btn btn-success" onClick={()=>{setStep(step+1)}}>Continie</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topup;