import {CDN_URL} from "../utils/constant" 
const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
  // console.log(resData);
  return (
    <div className="m-3 p-2 w-[215px] no-underline text-black bg-gray-100 hover:bg-gray-300">
      <img className="rounded-lg w-[195] h-[180] " alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
      <h5 className="font-bold text-lg text-yellow-400 pt-2">{name}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating} stars</h6>
      <h6>{costForTwo}</h6>
      <h6>{resData.info.sla.deliveryTime} minutes</h6>
      
    </div>
  );
};
export default RestaurantCard;
