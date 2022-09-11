import ProductCard from "../componets/productCard";

function Home(){
    return (
        <span className="text-3xl font-bold">
            Home
            <div className="w-full">
                <ProductCard />
            </div>
        </span>
    )
}

export default Home;