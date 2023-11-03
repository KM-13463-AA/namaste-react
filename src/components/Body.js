import RestaurantCard from "./RestaurantCard";
import {useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
const Body = () => {
    const [listOfRestaurants , setlistOfRestaurants, filteredRestaurants, setfilteredRestaurants] = useListOfRestaurants();
    const [searchText, setsearchText] = useState("");

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body bg-yellow-50">
            <div className="filter flex items-center">
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
            </div>
            <div className="flex flex-wrap ">
            {
               filteredRestaurants.map( (restaurant) => (
                <Link to={"/restaurants/"+restaurant.info.id} class="no-underline" key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))
            }
      </div>
        </div>
      
    );
};
export default Body;