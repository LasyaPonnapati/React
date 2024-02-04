import Rescard,{HOC} from "./Rescard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BODY_URL } from "../utils/constants";
import HOC from "./HOC";
// import { UserContext } from "../utils/UserContext";
// import { useContext } from "react";

const Body = () => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    // const{userName,setUserInfo}=useContext(UserContext);

    // console.log(list);

    const fetchData=async()=>{
        let data= await fetch(BODY_URL);
        let json=await data.json();
        // console.log(json);
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);//optional chaining
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const IsOpen=HOC(Rescard);

    return list.length===0 ? <Shimmer/>:(
        <div className="py-20">

            <div className="flex justify-center mx-5 mt-14 mb-20">
                <input placeholder="Search for food or restaurant" className="w-120 h-12 bg-gray-200 pl-4 mr-2 rounded-full focus:outline-none" 
                value={searchText} onChange={(evt)=>{
                    setSearchText(evt.target.value);
                }}></input>
                <button className="bg-red-500 w-28 h-12 rounded-full hover:text-lg" onClick={()=>{
                    const searchFiltered = list.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList(searchFiltered);            
                }}>search</button>
                {/* <input className="border border-black p-2" value={userName} onChange={(e)=>setUserInfo(e.target.value)
                }/> */}
            </div>

            <div className="ml-[150px]">

                 <button className="mr-2 border border-gray-300 border-1 rounded-full px-4 py-1 focus:border-gray-700" onClick={() => {
                    setFilteredList(list);
                }}>
                    ALL
                </button>

                <button className="mr-2 border border-gray-300 border-1 rounded-full px-4 py-1 focus:border-gray-700" onClick={() => {
                    const filtered = list.filter((res) => res.info.avgRating > 4);
                    setFilteredList(filtered);
                }}>
                    Ratings 4.0+
                </button>

                <button className="mr-2 border border-gray-300 border-1 rounded-full px-4 py-1 focus:border-gray-700" onClick={() => {
                    const filtered = list.filter((res) => res.info.sla.deliveryTime < 20);
                    setFilteredList(filtered);
                }}>
                    Fast Delivery
                </button>

                <button className="mr-2 border border-gray-300 border-1 rounded-full px-4 py-1 focus:border-gray-700" onClick={() => {
                    const filtered = list.filter((res) => res.info.cuisines.includes("American"));
                    setFilteredList(filtered);
                }}>
                    American
                </button>

                <button className="mr-2 border border-gray-300 border-1 rounded-full px-4 py-1 focus:border-gray-700" onClick={() => {
                    const filtered = list.filter((res) => res.info.cuisines.includes("South Indian") || res.info.cuisines.includes("Indian") || res.info.cuisines.includes("North Indian"));
                    setFilteredList(filtered);
                }}>
                    Indian
                </button>

                <button className="mr-2 border border-gray-300 border-1 rounded-full px-4 py-1 focus:border-gray-700" onClick={() => {
                    const filtered = list.filter((res) => res.info.cuisines.includes("Chinese"));
                    setFilteredList(filtered);
                }}>
                    Chinese
                </button>

                <button className="mr-2 border border-gray-300 border-1 rounded-full px-4 py-1 focus:border-gray-700" onClick={() => {
                    const filtered = list.filter((res) => res.info.cuisines.includes("Desserts") || res.info.cuisines.includes("Ice Cream") || res.info.cuisines.includes("Sweets"));
                    setFilteredList(filtered);
                }}>
                    Desserts
                </button>

                <button className="mr-2 border border-gray-300 border-1 rounded-full px-4 py-1 focus:border-gray-700" onClick={() => {
                    const filtered = list.filter((res) => res.info.name.toLowerCase().includes("cafe") || res.info.name.toLowerCase().includes("coffee"));
                    setFilteredList(filtered);
                }}>
                    Only Cafes
                </button>
                
                  </div>
            <div className="grid grid-cols-4 gap-10 px-36 py-6">
                {filteredList.map((restaurant) => (
                <Link  key={restaurant.info.id} to = {`/restaurant/${restaurant.info.id}`}>
                    {restaurant.info.isOpen ? <IsOpen resData={restaurant.info}/>:<Rescard resData={restaurant.info}/>}
                </Link>
                )
                )}
            </div>
        </div>
    );
};


export default Body;