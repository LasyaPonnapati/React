import React, {lazy,Suspense, useEffect, useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResDetails from "./components/Resdetails.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
// import { UserContext } from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));
const cart=lazy(()=>import("./components/Cart.js"))
    
const App = () => {

    // const[userInfo,setUserInfo]=useState("Default Value");
    // useEffect(()=>{
    //     const data={
    //         name:"lasya",
    //     };
    //     setUserInfo(data.name);
    // },[])
    
    return(
        // <UserContext.Provider value={{userName:userInfo,setUserInfo}}>
    <Provider store={appStore}>
    <div>
        <Header />
        <Outlet/>
    </div>
    </Provider>
    // </UserContext.Provider>
);
}

const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {   
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/Grocery",
                element:<Suspense fallback="Loading..."><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<ResDetails/>
            },
            {
                path:"/cart",
                element:<Suspense fallback="Loading..."><Cart/></Suspense>
            }
            ],
        errorElement:<Error/>
    },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);