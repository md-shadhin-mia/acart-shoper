import { useState } from "react";

export default function VariantAddForm({onNewAdded, bkashPrement, nogotPrement}){
    const [title, setTitle]=useState("");
    const [price, setPrice]=useState("");
    const [bkash, setbkash]=useState("");
    const [nogot, setNogot]=useState("");
    function submitHandle(even){
        even.preventDefault();
        onNewAdded({title,price, bkash, nogot});
    }
    return (
        <div >
            <div className="text-lg">Create Veriant</div>
            <form onSubmit={submitHandle}>
                <div className="flex flex-col">
                    <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400 w-full">
                        <input 
                            type="text" name="title" id="title" 
                            value={title}
                            onChange={(even)=>setTitle(even.target.value)}
                            className={"w-full max-w-full "+(title !==""?" hasInput":"")}
                            required
                        />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400 w-full">
                        <input 
                            type="number" name="price" id="price" 
                            value={price}
                            onChange={(even)=>setPrice(even.target.value)}
                            className={"w-full max-w-full "+(price !==""?" hasInput":"")}
                            required
                        />
                        <label htmlFor="price">Price</label>
                    </div>
                    {bkashPrement &&
                        <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400 w-full">
                            <input 
                                type="text" name="baksh" id="bkash" 
                                value={bkash}
                                onChange={(even)=>setbkash(even.target.value)}
                                className={"w-full max-w-full "+(bkash !==""?" hasInput":"")}
                                required
                            />
                            <label htmlFor="bkash">Bkash Link</label>
                        </div>
                    }
                    {
                        nogotPrement &&
                        <div className="fieldgroup border-2 rounded-lg focus-within:border-green-400 w-full">
                            <input 
                                type="text" name="nogot" id="nogot" 
                                value={nogot}
                                onChange={(even)=>setNogot(even.target.value)}
                                className={"w-full max-w-full "+(nogot !==""?" hasInput":"")}
                                required
                            />
                            <label htmlFor="nogot">Nogot Number</label>
                        </div>
                    }
                    
                </div>
                <div className="flex">
                    <button type="submit" className="btn btn-primary ml-auto">Add</button>
                </div>
            </form>
        </div>
    )
}