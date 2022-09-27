import { useState } from "react";

function GameinfoForm(props){
    const [gameId, setGameId] = useState("");
    // const [gamePassword, setGamePassword] = useState("");
    
    
    return (
        <div>
            <div className="fieldgroup w-full border-2 rounded-lg focus-within:border-green-400">
                <input 
                    type="text" name="lastName" id="lastName" 
                    value={gameId}
                    onChange={(even)=>setGameId(even.target.value)}
                    className={"w-full"+(gameId !==""?" hasInput":"")}
                />
                <label htmlFor="lastName">Game id</label>
            </div>
            <div className="actions py-2 border-t-2 flex">
                <button className={"btn btn-success ml-auto"+(gameId === ""? " bg-gray-600 opacity-50 pointer-events-none":"")} onClick={()=>{props.onGameinform(gameId)}}>continue</button>
            </div>
        </div>
    
    )
}

export default GameinfoForm;