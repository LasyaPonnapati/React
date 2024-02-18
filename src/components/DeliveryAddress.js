import { useState } from "react";
import { Link } from "react-router-dom";

const DeliveryAddress=()=>{
    const [phoneNumber, setPhoneNumber]=useState("+91  ");
    return(
        <form className="w-[800px] mt-28 border border-gray-400 rounded-lg ml-[23rem]">

        <div className="flex justify-center my-10">
            <p className="text-3xl">Deliver to this Address</p>
        </div>

        <div className="flex justify-center mb-10">
        <p className="mr-2 mt-1">First Name</p>
        <input className="border border-gray-400 mr-20 rounded-lg h-9 w-60 p-3 focus:outline-none"></input>
        <p className="mr-2 mt-1">Last Name</p>
        <input className="border border-gray-400 rounded-lg h-9 w-60 p-3 focus:outline-none"></input>
        </div>

        <div className="flex ml-9 mb-10">
            <p className="mr-2 mt-1">Phone Number</p>
            <input className="border border-gray-400  mr-20 rounded-lg h-9 w-60 p-3 focus:outline-none" value={phoneNumber} onChange={(evt)=>
                setPhoneNumber(evt.target.value)}></input>
            <p className="mr-2 mt-1">Email</p>
            <input className="border border-gray-400 rounded-lg h-9 w-60 p-3 focus:outline-none"></input>
        </div>

        <div className="flex ml-9 mb-10">
            <p className="mr-2 mt-1">Street Address</p>
            <input className="border border-gray-400 rounded-lg h-9 w-[620px] p-3 focus:outline-none"></input>
        </div>

        <div className="flex ml-9 mb-10">
            <p className="mr-2 mt-1">City</p>
            <input className="border border-gray-400  mr-36 rounded-lg h-9 w-60 p-3 focus:outline-none"></input>
            <p className="mr-2 mt-1">State</p>
            <input className="border border-gray-400 rounded-lg h-9 w-60 p-3 focus:outline-none"></input>
        </div>

        <div className="flex ml-9 mb-10">
            <p className="mr-2 mt-1">Country</p>
            <input className="border border-gray-400  mr-20 rounded-lg h-9 w-60 p-3 focus:outline-none"></input>
            <p className="mr-2 mt-1">Zip/Postal code</p>
            <input className="border border-gray-400 rounded-lg h-9 w-60 p-3 focus:outline-none"></input>
        </div>

        <Link to="/payment"><button className="p-2 bg-gray-100 rounded-lg border border-gray-400 border-1 ml-9  mb-10">continue</button></Link>

        </form>
    )
}

export default DeliveryAddress;