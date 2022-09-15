import { useState } from "react";

function GameinfoForm(){
    const [gameId, setGameId] = useState("");
    const [gamePassword, setGamePassword] = useState("");
    
    return (
        <div>
            <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400">
                <input 
                    type="text" name="lastName" id="lastName" 
                    value={gameId}
                    onChange={(even)=>setGameId(even.target.value)}
                    className={gameId !==""?"hasInput":""}
                />
                <label htmlFor="lastName">Game id</label>
            </div>
            
            <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400">
                <input 
                    type="text" name="password" id="lastName" 
                    value={gamePassword}
                    onChange={(even)=>setGamePassword(even.target.value)}
                    className={gamePassword !==""?"hasInput":""}
                />
                <label htmlFor="lastName">Game Password</label>
            </div>
        </div>
    
    )
}

export default GameinfoForm;