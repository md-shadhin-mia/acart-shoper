import { Link } from "react-router-dom";

function ProductCard(){
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Link to="/pakage/the_coldes_sunset">
                <img className="w-full" src="https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">The Coldest Sunset</div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;