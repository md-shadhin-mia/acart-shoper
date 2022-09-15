import ProductCard from "../componets/productCard";
import SwipeBanner from "../componets/swipeBanner";

function Home(){
    return (
        <div className="w-full">
            <SwipeBanner />
            <div className="w-full flex flex-wrap mt-2">
                <ProductCard />
            </div>
        </div>
        
    )
}

export default Home;