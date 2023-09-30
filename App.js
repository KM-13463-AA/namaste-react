import React from "react"
import ReactDOM from "react-dom/client";
import resObj from "./src/utils/mockData"
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
    );
};

const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
  console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{resData.info.sla.deliveryTime} minutes</h5>
      
    </div>
  );
}

const Body = () => {
  return(
    <div className="res-container">
      {
              resObj.map( (restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              ))
      }
    </div>
  );
}

const AppLayout =() => {
  return (
      <div id="container">
          <div className="app">
              <Header />
              <Body />
          </div>
      </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

