import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Modal from "../componets/modal";
import tempData from "../tempData";

export default function SelectImage(props) {
    const [selectIndex, setSelectIndex]= useState();
    const [selectUrl, setSelectUrl]= useState("");
    const [images, setImages] = useState([]);
    const [totalImage, setTotalImage] = useState(0);
    function close(){
        props.onChange("")
    }

    useEffect(()=>{
        axios.get(window.apiBaseUrl+"/images")
        .then((res)=>{
            console.log(res.data);
            setTotalImage(res.data.lenght)
            setImages(res.data);
        })
    }, [totalImage])

    function uploading(event){
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append("file", file)
        axios.post(window.apiBaseUrl+"/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).then((res)=>{
            console.log(res.data);
            setTotalImage(totalImage+1)
        })
    }

    return (
        <Modal isOpen={props.opened} close={close}>
            <div className="card">
                <div className="text-lg p-4 pr-32 border-b border-gray-300">Select Image</div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 p-4 max-h-64 overflow-y-auto">
                    {
                        
                        images.map((value, i)=> {
                            const src = window.apiBaseUrl + "/image/"+ value._id
                            return (
                                <div className={"relative border-2"+(i===selectIndex?" border-green-500":"")} key={i} onClick={()=>{
                                    setSelectIndex(i);
                                    setSelectUrl(src);
                                    }}>
                                    {src !== "" && <img src={src} key={i} className="h-24 w-24 object-cover" />}
                                    {i===selectIndex && <span className="absolute top-2 left-2"><FaCheckCircle className="text-green-500"/></span>}
                                </div>  
                            );
                        })
                    }
                </div>
                <div className="flex px-4 py-2">
                    <input type="file" accept="image/*" id="upload" className="h-0 w-0" onChange={uploading}/>
                    <label className="btn bg-slate-600 text-white cursor-pointer" htmlFor="upload">Upload</label>
                    <button className="btn btn-primary ml-auto" onClick={()=>props.onChange(selectUrl)}>Select</button>
                </div>
            </div>
        </Modal>
    )
}