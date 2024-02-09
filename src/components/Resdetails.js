import ResDetailsShimmer from "./resDetailsShimmer";
import { useParams } from "react-router-dom";
import { useResdetails } from "../utils/useResdetails";
import MenuCategory from "./MenuCategory";
import Recomended from "./Recomended";

const ResDetails = () => {
    const {resId}=useParams();
    
    const resInfo=useResdetails(resId);
    
    // const[expandCategory, setExpandCategory]=useState(0);

    if (resInfo === null) {
        return <ResDetailsShimmer/>;
    }

    const { name, cuisines, areaName, avgRating, totalRatingsString, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;
    const offers = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const itemCards=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const recomcategory=itemCards.filter((category)=>{
        return category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
    console.log(recomcategory);
    const reqcategories=itemCards.filter((category)=>{
        return category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    });

    return (
        <div className="flex flex-col justify-center mx-auto my-28 w-[800px]">

            <div className="flex">
                <div className="w-[310px]">
                    <h3 className="text-lg font-bold whitespace-nowrap">{name}</h3>
                    <p className="text-gray-500 whitespace-nowrap">{cuisines.join(", ")}</p>
                    <p className="text-gray-500">{areaName}</p>
                </div>
                <div className="border border-gray-400 rounded-lg p-1 pt-2 relative left-[410px]">
                    <p className="ml-2"><i className="fa-solid fa-star text-green-700 mr-1"/>{avgRating}</p>
                    <div className="border border-gray-400 my-1"></div>
                    <p className="text-xs">{totalRatingsString}</p>
                </div>
            </div>

            <div className="border border-gray-300 w-[800px] my-5"></div>

            <div>
                <div className="flex">
                <h3 className="mr-4"><i className="fa-regular fa-clock"></i> {deliveryTime} MINS</h3>
                <h3>{costForTwoMessage}</h3>
                </div>
                <div className="flex overflow-x-hidden">
                    {offers.map((offer) => (
                        <div key={offer.info.couponCode} className="border-gray-300 border-2 my-4 rounded-xl w-[600px] p-1 mr-4">
                            <p className="text-xs whitespace-nowrap">{offer.info.header}</p>
                            <p className="text-xs whitespace-nowrap">{offer.info.couponCode} | {offer.info.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="border border-gray-300 w-[800px] my-5"></div>

            <div>
                {recomcategory.map((category,index)=>{
                    return <Recomended key={category.card.card.title} data={category}/>
                    // showItems={index===expandCategory ? true : false} setExpandCategory={()=>{setExpandCategory(index)}}
                })}
                {reqcategories.map((category,index)=>{
                    return <MenuCategory key={category.card.card.title} data={category.card.card}/>
                    // showItems={index===expandCategory ? true : false} setExpandCategory={()=>{setExpandCategory(index)}}
                })}
            </div>

        </div>
    );
};

export default ResDetails;