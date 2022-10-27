import React from "react"
import { FaTimes } from "react-icons/fa"

export default function Modal(props){
    return (
        <div className={"fixed top-0 right-0 flex justify-center items-center bottom-0 z-[1024] left-0 bg-gray-200 bg-opacity-60"+(props.isOpen?" block": " hidden")}>
            <div className="relative m-4">
                <button onClick={()=>props.close()} className="absolute top-2 right-2" ><FaTimes /></button>
                {
                    props.children
                }
            </div>
        </div>
    )
}