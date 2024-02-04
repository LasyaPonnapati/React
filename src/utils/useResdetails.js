import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

export const useResdetails=(resId)=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchmenu();
    }, []);

    const fetchmenu = (async () => {
        const data = await fetch(`${MENU_URL}${resId}`);
        const json = await data.json();
        setResInfo(json?.data);
    });

    return resInfo;

}