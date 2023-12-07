import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    // console.log(resInfo);

    const [showIndex , setShowIndex] = useState(-1);

    const dummy = "dummy data";

    if(resInfo=== null){
        return <Shimmer/>
    }
    
    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) =>
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;

    return (
        <div className="menu text-center text-lg font-bold">
            <h3 className="text-xx font-bold"> {name}</h3>
            <h6 className="text-lg text-slate-600"> {cuisines.join(",")} - {costForTwoMessage} </h6>
            <div>
                {categories.map((c,index) => (
                    < RestaurantCategory 
                        key={c?.card?.card?.title} 
                        data={c?.card?.card} 
                        showItems={index===showIndex? true : false}
                        setShowIndex={ () => setShowIndex(index===showIndex ? -1 : index)}
                        dummy={dummy}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;