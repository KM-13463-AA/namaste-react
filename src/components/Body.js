import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants , setlistOfRestaurants, filteredRestaurants, setfilteredRestaurants] = useListOfRestaurants();
    const [searchText, setsearchText] = useState("");
    const {setUserName}= useContext(UserContext);

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body bg-yellow-50">
            <div className="bodyTop flex items-center">
                <div className= "search m-2 p-2">
                    <input type="text" className="search-txt border" value={searchText} onChange={ (e) => {
                        // console.log(e);
                        setsearchText(e.target.value);
                    }}>
                    </input>
                    <button className="search-btn" onClick={() => {
                        const filteredRest = listOfRestaurants.filter( (res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredRestaurants(filteredRest);
                    }}>
                        Search
                    </button>
                </div>
                <div className="filter">
                    <button className="px-4 py-2 bg-slate-200 m-4 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        console.log(filteredList);
                        setfilteredRestaurants(filteredList);
                    }}>
                        Top rated restaurant
                    </button>
                </div>
                <div className= "userNameInput m-2 p-2">
                    <input type="text" className="search-txt border"onChange={ (e) => {
                        setUserName(e.target.value);
                    }}>
                    </input>
                </div>
            </div>
            <div className="flex flex-wrap ">
            {
               filteredRestaurants.map( (restaurant) => (
                    
                    <Link to={"/restaurants/"+restaurant.info.id} className="no-underline" key={restaurant.info.id}>
                        { restaurant?.info?.name === "KFC" ? < PromotedRestaurantCard resData={restaurant} /> : <RestaurantCard  resData={restaurant} />}
                    </Link>
                ))
            }
            </div>
        </div>
      
    );
};
export default Body;