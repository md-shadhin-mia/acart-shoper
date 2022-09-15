import { Outlet } from "react-router-dom";
import Header from "./componets/header";
import Footer from "./componets/footer";

export default function Layout() {
    return (
        <div className="app bg-[#f1f5f9]">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    )
}