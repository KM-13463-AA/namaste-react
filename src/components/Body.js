import RestaurantCard from "./RestaurantCard";
import {useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
const Body = () => {
    const [listOfRestaurants , setlistOfRestaurants, filteredRestaurants, setfilteredRestaurants] = useListOfRestaurants();
    const [searchText, setsearchText] = useState("");

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="header-body">
                <div className= "search">
                    <input type="text" className="search-txt" value={searchText} onChange={ (e) => {
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
                    <button className="filter-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        console.log(filteredList);
                        setfilteredRestaurants(filteredList);
                    }}>
                        Top rated restaurant
                    </button>
                </div>
            </div>
            <div className="res-container">
            {
               filteredRestaurants.map( (restaurant) => (
                <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))
            }
      </div>
        </div>
      
    );
};
export default Body;