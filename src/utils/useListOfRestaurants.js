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


// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useListOfRestaurants from "../utils/useListOfRestaurants";

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants, filteredRestaurants, setFilteredRestaurants] = useListOfRestaurants();
//   const [searchText, setSearchText] = useState("");

//   return listOfRestaurants.length === 0 ? <Shimmer /> : (
//     <div className="body">
//       <div className="header-body">
//         <div className= "search">
//           <input
//             type="text"
//             className="search-txt"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="search-btn"
//             onClick={() => {
//               const filteredRest = listOfRestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurants(filteredRest);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="filter">
//           <button className="filter-btn" onClick={() => {
//                 const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
//                 setFilteredRestaurants(filteredList);
//             }}>
//             Top rated restaurant
//           </button>
//         </div>
//       </div>
//       <div className="res-container">
//         {
//           filteredRestaurants.map((restaurant) => (
//             <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
//               <RestaurantCard resData={restaurant} />
//             </Link>
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default Body;