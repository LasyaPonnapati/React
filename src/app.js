import React, {lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResDetails from "./components/Resdetails.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(()=>import("./components/Grocery.js"));
    
const App = () => (
    <div>
        <Header />
        <Outlet/>
    </div>
);

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
            }
            ],
        errorElement:<Error/>
    },
    {
        path:"/restaurant/:resId",
        element:<ResDetails/>
    }
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);