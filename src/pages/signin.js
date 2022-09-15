import { useState } from "react";

function Signin() {
    const [emailValue, setEmailValue] = useState("")
    const [PasswordValue, setPasswordValue] = useState("")

    return (
        <div className="w-full lg:w-6/12 px-4">
            <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-white rounded-lg border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                        <h6 className="text-blueGray-500 text-sm font-bold">Sign In with</h6>
                    </div>
                    <div className="btn-wrapper text-center"><button
                            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                            type="button"><img alt="..." className="w-5 mr-1"
                                src="/notus-react/static/media/github.6c955556.svg"/>Github</button><button
                            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                            type="button"><img alt="..." className="w-5 mr-1"
                                src="/notus-react/static/media/google.eae9aa93.svg"/>Google</button></div>
                    <hr className="mt-6 border-b-1 border-blueGray-300"/>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold"><small>Or sign In with credentials</small>
                    </div>
                    <form>
                        <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400 mb-2">
                            <input 
                                type="text" name="email" id="email" 
                                value={emailValue}
                                onChange={(even)=>setEmailValue(even.target.value)}
                                className={emailValue !==""?"hasInput":""}
                                required
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400">
                            <input 
                                type="text" name="password" id="password" 
                                value={PasswordValue}
                                onChange={(even)=>setPasswordValue(even.target.value)}
                                className={PasswordValue !==""?"hasInput":""}
                                required
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                       
                        <div className="text-center mt-6">
                            <button
                                className="btn btn-success text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="button">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;