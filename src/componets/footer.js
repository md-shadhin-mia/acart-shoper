function Footer(){
    return (
        <div className="pt-8 bg-white mt-8">
            <div className="max-w-6xl  mx-auto px-8">
                <div className="lg:flex -mx-2">
                    <div className="lg:w-2/5 px-2 md:pr-4 mb-4">
                        <div className="font-bold text-lg mb-4 flex items-center">
                        <div className="mr-2">
                            <span className=" text-primary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg></span>
                        </div> 
                        <span> TailStack</span>
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