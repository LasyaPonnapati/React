import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { MENUIMG_URL } from "../utils/constants";

const MenuItems=({data})=>{
    // console.log(data);
    const dispatch=useDispatch();
    return(
        <div>
        {data.map((item,index)=>{
            return<div key={item.card.info.id} className="p-3">
            <div className="flex">

            <div className="w-10/12">
            <h3 className="text-lg">{item.card.info.name}</h3> 
            <h3 className="text-sm">Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</h3>
            <p className="text-gray-500 text-sm">{item.card.info.description}</p>
            <button className="text-sm border border-green-500 rounded-lg p-1 my-2 bg-green-100 hover:bg-green-500" onClick={()=>{
                dispatch(addItem(item));
            }}> + Add to cart</button>
            </div>

            <div className="w-2/12">
            <img src={`${MENUIMG_URL}${item.card.info.imageId}`} alt="image not available" className="w-28 h-28 rounded-lg ml-3"/>
            </div>

            </div>
            {data.length-1 > index ? <div className="border border-gray-300 w-[740px] mt-5"></div> : <div className="border border-gray-100 w-[740px] my-5"></div>}
            </div>
        })}
        </div>
    )
}

export default MenuItems;