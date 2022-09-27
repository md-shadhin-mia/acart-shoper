import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../componets/productCard";
import SwipeBanner from "../componets/swipeBanner";

function Home(){
    const [product, setProduct]= useState([]);

    useEffect(()=>{
        axios.get(window.apiBaseUrl+"/products")
        .then(res=>{
            setProduct(res.data);
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);
    return (
        <div className="w-full ">
            <SwipeBanner />
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 mt-4 items-center">
                {[...product].map((value,index)=>{
                    return <ProductCard productId={value._id} key={index} />
                })}
            </div>
        </div>
    )
}

export default Home;