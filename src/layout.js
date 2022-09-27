import { Outlet } from "react-router-dom";
import Header from "./componets/header";
import Footer from "./componets/footer";

export default function Layout(props) {
    return (
        <div className="app bg-[#f1f5f9]">
          <Header {...props}/>
          <div className="max-w-6xl mx-auto px-2 lg:px-8 py-2 w-full flex justify-center">
            <Outlet/>
          </div>
          <Footer/>
        </div>
    )
}