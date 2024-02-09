import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore(
    {
        //this is reducer for appStore
        reducer:{
            cart:cartSlice.reducer,
        }
    }
);

export default appStore;