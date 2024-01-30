import {useEffect, useState} from "react";

export const useBody=()=>{
    const [list, setList] = useState([]);
    const fetchData=async()=>{
        let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.115085778662396&lng=77.63604942709208&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING://www.swiggy.com/dapi/restaurants/list/v5?lat=13.115085778662396&lng=77.63604942709208&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json=await data.json();
        // console.log(json);
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);//optional chaining
        // console.log("setlist");
        // setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
        // console.log("setfilteredlist");
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return list;
}