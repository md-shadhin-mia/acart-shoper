import {ReactComponent as Logo} from "../logo.svg"
import { FaChartBar, FaDashcube, FaShippingFast, FaUsers} from "react-icons/fa"
import { Link, NavLink} from "react-router-dom"
export default function Sidebar(){
    return (
        <div className="h-screen fixed top-0 md:left-0 -left-64 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300">
            <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                <Link to="/" className="flex items-center text-xl w-sidebar mr-4 hover:no-underline flex-col justify-center">
                    <span className="mr-1 mt-1 text-primary">
                        <Logo className="h-12 w-12"/>
                    </span>
                    <span><strong className="text-3xl">GameBazar</strong></span>
                </Link>
                <div className="flex flex-col">
                    <hr className="my-4 min-w-full" />
                    <ul className="flex-col min-w-full flex list-none">
                        <li className="rounded-lg mb-4">
                            <NavLink 
                            className={({isActive})=>
                            "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg shadow-md"+(isActive && " bg-green-700 text-white")}
                            to="dashboard"
                            aria-current="page">
                                <span><FaChartBar/></span>Dashboard
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-4">
                            <NavLink 
                            className={({isActive})=>
                                "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg shadow-md"+(isActive && " bg-green-700 text-white")}
                                to="products"
                                aria-current="page"
                            >
                                <span><FaDashcube/></span>Products
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-4">
                            <NavLink 
                            className={({isActive})=>
                                "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg shadow-md"+(isActive && " bg-green-700 text-white")}
                            to="customers"
                            aria-current="page"
                            >
                                <span><FaUsers/></span>Customers
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-4">
                            <NavLink 
                            className={({isActive})=>
                                "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg shadow-md"+(isActive && " bg-green-700 text-white")}
                            to="orders"
                            aria-current="page"
                            >
                                <span><FaShippingFast/></span>Orders
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}