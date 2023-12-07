import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data,showItems, setShowIndex, dummy}) => {
    const {title, itemCards} = data;
    
    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div className="w-6/12 mx-auto mb-1">
            <div>
                <div className=" flex justify-between cursor-pointer  bg-yellow-100 mb-3 font-bold px-2 text-base " onClick={handleClick}>
                    <span>{title} ({itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                <div>
                    {itemCards.map( (item)=> (
                        showItems && <ItemList data={item?.card} key={item?.card?.info?.id} dummy={dummy}/>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default RestaurantCategory;