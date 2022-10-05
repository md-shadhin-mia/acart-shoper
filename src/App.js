import axios from "axios";
import React, { useEffect, useState } from "react";

import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom"
import CreateProduct from "./admin-componet/createProduct";
import Customers from "./admin-componet/customars";
import OrderList from "./admin-componet/orderList";
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
  useEffect(()=>{
    if(localStorage.getItem("authTocken") != null)
    {
      axios.defaults.headers.common["x-access-token"] = localStorage.getItem("authTocken");
      axios.get(window.apiBaseUrl+"/user")
      .then((res)=>{
        console.log("login.. ", res.data);
        window.sessionStorage.setItem("user_id", res.data.user._id)
        if(res.data.user.role==="admin"){
            window.sessionStorage.setItem("isAdmin", true);
        }else{
            window.sessionStorage.removeItem("isAdmin");
        }
      }).catch(err=>console.error)
    }
    else{
      delete axios.defaults.headers.common["x-access-token"];
    }
  },[authenticated]);

  function logout(log){
    if(log){
      axios.defaults.headers.common["x-access-token"] = localStorage.getItem("authTocken");
      setAuthenticated(true)
    }else{
      window.localStorage.removeItem("authTocken");
      window.sessionStorage.removeItem("isAdmin");
      window.sessionStorage.removeItem("user_id")
      setAuthenticated(false);
    }
  }

  function login(auth){
      window.localStorage.setItem("authTocken",auth.token);
      if(auth.admin){
          window.sessionStorage.setItem("isAdmin", true);
      }else{
          window.sessionStorage.removeItem("isAdmin");
      }
      logout(true);
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
                  <Route path="customers" element={<Customers />} />
                  <Route path="orders" element={<OrderList />} />
              </Route>
            </Route>

            <Route element={<Layout auth={authenticated} setAuth={logout}/> }>
              <Route path="" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              
              <Route path="signin" element={<Signin login={login} />}/>
              <Route path="signup" element={<Signup login={login} />}/>

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
