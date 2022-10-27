import { Component, useState } from "react"
import Modal from "../componets/modal";
import tempData from "../tempData";
import AddingVerient from "./addingVerient";
import SelectImage from "./selectImage";

import {ReactComponent as BkashIcon} from "../assets/bkash-prement.svg"
import {ReactComponent as RoketIcon} from "../assets/rocket-prement.svg"
import {ReactComponent as CardIcon} from "../assets/card-prement.svg"
import {ReactComponent as NogotIcon} from "../assets/nogot-prement.svg"
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import axios from "axios";
import { Navigate, Navigator } from "react-router-dom";
import withRouter from "../withRouter";

class CreateProductClass extends Component{
    state = {
        title:"",
        cover:"",
        slug:"",
        variants:[],
        imgOpen:false,
        bkashPrement: false,
        nogotPrement: false,
        loaded: true
    }
    constructor(props){
        super(props);
        this.pageTitle = "Create Product";
        this.submitText = "Create Now";
        console.log();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const {title, cover, slug, variants} = this.state;
        console.log({title, cover, slug, variants});
        axios.post(window.apiBaseUrl+"/product", {title, cover, slug, variants})
        .then(res=>{
            console.log(res.data);
            const {title, cover, slug, variants} = res.data;
            console.log({title, cover, slug, variants});
            this.props.router.navigate(-1);
            // this.setState({submited: true})
        })
    }

    render(){
        const {title, slug, cover, imgOpen, bkashPrement, nogotPrement, loaded} = this.state;
        return loaded? (
            <div className="w-full p-4">
                <div className="text-3xl">{this.pageTitle}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="card my-2 p-4">
                        <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400 w-full">
                            <input 
                                type="text" name="title" id="title" 
                                value={title}
                                onChange={(even)=>{
                                    const value = even.target.value
                                    this.setState({title:value, slug:value.toLowerCase().replaceAll(" ","-")});
                                }}
                                className={"w-full max-w-full "+(title !==""?" hasInput":"")}
                            />
                            <label htmlFor="password">Product Title</label>
                        </div>

                        <div className="flex">
                            <div className="bg-gray fieldgroup bg-gray-300 align-middle border-gray-200 rounded-l-lg font-bold text-gray-700 pt-3">www.yallo.com/</div>
                            <div className="fieldgroup border-2 rounded-r-lg focus-within:border-green-400 w-full ">
                                <input 
                                    type="text" name="password" id="password" 
                                    value={this.state.slug}
                                    onChange={(even)=>this.setState({ slug:even.target.value})}
                                    className={"w-full max-w-full "+(slug !==""?" hasInput":"")}
                                />
                                <label htmlFor="password">Slug</label>
                            </div>
                        </div>
                    </div>

                    <div className="card my-2 p-4">
                        <div className="text-lg pb-2">
                            Adding Image
                        </div>
                        <SelectImage onChange={(url)=>this.setState({cover:url, imgOpen:false})} opened={imgOpen}/>
                        <button className="h-36 w-36 border-dashed border-4 hover:border-black hover:bg-gray-200" onClick={()=>this.setState({imgOpen:true})}>
                            {cover==""?
                                <h1 className="text-5xl ">+</h1>:
                                (<img src={cover} className="object-cover w-full h-full" />)}
                        </button>
                    </div>
                    <div className="card my-2 p-4">
                        <h1 className="text-lg">Prement Method</h1>
                        <div className="flex flex-col ">
                            <div className={"flex items-center p-2 cursor-pointer rounded-lg m-2"+(bkashPrement? " bg-green-200":"")}
                                 onClick={()=>{this.setState({ bkashPrement: !bkashPrement })}}
                            >
                                <BkashIcon className="h-12 w-12 p-1 border rounded-lg  border-blue-300"/>
                                <h1 className="text-sm p-2">Bkash Prement</h1>
                                {
                                    bkashPrement?<FaCheckCircle className="text-2xl ml-auto text-green-600"/>:""
                                }
                            </div>
                            <div className={"flex items-center p-2 cursor-pointer rounded-lg m-2"+(nogotPrement? " bg-green-200":"")}
                                 onClick={()=>{this.setState({ nogotPrement: !nogotPrement })}}
                                 >
                                <NogotIcon className="h-12 w-12 p-1 border rounded-lg border-blue-300"/>
                                <h1 className="text-sm p-2">Nogot Prement</h1>
                                {
                                    nogotPrement? <FaCheckCircle className="text-2xl ml-auto text-green-600"/>:""
                                }
                            </div>
                        </div>
                    </div>
                    <div className="card my-2 p-4">
                        <AddingVerient variants={this.state.variants} bkashPrement={bkashPrement} nogotPrement={nogotPrement} onChange={(variants)=>this.setState({ variants})}/>
                    </div>
                </div>
                <div className="flex">
                    <button className="btn btn-primary ml-auto mt-2" onClick={this.handleSubmit}>{this.submitText}</button>
                </div>
            </div>
    ):(
        <div className="flex justify-center items-center">
            <FaSpinner className="text-3xl animate-spin m-8" />
        </div>
    )
 }
}


export {CreateProductClass};


const CreateProduct=withRouter(CreateProductClass);
export default CreateProduct;

