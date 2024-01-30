import Rescard from "./Rescard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BODY_URL } from "../utils/constants";

const Body = () => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const fetchData=async()=>{
        let data= await fetch(BODY_URL);
        let json=await data.json();
        console.log(json);
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);//optional chaining
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
    }

    useEffect(()=>{
        fetchData();
        console.log("useeffect called");
    },[]);

    return list.length===0 ? <Shimmer/>:(
        <div className="body">

            <div className="search">
                <input placeholder="Search for food or restaurant" id="search-bar" value={searchText} onChange={(evt)=>{
                    setSearchText(evt.target.value);
                }}></input>
                <button id="search-btn" onClick={()=>{
                    const searchFiltered = list.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList(searchFiltered);            
                }}>search</button>
            </div>

            <div className="filter">

                <button className="filter-btn" onClick={() => {
                    const filtered = list.filter((res) => res.info.avgRating > 4);
                    setFilteredList(filtered);
                }}>
                    Ratings 4.0+
                </button>

                <button className="filter-btn" onClick={() => {
                    const filtered = list.filter((res) => res.info.sla.deliveryTime < 20);
                    setFilteredList(filtered);
                }}>
                    Fast Delivery
                </button>

                <button className="filter-btn" onClick={() => {
                    const filtered = list.filter((res) => res.info.cuisines.includes("American"));
                    setFilteredList(filtered);
                }}>
                    American
                </button>

                <button className="filter-btn" onClick={() => {
                    const filtered = list.filter((res) => res.info.cuisines.includes("South Indian") || res.info.cuisines.includes("Indian") || res.info.cuisines.includes("North Indian"));
                    setFilteredList(filtered);
                }}>
                    Indian
                </button>

                <button className="filter-btn" onClick={() => {
                    const filtered = list.filter((res) => res.info.cuisines.includes("Chinese"));
                    setFilteredList(filtered);
                }}>
                    Chinese
                </button>

                <button className="filter-btn" onClick={() => {
                    const filtered = list.filter((res) => res.info.cuisines.includes("Desserts") || res.info.cuisines.includes("Ice Cream") || res.info.cuisines.includes("Sweets"));
                    setFilteredList(filtered);
                }}>
                    Desserts
                </button>

                <button className="filter-btn" onClick={() => {
                    const filtered = list.filter((res) => res.info.name.toLowerCase().includes("cafe") || res.info.name.toLowerCase().includes("coffee"));
                    setFilteredList(filtered);
                }}>
                    Only Cafes
                </button>
                
                  </div>
            <div className="res-container">
                {filteredList.map((restaurant) => (
                <Link  key={restaurant.info.id} to = {`/restaurant/${restaurant.info.id}`}><Rescard resData={restaurant.info}/></Link>
                )
                )}
            </div>
        </div>
    );
};


export default Body;