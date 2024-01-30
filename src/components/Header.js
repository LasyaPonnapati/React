import { Link } from "react-router-dom";

const Header = () => (
    <div className="flex">

        <div className="logo">
            <img src={require("/images/main-logo.png")}alt="logo" />
            <p>tomato</p>
        </div>

        <div className="nav-items">
            <ul>
                <li className="li-items"><Link to="/" className="links">Home</Link></li>
                <li className="li-items"><Link to="/about" className="links">About us</Link></li>
                <li className="li-items"><Link to="/contact" className="links">Contact us</Link></li>
                <li className="li-items"><Link to="/Grocery" className="links">Grocery Store</Link></li>
                <li className="cart"><i className="fa-solid fa-box-open" id="cart-icon"></i>Cart</li>
            </ul>
        </div>

    </div>
);

export default Header;