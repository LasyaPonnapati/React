import { useState } from "react";
import { Link } from "react-router-dom";

const Payment=()=>{
    const [cashSelected,setCashSelected]=useState(false);
    const [cardSelected,setCardSelected]=useState(false);
    return(
        <div className="my-28 ml-96">

            <div className="flex w-[800px] bg-gray-100 mb-3 rounded-lg border border-gray-400 p-3">
            <div className="h-4 w-4 rounded-3xl border border-black" onClick={()=>{
                if(cardSelected===false){
                setCashSelected(!cashSelected);
                }
                else{
                    alert("please select only one option!")
                }
            }}>{cashSelected && <div className="h-2 w-2 mt-[3px] ml-[3px] bg-black rounded-full"></div>}</div>
            <p className="ml-2 mt-[-5px]">Cash on Delivery/Pay on Delivery</p>
            </div>

            <div className="w-[800px] bg-gray-100 rounded-lg border border-gray-400 p-3">

                <div className="flex">
            <div className="h-4 w-4 rounded-3xl border border-black" onClick={()=>{
                if(cashSelected===false){
                setCardSelected(!cardSelected);
                }
                else{
                    alert("please select only one option!")
                }
            }}>{cardSelected && <div className="h-2 w-2 mt-[3px] ml-[3px] bg-black rounded-full"></div>}</div>
            <p className="ml-2 mt-[-5px]">Debit/Credit Card</p>
                </div>

            {cardSelected && <div className="mt-5">
                    <input placeholder="Card holder Name" className="p-2 border border-gray-400 border-1 focus:outline-none block mb-2 w-[405px]"/>
                    <input placeholder="Card number" className="p-2 border border-gray-400 border-1 focus:outline-none"/>
                    <input placeholder="CVV" className="p-2 border border-gray-400 border-1 focus:outline-none ml-2"/>
                    <p className="mt-3 mb-1 ml-1">Expiry date</p>
                    <input placeholder="month" className="p-2 border border-gray-400 border-1 focus:outline-none"/>
                    <input placeholder="year" className="p-2 border border-gray-400 border-1 focus:outline-none ml-2"/>
            </div>}

            </div>
                <Link to={"/orderPlaced"}><button className="p-2 bg-gray-100 rounded-lg border border-gray-400 border-1 mr-4 mt-3">Place Order</button></Link>
                <p className="text-sm mt-[30px] w-[800px]">Note: if you don't select any one of the payment option and click on place order then Cash on Delivery/Pay on Delivery will be the default method.</p>
        </div>
    )
}

export default Payment;