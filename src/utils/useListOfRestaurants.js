import { useEffect, useState } from "react";

const useListOfRestaurants = () => {
    const [listOfRestaurants,setlistOfRestaurants]= useState([]);
    const [filteredRestaurants,setfilteredRestaurants]= useState([]);

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
    return [listOfRestaurants , setlistOfRestaurants, filteredRestaurants, setfilteredRestaurants];
}


export default useListOfRestaurants;

