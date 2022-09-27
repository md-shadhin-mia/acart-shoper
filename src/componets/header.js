import {FaBars, FaUserAlt, FaUserCircle} from "react-icons/fa";
import {ReactComponent as Logo} from "../logo.svg"
import {Link} from "react-router-dom"
import Avatar from "./avatar";

function Header(props){
  const {auth} = props;
    return (
      <div className="header-content">
        <header className="py-3 lg:py-0 bg-white shadow-md mdk-header--fixed" data-aos="fade-down" id="navbar" data-primary="data-primary">
            <div className="max-w-6xl  mx-auto lg:px-8 px-2 flex items-center">
              <div className="items-center">
                <Link to="/" className="flex items-center text-xl w-sidebar mr-4 hover:no-underline">
                    <span className="mr-1 -mt-1 text-primary">
                      <Logo className="h-8 w-8"/>
                    </span>
                    <span><strong className="text-3xl">GameBazar</strong></span>
                </Link>
              </div>

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
                      {
                        auth ? <>
                        <li>
                          <Avatar setAuth={props.setAuth}/>
                        </li>
                        </>:
                        <>
                        <li>
                        <Link to="/signin" className="items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold" id="options-menue2" aria-haspopup="true" aria-expanded="true">
                          Login
                        </Link>
                      </li>
                    
                      <li className="mr-4 text-muted">or</li>
                      <li>
                        <Link to="/signup" className="btn btn-success" href="login.html">Sign up</Link>
                      </li>
                        </>
                      }
                  </ul>
              </div>
            </div>
          </header>
      </div>
        
    )
}

export default Header;