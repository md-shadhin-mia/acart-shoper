import React from "react";

import { FaBars, FaCogs, FaSearch } from "react-icons/fa"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Footer from "./componets/footer";
import Header from "./componets/header";
import Layout from "./layout";
import AdminPage from "./pages/adminPage";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import Topup from "./pages/topup";
function App() {
  return (
    <BrowserRouter>
        <section className="max-w-6xl  mx-auto px-4 lx:px-8 my-8">
          <Routes>
            <Route element={<Layout />}>
              <Route path="" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="pakage/:id" element={<Topup/>}/>
              <Route path="signin" element={<Signin/>}/>
            </Route>
            <Route path="admin" element={<AdminPage />} >
            </Route>
          </Routes>
        </section>
        
    </BrowserRouter>
    
  );
}



export default App;
