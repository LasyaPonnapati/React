import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckOut=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    let total=0;
    return(
        <div className="my-28 ml-[450px] w-[600px] ">
            {
                cartItems.map((item)=>{
                    total+=item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100;
                    return <div key={item.card.info.id} className="flex justify-between">
                        <p>{item.card.info.name}</p>
                        <p>Rs. {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                    </div>
                })
            }
            <div className="border border-gray-300 w-[600px] my-5"></div>
            <div className="flex justify-between">
            <p className="font-bold text-lg">Amount Payable:</p>
            <p className="font-bold text-lg">Rs.{total}</p>
            </div>
            <div className="border border-gray-300 w-[600px] my-5"></div>
            <div className="flex justify-center">
            <Link to="/"><button className="p-2 bg-gray-100 rounded-lg border border-gray-400 border-1 mr-4">Add More Items</button></Link>
            <Link to="/deliveryAddress"><button className="p-2 bg-gray-100 rounded-lg border border-gray-400 border-1 mr-4">Add Delivery Address</button></Link>
            <Link to="/payment"><button className="p-2 bg-gray-100 rounded-lg border border-gray-400 border-1 mr-4">Add Payment Method</button></Link>
            </div>
        </div>
    )
}

export default CheckOut;