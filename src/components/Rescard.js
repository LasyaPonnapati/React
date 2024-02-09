import { FOODIMG_URL } from "../utils/constants";

const Rescard = (props) => {
  console.log(props);
    const { cloudinaryImageId, name, cuisines, avgRating, areaName } = props?.resData;
    //each variable holds corresponding value for furthur use in the code. 
    return (
      <div data-testid="resCard" className="transistion-all duration-200 ease-in-out 0s hover:scale-95">
        <img src={`${FOODIMG_URL}${cloudinaryImageId}`} alt="food_img" className="w-72 h-48 rounded-3xl" />
        <div className="p-4">
        <h3 className="font-bold whitespace-nowrap overflow-hidden">{name}</h3>
        <h4><i className="fa-solid fa-star text-green-700 mr-1"></i>{avgRating} Stars . {props?.resData?.sla?.deliveryTime} MINS</h4>
        <h4 className="text-gray-500 whitespace-nowrap overflow-hidden">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-500">{areaName}</h4>
        </div>
      </div>
    );
  };

  export default Rescard;