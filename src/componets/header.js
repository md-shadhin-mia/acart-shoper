import {FaBars} from "react-icons/fa";
import {ReactComponent as Logo} from "../logo.svg"
import {Link} from "react-router-dom"

function Header(){
    return (
        <header className="py-3 lg:py-0 bg-white shadow-md mdk-header--fixed" data-aos="fade-down" id="navbar" data-primary="data-primary">
            <div className="max-w-6xl  mx-auto px-8 flex flex-wrap items-center">
              <div className="items-center">
                <Link to="/" className="flex items-center text-xl w-sidebar mr-4 hover:no-underline">
                    <span className="mr-1 -mt-1 text-primary">
                      <Logo/>
                    </span>
                    <span><strong>TailStack</strong></span>
                </Link>
              </div>

              {/* search options */}
              {/* <div className="flex-1 flex justify-between">
                <div className="relative text-gray-darker hidden lg:flex flex-grow">
                    <input type="search" name="search" placeholder="Search" className="px-lxshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"/>
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                      <FaSearch />
                    </button>
                  </div>
              </div> */}

              <label data-toggle="sidebar" className="pointer-cursor ml-auto lg:hidden block"><FaBars/></label>
              <input className="hidden" type="checkbox" id="menu-toggle"/>

              <div className="hidden lg:flex lg:items-center lg:w-auto w-full ml-auto" id="menu">
                
                  <ul className="lg:flex items-center justify-between text-md text-gray-900 font-semibold pt-4 lg:pt-0">
                    <li className="relative inline-block text-left">
                      <Link to="features" className="items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold" id="options-menue1" aria-haspopup="true" aria-expanded="true">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold" id="options-menue" aria-haspopup="true" aria-expanded="true">
                        Pricing
                      </Link>
                    </li>
                    <li>
                    </li><li>
                      <Link to="/signin" className="items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold" id="options-menue2" aria-haspopup="true" aria-expanded="true">
                        Sign in
                      </Link>
                    </li>
                  
                    <li className="mr-4 text-muted">or</li>
                    <li>
                      <Link to="/login" className="btn btn-success" href="login.html">Login</Link>
                    </li>
                  </ul>
              </div>
            </div>
          </header>
    )
}

export default Header;