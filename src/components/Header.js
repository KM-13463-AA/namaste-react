import LOGO_URL from "../utils/constant";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact,setbtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();
   
  return (
    <div className="header">
      <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
          <ul>
            <li> Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <button className="login" onClick={() => {
              btnNameReact === "login" ? setbtnNameReact("logout") : setbtnNameReact("login");
            }} >
              {btnNameReact}
            </button>
          </ul>
      </div>
    </div>
  );
};
export default Header;