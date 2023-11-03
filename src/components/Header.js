import LOGO_URL  from "../utils/constant";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg m-2">
            <div className="logo-container">
                <img className="w-50" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 items-center text-xl">
                    <li className="px-4 "> Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/grocery" className="no-underline text-black">Grocery</Link></li>
                    <li className="px-4"><Link to="/" className="no-underline  text-black">Home</Link></li>
                    <li className="px-4"><Link to="/about" className="no-underline  text-black">About Us</Link></li>
                    <li className="px-4"> <Link to="/contact" className="no-underline  text-black">Contact</Link></li>
                    <button className="login" onClick={()=> {
                        btnNameReact=== "login"? setBtnNameReact("logout") : setBtnNameReact("login");
                    } }> 
                        {btnNameReact}
                    </button>
                </ul>

            </div>
        </div>
    );
};

export default Header;