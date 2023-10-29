import { useEffect } from "react";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useState } from "react";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);

    useEffect( () => {
        fetchMenu();
    },[]);

    const {resId} = useParams();

    const fetchMenu = async () => {
        const data= await fetch (MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
        console.log(json);
    }

    if(resInfo=== null){
        return <Shimmer/>
    }
    const {name, cuisines, costForTwoMsg} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1> {name}</h1>
            <h3> {cuisines.join(",")} </h3>
            <h3> {costForTwoMsg} </h3>
            <ul>
                {itemCards.map( (item)=>(
                    <li key={item.card.info.id}>{item.card.info.name}:Rs{item.card.info.price}</li>
                ))
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;