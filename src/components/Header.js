import LOGO_URL from "../utils/constant";
import { useState} from "react";
const Header = () => {
  const [btnNameReact,setbtnNameReact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
          <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
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