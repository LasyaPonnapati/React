import { createSlice } from "@reduxjs/toolkit";

const fromSlice=createSlice({
    name:"form",
    initialState:{
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        streetAddress:"",
        city:"",
        state:"",
        country:"",
        pinCode:"",
    },
    reducers:{
        updatedAddress:(state,action)=>{
            state.firstName=action.payload.firstName;
            state.lastName=action.payload.lastName;
            state.phoneNumber=action.payload.phoneNumber;
            state.email=action.payload.email;
            state.streetAddress=action.payload.streetAddress;
            state.city=action.payload.city;
            state.state=action.payload.state;
            state.country=action.payload.country;
            state.pinCode=action.payload.pinCode;
        }
    }
});

export const {updatedAddress} =fromSlice.actions;
export default fromSlice;