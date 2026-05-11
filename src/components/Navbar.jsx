 
    import { FaUser, FaRegHeart, FaShoppingCart, FaSearch  } from "react-icons/fa";
    import "./Navbar.css"
    import { useState,useContext } from "react";
    import {Link, useNavigate } from "react-router-dom";
    import {CartContext} from "../context/CartContext";

    function Navbar({isLoggedIn,setIsLoggedIn}) {

    const[showDropDown, setShowDropDown] = useState(false);
    const navigate = useNavigate();
    const {cart} = useContext(CartContext);
    const totalItems = cart.reduce(
        (total,item) => total + item.quantity,
        0
    );
    const [query, setQuery] = useState('');
    
    const isAdminLoggedIn = localStorage.getItem("adminToken");

    const logout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    };

    return (
    
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
      <img src="/oxbow.png" alt="oxbow"/>
      </Link> 
   </div>
      
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/women">Women</Link></li>
      <li><Link to="/kids">Kids</Link></li>
      <li><Link to="/accessories">Accessories</Link></li>
       {/*<li><Link to="/admin/upload">Admin</Link></li>*/} 
      
        {isAdminLoggedIn && (
                    <button
                        className="logout-btn"
                        onClick={logout}
                    >
                        Logout
                    </button>
        )}
   
   </ul>

   
 

  </nav>

  
);
  }

    export default Navbar;