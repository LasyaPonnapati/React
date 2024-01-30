import { FOODIMG_URL } from "../utils/constants";

const Rescard = (props) => {
    const { cloudinaryImageId, name, cuisines, avgRating, areaName } = props?.resData;
    //each variable holds corresponding value for furthur use in the code. 
    return (
      <div className="food-card">
        <img src={`${FOODIMG_URL}${cloudinaryImageId}`} alt="food_img" />
        <div className="ex-img">
        <h3>{name}</h3>
        <h4><i className="fa-solid fa-star" id="star"></i>{avgRating} Stars . {props?.resData?.sla?.deliveryTime} MINS</h4>
        <h4 id="cuisines">{cuisines.join(", ")}</h4>
        <h4 id="areaname">{areaName}</h4>
        </div>
      </div>
    );
  };

  export default Rescard;