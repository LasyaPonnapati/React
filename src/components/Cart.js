import { useDispatch, useSelector } from "react-redux";
import { MENUIMG_URL } from "../utils/constants";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    // console.log(cartItems);
    const dispatch=useDispatch();

    return(
        <div className="my-20">
            {cartItems.length==0 ? <p className="text-center font-bold text-xl mt-5">Your cart is empty!</p>:
            <div>
                <button className="p-2 bg-gray-100 rounded-lg ml-[320px] border border-gray-400 border-1" onClick={()=>dispatch(clearCart())}>clearCart</button>
                <Link to="/"><button className="p-2 bg-gray-100 ml-2 rounded-lg border border-gray-400 border-1">Add More Items</button></Link>
                <Link to="/checkout"><button className="p-2 bg-gray-100 rounded-lg ml-2 border border-gray-400 border-1" >CheckOut</button></Link>
                {cartItems.map((item,index)=>{
                const itemCount = cartItems.filter((cartItem) => item.card.info.id === cartItem.card.info.id).length;
                return(
                <div data-testid="item" key={item.card.info.id} className="w-7/12 bg-gray-100 rounded-xl shadow-lg mx-auto mt-5 p-2">

                    <div className="flex justify-between p-1">

                    <div className="m-2">
                   <p className="text=xl font-bold">{item.card.info.name} - 
                   Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                   {item.card.info.itemAttribute.vegClassifier === "VEG" ? <p className="text-green-600 mt-1">VEG</p>:<p className="text-red-500 mt-1">NON-VEG</p>}
                   <p className="text-gray-500 text-sm mt-2 w-[650px]">{item.card.info.description}</p>

                   <div className="flex w-[100px] mt-4 ml-1">
                   <button className="border border-red-400 px-2 py-1 bg-red-200 rounded-tl-lg rounded-bl-lg" onClick={()=>dispatch(removeItem(index))}>-</button>
                   <p className="border-t border-b border-red-400 px-4 py-1 bg-red-200">{itemCount}</p>
                   <button className="border border-red-400 px-2 py-1 bg-red-200 rounded-e-lg" onClick={()=>dispatch(addItem(index))}>+</button>
                   </div>

                   </div>

                   <div>
                   <img src={`${MENUIMG_URL}${item.card.info.imageId}`} alt="image not available" className="rounded-2xl h-[155px] w-[165px] p-2"/>
                   </div>

                   </div>

                   

                </div>
                )})}
        </div>
        }
        </div>
    )
}

export default Cart;