import { useEffect } from "react";
import { GROCERY_API } from "../utils/constants";

const Grocery=()=>{

    const fetchData=async()=>{
        const data=await fetch(GROCERY_API);
        const json=await data.json();
        console.log(json);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <h1>This is Grocery store. Currently under Construction</h1>
    )
}

export default Grocery;