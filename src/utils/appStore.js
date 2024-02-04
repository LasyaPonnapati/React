import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore(
    {
        //this is reducer for appStore
        reducer:{
            cart:cartReducer
        }
    }
);

export default appStore;