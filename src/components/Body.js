import Rescard from "./Rescard";
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
    const [emptySearch,setEmptySearch]=useState(false);
    const [searchText, setSearchText] = useState("");

    // const{userName,setUserInfo}=useContext(UserContext);

    // console.log(list);
    const handleOnChange=(e)=>{
        const selectedOption=e.target.value;
        if(selectedOption=="ALL"){
            setFilteredList(list);
        }
        else if(selectedOption=="Ratings 4.0+"){
            const filtered = list.filter((res) => res.info.avgRating > 4);
            setFilteredList(filtered);
        }
        else if(selectedOption=="Fast Delivery"){
            const filtered = list.filter((res) => res.info.sla.deliveryTime < 20);
            setFilteredList(filtered);
        }
        else if(selectedOption=="American"){
            const filtered = list.filter((res) => res.info.cuisines.includes("American"));
            setFilteredList(filtered);
        }
        else if(selectedOption=="Indian"){
            const filtered = list.filter((res) => res.info.cuisines.includes("South Indian") || res.info.cuisines.includes("Indian") || res.info.cuisines.includes("North Indian"));
            setFilteredList(filtered);
        }
        else if(selectedOption=="Chinese"){
            const filtered = list.filter((res) => res.info.cuisines.includes("Chinese"));
            setFilteredList(filtered);
        }
        else if(selectedOption=="Desserts"){
            const filtered = list.filter((res) => res.info.cuisines.includes("Desserts") || res.info.cuisines.includes("Ice Cream") || res.info.cuisines.includes("Sweets"));
            setFilteredList(filtered);
        }
        else if(selectedOption=="Only Cafes"){
            const filtered = list.filter((res) => res.info.name.toLowerCase().includes("cafe") || res.info.name.toLowerCase().includes("coffee"));
            setFilteredList(filtered);
        }
    }

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

            <div className="flex mx-[160px] my-10">
                <input placeholder="Search for cuisine or restaurant" data-testid="searchInput" className="w-120 h-12 bg-gray-200 pl-4 mr-2 rounded-full focus:outline-none" 
                value={searchText} onChange={(evt)=>{
                    setSearchText(evt.target.value);
                }}></input>
                <button className="bg-gray-200 rounded-3xl w-12" onClick={()=>{
                    const searchFiltered = list.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    res.info.cuisines.some((cuisine) => cuisine.toLowerCase().includes(searchText.toLowerCase())));
                    if(searchFiltered.length===0){
                        setEmptySearch(true);}
                    else{setFilteredList(searchFiltered);}            
                }}><i className="fa-solid fa-magnifying-glass"></i></button>
                {/* <input className="border border-black p-2" value={userName} onChange={(e)=>setUserInfo(e.target.value)
                }/> */}
            
            <div className="ml-[200px]">
                <select onChange={handleOnChange} defaultValue="Filter" className="border border-gray-400 rounded-lg p-2 mt-1 ml-20 focus:outline-none">
                <option disabled hidden value="Filter">Filter</option>
                <option value={"ALL"}>ALL</option>
                <option value={"Ratings 4.0+"}>Ratings 4.0+</option>
                <option value={"Fast Delivery"}>Fast Delivery</option>
                <option value={"American"}>American</option>
                <option value={"Indian"}>Indian</option>
                <option value={"Chinese"}>Chinese</option>
                <option value={"Desserts"}>Desserts</option>
                <option value={"Only Cafes"}>Only Cafes</option>
                </select>
            </div>

            </div>

             {emptySearch===true ?<p className="ml-44 font-bold text-lg">Sorry! no such food providing restaurants are available at present</p>:
                <div className="grid grid-cols-4 gap-10 px-36 py-6">
                {filteredList.map((restaurant) => (
                <Link  key={restaurant.info.id} to = {`/restaurant/${restaurant.info.id}`}>
                    {restaurant.info.isOpen ? <IsOpen resData={restaurant.info}/>:<Rescard resData={restaurant.info}/>}
                </Link>
                )
                )}
            </div>}
        </div>
    );
};


export default Body;