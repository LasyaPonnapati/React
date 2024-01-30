
import Shimmer from "./Shimmer";
import { MENUIMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useResdetails } from "../utils/useResdetails";

const ResDetails = () => {
    const {resId}=useParams();
    
    const resInfo=useResdetails(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, areaName, avgRating, totalRatingsString, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;
    const offers = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const itemCards=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

    return (
        <div className="res-details">

            <div className="card1">
                <div className="ex-ratings">
                    <h3>{name}</h3>
                    <p>{cuisines.join(", ")}</p>
                    <p>{areaName}</p>
                </div>
                <div className="ratings">
                    <p><i className="fa-solid fa-star" id="star" />{avgRating}</p>
                    <div className="line1"></div>
                    <p id="total-ratings">{totalRatingsString}</p>
                </div>
            </div>

            <div className="line2"></div>

            <div className="card2">
                <div className="msg">
                <h3><i className="fa-regular fa-clock"></i> {deliveryTime} MINS</h3>
                <h3>{costForTwoMessage}</h3>
                </div>
                <div className="offers">
                    {offers.map((offer) => (
                        <div key={offer.info.couponCode} className="offer">
                            <p>{offer.info.header}</p>
                            <p>{offer.info.couponCode}|{offer.info.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="line2"></div>

            <div className="card3">
            <h3>MENU</h3>
            <div className="line3"></div>
            <div className="menu">
                {itemCards.map((item)=>{
                    return(
                        <div key={item.card.info.id} className="item">
                            <div className="details">
                            <h4>{item.card.info.name}</h4>
                            <p>Rs.{item.card.info.price/100}</p>
                            <p id="serving">{item.card.info.description}</p>
                            <button>ADD TO CART</button>
                            </div>
                            <img src={`${MENUIMG_URL}${item.card.info.imageId}`} alt="img not available"/>
                            <div className="line2"></div>
                        </div>
                    )
                })}
            </div>
            </div>

        </div>
    )
}

export default ResDetails;