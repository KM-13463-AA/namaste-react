import LOGO_URL from "../utils/constant";
const Header = () => {
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
          </ul>
      </div>
    </div>
  );
};
export default Header;