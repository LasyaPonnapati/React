import MenuItems from "./MenuItems";
import { useState } from "react";

const MenuCategory = ({ data }) => {
    // ,showItems, setExpandCategory
    const[showItems, setShowItems]=useState(false);
    const[opened,setOpened]=useState(false);
    let count=0;
    data.categories.map((category)=>{
        count+=category.itemCards.length;
    })
    return (
        <div className="bg-gray-100 rounded-xl mb-5 p-3 shadow-lg">

            <div className="flex justify-between p-2">
                <h3 className="font-bold">{data.title} ({count})</h3>
                {
                    opened===true ? <i className="fa-solid fa-chevron-up text-black cursor-pointer hover:font-bold" onClick={()=>{
                        setShowItems(!showItems);
                        setOpened(!opened);
                    }}></i>:
                    <i className="fa-solid fa-chevron-down text-black cursor-pointer hover:font-bold" onClick={()=>{
                        setShowItems(!showItems);
                        setOpened(!opened);
                    }}></i>
                    }
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