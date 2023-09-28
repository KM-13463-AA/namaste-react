import image from "../assets/logo.jpeg"
const Header = () => (
    <div className="Navbar">
        <img src={image}></img>
        <div className="input-group w-75 h-50">
            <input type="text"className="form-control"></input>
            <button><span className="bi bi-search"></span></button>
        </div>
        <ul id="btnPanel">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
            <li><span class="bi bi-person-circle"></span></li>
        </ul>

    </div>
);
export default Header;
