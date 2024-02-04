import MenuItems from "./MenuItems";
import { useState } from "react";

const MenuCategory = ({ data }) => {
    // ,showItems, setExpandCategory
    const[showItems, setShowItems]=useState(false);
    let count=0;
    data.categories.map((category)=>{
        count+=category.itemCards.length;
    })
    return (
        <div className="bg-gray-100 rounded-xl mb-5 p-3 shadow-lg" onClick={()=>{
            setShowItems(!showItems);
        }}>

            <div className="flex justify-between p-2 cursor-pointer">
                <h3 className="font-bold">{data.title} ({count})</h3>
                <i className="fa-solid fa-angle-down text-black"></i>
            </div>

            <div>
                {showItems && data.categories.map((category) => {
                    return <div key={category.title} className="px-2 mb-5">
                        <h3 className="font-bold underline pb-1 pt-2">{category.title}</h3>
                        <MenuItems data={category.itemCards} />
                    </div>
                })}
            </div>

        </div>
    )
}

export default MenuCategory;