import { Link } from "react-router-dom";

const Header = () => (
    <div className="flex justify-between shadow-md fixed top-0 left-0 items-center px-20 py-2 w-screen z-50 bg-white">

        <div className="flex items-center">
            <img src={require("/images/main-logo.png")}alt="logo" className="w-12 h-12"/>
            <p className="px-2 font-sans text-lg">tomato</p>
        </div>

        <div>
            <ul className="flex items-center">
                <li className="px-3 font-sans text-base transistion-all duration-200 ease-in-out 0s hover:scale-110"><Link to="/">Home</Link></li>
                <li className="px-3 font-sans text-base transistion-all duration-200 ease-in-out 0s hover:scale-110"><Link to="/about">About us</Link></li>
                <li className="px-3 font-sans text-base transistion-all duration-200 ease-in-out 0s hover:scale-110"><Link to="/contact">Contact us</Link></li>
                <li className="px-3 font-sans text-base transistion-all duration-200 ease-in-out 0s hover:scale-110"><Link to="/Grocery">Grocery Store</Link></li>
                <li className="px-3 font-sans text-base transistion-all duration-200 ease-in-out 0s hover:scale-110 cursor-pointer"><i className="fa-solid fa-box-open text-gray-400 pr-1" id="cart-icon"></i>Cart</li>
            </ul>
        </div>

    </div>
);

export default Header;