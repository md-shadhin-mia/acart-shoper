import { FaBars, FaBell, FaCog, FaUser, FaUserAlt } from "react-icons/fa"
export default function NavBar() {
    return (
        <nav className="flex px-2 bg-white shadow justify-center items-center">
            <div className="mx-1 p-1 block md:hidden">
                <span className="p-3 hover:bg-gray-300 rounded-full inline-block"><FaBars className="text-gray-700"/></span>
            </div>
            <div className="ml-auto p-1">
                <span className="p-3 hover:bg-gray-300 rounded-full inline-block"><FaBell className="text-gray-700"/></span>
            </div>
            <div className="mx-1 p-1">
                <span className="p-3 hover:bg-gray-300 rounded-full inline-block"><FaCog className="text-gray-700"/></span>
            </div>
            <div className="mx-1 flex justify-center items-center">
                <span className="text-lx mx-1 font-bold">Gameshop</span>
                <span className="p-3 hover:bg-gray-300 rounded-full inline-block font-bold"><FaUserAlt className="text-gray-700"/></span>
            </div>
        </nav>
    );
}