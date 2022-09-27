import axios from "axios";
import React, { useEffect, useState } from "react";

import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom"
import CreateProduct from "./admin-componet/createProduct";
import Customers from "./admin-componet/customars";
import ProductDelete from "./admin-componet/productDelete";
import ProductsList from "./admin-componet/productsList";
import UpdateProduct from "./admin-componet/updateProduct";
import AuthRoute from "./authRoute";
import Layout from "./layout";
import AccountPage from "./pages/accountPage";
import AdminPage from "./pages/adminPage";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Topup from "./pages/topup";
function App() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authTocken") != null);
  const navigation = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("authTocken") != null)
    {
      axios.defaults.headers.common["x-access-token"] = localStorage.getItem("authTocken");
    }
    else{
      delete axios.defaults.headers.common["x-access-token"];
    }
  });

  function logout(log){
    if(log){
      axios.defaults.headers.common["x-access-token"] = localStorage.getItem("authTocken");
      setAuthenticated(true)
    }else{
      window.localStorage.removeItem("authTocken");
      window.localStorage.removeItem("isAdmin");
      setAuthenticated(false);
    }
  }

  return (
 
          <Routes>
            <Route element={<AuthRoute auth={authenticated}/>}>
              <Route path="admin" element={<AdminPage />} >
                <Route path="dashboard" element={<h1>Dashboard</h1>}/>
                  <Route path="products">
                    <Route path="" element={<ProductsList />} />
                    <Route path="create-new" element={<CreateProduct />}/>
                    <Route path="update/:id" element={<UpdateProduct />} />
                    <Route path="delete/:id" element={<ProductDelete />} />
                  </Route>
                  <Route path="customers" element={<Customers />}>
                </Route>
              </Route>
            </Route>

            <Route element={<Layout auth={authenticated} setAuth={logout}/> }>
              <Route path="" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              
              <Route path="signin" element={<Signin setAuth={logout}/>}/>
              <Route path="signup" element={<Signup setAuth={logout}/>}/>

              <Route element={<AuthRoute auth={authenticated}/>}>
                <Route path="account" element={<AccountPage setAuth={logout} />} />
                <Route path="pk">
                  <Route path=":slug" element={<Topup/>} />
                </Route>
              </Route>

            </Route>

          </Routes>        

  );
}



export default App;
