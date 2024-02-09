import { useDispatch, useSelector } from "react-redux";
import { MENUIMG_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    // console.log(cartItems);
    const dispatch=useDispatch();

    return(
        <div className="my-20">
            {cartItems.length==0 ? <p className="text-center font-bold text-xl mt-5">Your cart is empty!</p>:
            <div>
                <button className="p-2 bg-gray-100 rounded-lg ml-[320px] border border-gray-400 border-1" onClick={()=>dispatch(clearCart())}>clearCart</button>
                {cartItems.map((item,index)=>{
                return(
                <div data-testid="item" key={item.card.info.id} className="w-7/12 bg-gray-100 rounded-xl shadow-lg mx-auto mt-5 p-2">

                    <div className="flex justify-between p-1">

                    <div className="m-2">
                   <p className="text=xl font-bold">{item.card.info.name} - 
                   Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                   {item.card.info.itemAttribute.vegClassifier === "VEG" ? <p className="text-green-600 mt-1">VEG</p>:<p className="text-red-500 mt-1">NON-VEG</p>}
                   <p className="text-gray-500 text-sm mt-2 w-10/12">{item.card.info.description}</p>
                   <button className="border border-red-300 bg-red-100 rounded-lg p-1 mt-3" onClick={()=>dispatch(removeItem(index))}>Remove</button>
                   </div>

                   <div>
                   <img src={`${MENUIMG_URL}${item.card.info.imageId}`} alt="image not available" className="rounded-2xl w-[130px] h-[155px] p-2"/>
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