import { useSelector } from "react-redux";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);

    return(
        <div className="mt-24">
            {cartItems.length==0 ? <p className="text-center font-bold text-xl mt-5">Your cart is empty!</p> : 
            cartItems.map((item)=>{
                <div>
                   <p>{item.card.info.name}</p> 
                </div>
            })}
        </div>
    )
}

export default Cart;