import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tempData from "../tempData";

function ProductCard(props){
    async function getProduct(id){
        let product = tempData.products.filter((value)=>value.id === id)[0]
        return product;
    }
    const [product, setProduct]=useState(null);
    useEffect(()=>{
            if(props.productId){
                axios.get(window.apiBaseUrl+"/product/"+props.productId)
                .then(({data})=>{
                    setProduct(data);
                    console.log(data);
                })
                .catch((error)=>{
                    console.error(error)
                })
            }
        }
    , [])
    

    return product === null ?(<div>Loading...</div>):(
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white" id={product._id}>
        <Link to={"/pk/"+product.slug}>
            <img className="w-full" src={product.cover} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-md mb-2 text-center">{product.title}</div>
            </div>
        </Link>
    </div>
    )
}

export default ProductCard;