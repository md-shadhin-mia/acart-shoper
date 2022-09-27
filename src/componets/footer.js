import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../logo.svg";
function Footer(){
    return (
        <div className="pt-8 bg-white mt-8">
            <div className="max-w-6xl  mx-auto px-8">
                <div className="lg:flex -mx-2">
                    <div className="lg:w-2/5 px-2 md:pr-4 mb-4">
                        <div className="font-bold text-lg mb-4 flex items-center">
                            <div className="mr-2">
                                <Link to="/" className="flex items-center text-xl w-sidebar mr-4 hover:no-underline">
                                    <span className="mr-1 -mt-1 text-primary">
                                        <Logo className="h-8 w-8"/>
                                    </span>
                                    <span><strong className="text-3xl">GameBazar</strong></span>
                                </Link>
                            </div> 
                        </div>
                        <p className="text-gray-dark">Stack of beautiful Tailwind CSS UI components.</p>
                    </div>
                    <div className="w-3/5 px-2">
                        <div className="lg:flex -mx-2">
                        <div className="lg:w-1/3 px-2 mb-4">
                            <div className="text-lg font-bold mb-4">Useful</div>
                            <ul className="list-none">
                            <li className="mb-1"><a href="#" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Account</a></li>
                            {/* <!-- <li className="mb-1"><a href="/custom-theme-work" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Custom Work</a></li> -->
                            <!-- <li className="mb-1"><a href="/documentaion" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Theme Documentation</a></li> --> */}
                            </ul>
                        </div>
                        <div className="lg:w-1/3 px-2 mb-4">
                            <div className="text-lg font-bold mb-4">Staff</div>
                            <ul className="list-none">
                            <li className="mb-1"><a href="#" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Bill Stamp</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Jim Corsa</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Sam Smith</a></li>
                            </ul>
                            
                        </div>
                        <div className="lg:w-1/3 px-2 mb-4">
                            <div className="text-lg font-bold mb-4">Get in touch</div>
                            <ul className="list-none">
                            <li className="mb-1"><a href="" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Contact us</a></li>
                            <li className="mb-1"><a href="" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Medium</a></li>
                            <li className="mb-1"><a href="" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Twitter</a></li>
                            <li className="mb-1"><a href="" className="text-gray-dark hover:text-blue-500 font-semibold text-sm">Dribble</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;