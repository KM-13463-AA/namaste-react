import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants,setlistOfRestaurants]= useState([]);
    const [filteredRestaurants,setfilteredRestaurants]= useState([]);
    const [searchText, setsearchText] = useState("");
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        // console.log(json);
        setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

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
                        const filteredRestaurants = listOfRestaurants.filter( (res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredRestaurants(filteredRestaurants);
                    }}>
                        Search
                    </button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={() =>{
                        const filteredList= listOfRestaurants.filter( 
                            (res) => res.info.avgRating > 4
                        );
                        setlistOfRestaurants(filteredList);
                    }}>
                        Top rated restaurant
                    </button>
                </div>
            </div>
            <div className="res-container">
            {
               filteredRestaurants.map( (restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))
            }
      </div>
        </div>
      
    );
};
export default Body;