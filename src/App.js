import React from "react";

import { FaBars, FaCogs, FaSearch } from "react-icons/fa"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Footer from "./componets/footer";
import Header from "./componets/header";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="app bg-gray-50">
        <div className="header-content">
          <Header/>
        </div>
        <section className="max-w-6xl  mx-auto px-8 my-8">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </section>
        <Footer/>
      </div>
      
    </BrowserRouter>
    
  );
}



export default App;
