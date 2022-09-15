import ProductCard from "../componets/productCard";
import SwipeBanner from "../componets/swipeBanner";

function Home(){
    return (
        <span className="text-3xl font-bold">
            <SwipeBanner />
            Home
            <div className="w-full">
                <ProductCard />
            </div>
        </span>
    )
}

export default Home;